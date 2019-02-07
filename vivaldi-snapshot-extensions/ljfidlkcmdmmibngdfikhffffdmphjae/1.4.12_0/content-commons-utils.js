function Utils() {
  this.highlighterStarted = false;
  this.containText = null;
  this.containTextFunc = null;
  this.notContainText = null;
  this.notContainTextFunc = null;
  this.messagePending = false;
}

Utils.sendMessage = function(message, forceNative) {

  Utils.messagePending = true;
  chrome.runtime.sendMessage(message, function(response) {
    console.log("Message sent: " + message);
    if (response) {
      Utils.messagePending = false;
      console.log("Response received: " + response);
    }
  });

  setTimeout(function() {
    if(Utils.messagePending && forceNative && !message.match(/^\{/ig)) {
      Utils.nativeShowMessage(message);
      console.log("Message showed natively: " + message);
    }
  }, 500);
  
};

Utils.reloadTab = function() {
  location.reload();
}

Utils.nativeShowMessage = function(message) {
  if (message && message.match(/^Page out-of-sync/ig)) {
    Utils.showMessageDialog("Information", message, Utils.reloadTab);
  }
  else if (message && message.match(/^\{.*}$/ig)) {
    // do nothing
  }
  else {
    Utils.showMessageDialog("Information", message);
  }
}

Utils.clearPopup = function() {
  document.body.click();
}

Utils.highlight = function() {
  if (!Utils.highlighterStarted) return;

  var trs = document.querySelectorAll("div.fbTimelineLogBody div.fbTimelineLogStream tr");
  if (trs && trs.length > 0) {
    for (var i = 0; i < trs.length; i++) {
      var tr = trs[i];
      if (tr) {
         tr = $(tr)
         var textContent = tr.text();
         if (textContent) {
           textContent = textContent.toLowerCase();
           if (Utils.shouldHighlight(textContent)) {
             tr.addClass("content-highlighter");
           }
           else {
             tr.removeClass("content-highlighter");
           }
         }
      }
    }
  }
}

Utils.openReviewPage = function() {
  window.open(
    "https://chrome.google.com/webstore/detail/facebook-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae/reviews",
    "_blank"
  );
}

Utils.showMessageDialog = function(title, message, okCallback, okText) {
  $("#dialog-message").attr("title",title);

  if (message.indexOf("Success!") == 0) {
    message = message +
              "<br/><br/>If you haven't, would you like to <a target=\"_blank\" href=\"https://chrome.google.com/webstore/detail/facebook-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae/reviews\">review</a> it please? Or buy me a coffee?" +
              "<br/><br/><a style=\"cursor: pointer;\" target=\"_blank\" href=\"https://www.paypal.me/hanshen\"><img src=\"https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif\" /></a>" +
              "<br/><br/>If you are living in Quebec, Canada, may I refer you to <a target=\"_blank\" href=\"https://fizz.ca\">Fizz Mobile</a> network? Use this referral code to save $25: OYPQS" +
              "<br/><br/>" +
              "<br/><br/>None of the above is mandatory. The extension does not check whether you have reviewed or donated.";
    Utils.showConfirmDialog(title, message, "Yes", Utils.openReviewPage, "Cancel");
    return;
  }
  $("#dialog-message-content").html(message);
  if (!okCallback) {
    okCallbackDelegate = function() { $(this).dialog( "close" ); }
  }
  else {
    okCallbackDelegate = function() { $(this).dialog( "close" ); okCallback();}
  }
  if (!okText) {
    okText = "OK";
  }
  $("#dialog-message").dialog({
    resizable: false,
    width:480,
    height:480,
    modal: true,
    buttons: [
      {
        text: okText,
        click: okCallbackDelegate,
      }
    ],
    dialogClass: 'no-close'
  });
}

Utils.showConfirmDialog = function(title, message, confirmText, confirmCallback, cancelText, cancelCallback) {
  $("#dialog-confirm").attr("title",title);
  $("#dialog-confirm-content").html(message);

  if (!confirmText) {
    confirmText = "OK";
  }

  if (!confirmCallback) {
    confirmCallbackDelegate = function() { $(this).dialog( "close" ); }
  }
  else {
    confirmCallbackDelegate = function() { $(this).dialog( "close" ); confirmCallback();}
  }

  if (!cancelText) {
    cancelText = "Cancel";
  }

  if (!cancelCallback) {
    cancelCallbackDelegate = function() { $(this).dialog( "close" ); }
  }
  else {
    cancelCallbackDelegate = function() { $(this).dialog( "close" ); cancelCallback();}
  }

  $( "#dialog-confirm" ).dialog({
    resizable: false,
    width:480,
    height:360,
    modal: true,
    buttons: [
      {
        text: confirmText,
        click: confirmCallbackDelegate,
      },
      {
        text: cancelText,
        click: cancelCallbackDelegate
      }
    ],
    dialogClass: 'no-close'
  });
}

Utils.prepareContainTextFunc = function() {
  if (Utils.containText && !Utils.containTextFunc) {
    if (!Utils.containText.match(/\b(and|or)\b/i)) {
      Utils.containTextFunc = "NA";
      return;
    }
    try {
      var containTextExp = math.parse(Utils.containText);
      var exp = Utils.containText;
      exp = exp.replace(/\band\b/g, "&&");
      exp = exp.replace(/\bor\b/g, "||");
      exp = exp.replace(/[\-\w\:\,\.]+(?:\s+[\-\w\:\,\.]+)*/g, "target.search('$&')>=0");
      exp = "return " + exp + ";";
      Utils.containTextFunc = new Function('target', exp);
    } catch(err) {
      Utils.containTextFunc = "NA";
    }
  }
}

Utils.prepareNotContainTextFunc = function() {
  if (Utils.notContainText && !Utils.notContainTextFunc) {
    if (!Utils.notContainText.match(/\b(and|or)\b/i)) {
      Utils.notContainTextFunc = "NA";
      return;
    }
    try {
      var notContainTextExp = math.parse(Utils.notContainText);
      var exp = Utils.notContainText;
      exp = exp.replace(/\band\b/g, "&&");
      exp = exp.replace(/\bor\b/g, "||");
      exp = exp.replace(/[\-\w\:\,\.]+(?:\s+[\-\w\:\,\.]+)*/g, "target.search('$&')>=0");
      exp = "return " + exp + ";";
      Utils.notContainTextFunc = new Function('target', exp);
    } catch(err) {
      Utils.notContainTextFunc = "NA";
    }
  }
}

Utils.shouldHighlight = function(textContent) {
  var flag = false;

  if (!Utils.containText && Utils.notContainText) {
    flag = true;
  }

  Utils.prepareContainTextFunc();

  if (Utils.containText) {
    if (!jQuery.isFunction(Utils.containTextFunc) && textContent.indexOf(Utils.containText.toLowerCase()) >= 0) {
      flag = true;
    }
    if (jQuery.isFunction(Utils.containTextFunc) && Utils.containTextFunc(textContent)) {
      flag = true;
    }
  }

  Utils.prepareNotContainTextFunc();

  if (Utils.notContainText) {
    if (!jQuery.isFunction(Utils.notContainTextFunc) && textContent.indexOf(Utils.notContainText.toLowerCase()) >= 0) {
      flag = false;
    }
    if (jQuery.isFunction(Utils.notContainTextFunc) && Utils.notContainTextFunc(textContent)) {
      flag = false;
    }
  }
  return flag;
}

Utils.insertDialog = function() {
  var fpmDialogContainer = $("div.fpm-dialog-container");
  if (fpmDialogContainer && fpmDialogContainer.length > 0) return;
  $('body').append('<div id=dialog-message class="myDialog hiddenDialog" title=dialog-message-title><p><span id=dialog-message-content></span></div><div id=dialog-confirm class="myDialog hiddenDialog" title=dialog-confirm-title><p><span id=dialog-confirm-content></span></div><div id=confirmOptionMenu class="jq-dropdown jq-dropdown-tip" style=width:50px><ul class=jq-dropdown-menu><li><a id=selectAllButton>Select All</a><li><a id=deselectAllButton>Deselect All</a><li class=jq-dropdown-divider><li><a id=confirmOperationButton>Confirm</a><li><a id=cancelOpeartionButton>Cancel</a></ul></div>');
}

$(function() {
  Utils();
  $(window).scroll(Utils.highlight);
  Utils.insertDialog();
});
