document.addEventListener('DOMContentLoaded', function() {
  Popup.getCurrentTabUrl(function(url) {
    Popup.validatePageUrl(url);
  });
});

function Popup() {
  this.lastValueTextContains = "";
  this.lastValueTextNotContains = "";
  this.confirmDialog = null;
  this.messageDialog = null;
}

Popup();

Popup.getCurrentTabUrl = function(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    console.assert(typeof tab.url == 'string', 'tab.url should be a string');
    callback(tab.url);
  });
}

Popup.validatePageUrl = function(url) {
  if (!url.match(/^https?:\/\/[\w]+\.facebook\.(?:com|net)/ig)) {
    Popup.showMessageDialog("Non Facebook Page", "Please navigate to Facebook in the active tab.");
  }
  else if (!url.match(/^https?:\/\/(?:[\w]+\.){0,2}facebook\.(?:com|net)\/.*\ballactivity\b/ig)) {
    Popup.showMessageDialog("Activity Log Not Opened", "Please navigate to your Activity Log.", Popup.browseToActivityLog);
  }
  else {

    chrome.tabs.executeScript(
      {code:'PostDeletor.checkStatus();'}
    );

    var deleteButton = $("#deleteButton");
    if (deleteButton) deleteButton.click(Popup.deleteButtonHandler);

    var hideButton = $("#hideButton");
    if (hideButton) hideButton.click(Popup.hideButtonHandler);

    var unhideButton = $("#unhideButton");
    if (unhideButton) unhideButton.click(Popup.unhideButtonHandler);

    var unlikeButton = $("#unlikeButton");
    if (unlikeButton) unlikeButton.click(Popup.unlikeButtonHandler);

    var prvPublicButton = $("#prvPublicButton");
    if (prvPublicButton) prvPublicButton.click(Popup.prvPublicButtonHandler);

    var prvFriendsButton = $("#prvFriendsButton");
    if (prvFriendsButton) prvFriendsButton.click(Popup.prvFriendsButtonHandler);

    var prvOnlyMeButton = $("#prvOnlyMeButton");
    if (prvOnlyMeButton) prvOnlyMeButton.click(Popup.prvOnlyMeButtonHandler);

    Popup.enableButtons();

    var backupButton = $("#backupButton");
    if (backupButton) backupButton.click(Popup.browseToBackupPage);

    var d = new Date();
    var yy = d.getFullYear();
    $("#year").val("" + yy);
    var m = d.getMonth() + 1;
    $("#month").val("" + m);
  }
}

Popup.browseToActivityLog = function() {
  chrome.tabs.executeScript(
    {code:'ActivityLogOpener.open();'}
  );
  window.close();
}

Popup.browseToBackupPage = function() {
  chrome.tabs.executeScript(
    {code:'BackupPageOpener.openSettingsPage();'}
  );

  setTimeout(Popup.browseToBackupPageStepTwo, 1000);
}

Popup.browseToBackupPageStepTwo = function() {
  chrome.tabs.executeScript(
    {code:'BackupPageOpener.clickBackupLink();'}
  );
  window.close();
}


Popup.handlerValidateInput = function() {
  var year = $("#year option:selected").val();
  var month = $("#month option:selected").val();

  if (!year && month) {
    Popup.showMessageDialog("Error", "You can't specify the month without also specifying the year.");
    return false;
  }

  return true;
}

Popup.deleteButtonHandler = function() {
  Popup.sendMessage("{event:delete button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to delete posts?",
    "Posts satisfying all conditions will be deleted. Deleted posts are not recoverable.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmDeleteCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.hideButtonHandler = function() {
  Popup.sendMessage("{event:hide button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to hide entries?",
    "Posts satisfying all conditions will be hidden from timeline.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmHideCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.unhideButtonHandler = function() {
  Popup.sendMessage("{event:unhide button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to unhide entries?",
    "Posts satisfying all conditions will be allowed on timeline.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmUnhideCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.unlikeButtonHandler = function() {
  Popup.sendMessage("{event:unlike button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to hide entries?",
    "Posts satisfying all conditions will be unliked.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmUnlikeCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.prvPublicButtonHandler = function() {
  Popup.sendMessage("{event:prvPublic button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to set the privacy setting to Public?",
    "Items' privacy will be set as 'Public'.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmPrvPublicCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.prvFriendsButtonHandler = function() {
  Popup.sendMessage("{event:prvFriends button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to set the privacy setting to 'Friends'?",
    "Items' privacy will be set as 'Friends'.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmPrvFriendsCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.prvOnlyMeButtonHandler = function() {
  Popup.sendMessage("{event:prvOnlyMe button,action:clicked}");

  if (!Popup.handlerValidateInput()) return;

  Popup.disableButtons();

  Popup.showConfirmDialog(
    "Confirm to set the privacy setting to 'Only Me'?",
    "Items' privacy will be set as 'Only Me'.<br/>Click OK to continue.",
    "OK",
    function() { Popup.confirmPrvOnlyMeCallback(); },
    "Cancel",
    Popup.enableButtons);
}

Popup.disableButtons = function() {
  var deleteButton = $("#deleteButton");
  if (deleteButton) deleteButton.prop('disabled', true);
  var privacyButton = $("#privacyButton");
  if (privacyButton) privacyButton.prop('disabled', true);
  var toggleButton = $("#toggleButton");
  if (toggleButton) toggleButton.prop('disabled', true);
  var unlikeButton = $("#unlikeButton");
  if (unlikeButton) unlikeButton.prop('disabled', true);
}

Popup.enableButtons = function() {
  var deleteButton = $("#deleteButton");
  if (deleteButton) deleteButton.prop('disabled', false);
//  var privacyButton = $("#privacyButton");
//  if (privacyButton) privacyButton.prop('disabled', false);
  var toggleButton = $("#toggleButton");
  if (toggleButton) toggleButton.prop('disabled', false);
  var unlikeButton = $("#unlikeButton");
  if (unlikeButton) unlikeButton.prop('disabled', false);
}

Popup.confirmCallbackCommon = function() {
  chrome.tabs.executeScript(
    {code:'PostDeletor.init();'}
  );

  Popup.sendMessage("{event:popup confirm button,action:clicked}");

  if ($("#prescanCheckbox")[0].checked) {
    chrome.tabs.executeScript(
      {code:'PostDeletor.prescan=true;'}
    );

    Popup.sendMessage("{event:prescan checkbox,action:checked}");
  }
  else {
    Popup.sendMessage("{event:prescan checkbox,action:unchecked}");
  }

  var year = $("#year option:selected").val();
  var month = $("#month option:selected").val();
  var dateRange = null;
  if (year) {
    if (month) {
      dateRange = "month_" + year + "_" + month;
    }
    else {
      dateRange = "year_" + year;
    }
  }
  if (dateRange) {
    console.log("Date Range: " + dateRange);
    chrome.tabs.executeScript(
      {code:'PostDeletor.dateRange="' + dateRange + '";'}
    );
  }

  var strContains = "";
  if ($("#textContains").val()) {
    strContains = $("#textContains").val().trim().toLowerCase();
    console.log(strContains);
    chrome.tabs.executeScript(
      {code:'PostDeletor.containText="' + strContains + '";'}
    );
  }

  var strNotContains = "";
  if ($("#textNotContains").val()) {
    strNotContains = $("#textNotContains").val().trim().toLowerCase();
    console.log(strNotContains);
    chrome.tabs.executeScript(
      {code:'PostDeletor.notContainText="' + strNotContains + '";'}
    );
  }

  var delayFactor = $("#delayFactor option:selected").val();
  if (delayFactor) {
    console.log("Delay Factor: " + delayFactor);
    chrome.tabs.executeScript(
      {code:'PostDeletor.delayFactor="' + delayFactor + '";'}
    );
  }  
}

Popup.confirmDeleteCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="delete";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Deleting posts...", Popup.reloadTab, "Stop Now");
}

Popup.confirmHideCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="hide";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Hiding entries...", Popup.reloadTab, "Stop Now");
}

Popup.confirmUnhideCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="unhide";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Unhiding entries...", Popup.reloadTab, "Stop Now");
}

Popup.confirmUnlikeCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="unlike";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Unliking entries...", Popup.reloadTab, "Stop Now");
}

Popup.confirmPrvPublicCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="prvPublic";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Changing privacy to 'Public' ...", Popup.reloadTab, "Stop Now");
}

Popup.confirmPrvFriendsCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="prvFriends";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Changing privacy to 'Friends' ...", Popup.reloadTab, "Stop Now");
}

Popup.confirmPrvOnlyMeCallback = function() {
  Popup.confirmCallbackCommon();

  chrome.tabs.executeScript(
    {code:'PostDeletor.operator="prvOnlyMe";PostDeletor.processPosts();'}
  );

  if ($("#prescanCheckbox")[0].checked) {
    setTimeout(window.close, 1000);
    return;
  }

  Popup.showMessageDialog("Information", "Changing privacy to 'Only Me' ...", Popup.reloadTab, "Stop Now");
}

Popup.reloadTab = function() {
  chrome.tabs.executeScript(
    {code:'location.reload();'}
  );
  window.close();
}

Popup.openReviewPage = function() {
  window.open(
    "https://chrome.google.com/webstore/detail/facebook-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae/reviews",
    "_blank"
  );
}

Popup.closeAllDialogs = function() {
  
  if (Popup.confirmDialog) {
    $("#dialog-confirm").dialog("close");
  }

  if (Popup.messageDialog) {
    $("#dialog-message").dialog("close");
  }
}

Popup.showMessageDialog = function(title, message, okCallback, okText) {
  $("#dialog-message").attr("title",title);

  if (message.indexOf("Success!") == 0) {
    message = message +
              "<br/><br/>If you haven't, would you like to <a target=\"_blank\" href=\"https://chrome.google.com/webstore/detail/facebook-post-manager/ljfidlkcmdmmibngdfikhffffdmphjae/reviews\">review</a> it please? Or buy me a coffee?" +
              "<br/><br/><a style=\"cursor: pointer;\" target=\"_blank\" href=\"https://www.paypal.me/hanshen\"><img src=\"https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif\" /></a>" +
              "<br/><br/>If you are living in Quebec, Canada, may I refer you to <a target=\"_blank\" href=\"https://fizz.ca\">Fizz Mobile</a> network? Use this referral code to save $25: OYPQS" +
              "<br/><br/>" +
              "<br/><br/>None of the above is mandatory. The extension does not check whether you have reviewed or donated.";
    Popup.showConfirmDialog(title, message, "Yes", Popup.openReviewPage, "Cancel", window.close);
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

  Popup.messageDialog = $("#dialog-message").dialog({
    resizable: false,
    height:240,
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

Popup.showConfirmDialog = function(title, message, confirmText, confirmCallback, cancelText, cancelCallback) {
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

  Popup.confirmDialog = $("#dialog-confirm").dialog({
    resizable: false,
    height:280,
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

Popup.sendMessage = function(message) {
  chrome.runtime.sendMessage(message, function(response) {});
};


$(function() {
  $(document).tooltip();

  $("#textContains").on("change paste mouseup keyup", function() {
    if ($(this).val() != Popup.lastValueTextContains) {
      Popup.lastValueTextContains = $(this).val();
      chrome.tabs.executeScript(
        {code:'Utils.containText="' + Popup.lastValueTextContains.trim().toLowerCase() + '";Utils.containTextFunc=null;Utils.highlighterStarted=true;Utils.highlight();'}
      );
    }
  });

  $("#textNotContains").on("change paste mouseup keyup", function() {
    if ($(this).val() != Popup.lastValueTextNotContains) {
      Popup.lastValueTextNotContains = $(this).val();
      chrome.tabs.executeScript(
        {code:'Utils.notContainText="' + Popup.lastValueTextNotContains.trim().toLowerCase() + '";Utils.notContainTextFunc=null;Utils.highlighterStarted=true;Utils.highlight();'}
      );
    }
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("Message received: " + request);
    if (sender && sender.url) { 
      console.log("Message received from: " + sender.url);
      if (!sender.url.match(/^https?:\/\/(?:[\w\d]+\.)facebook\.com\//ig)) {
        return;
      }
    }

    Popup.closeAllDialogs();

    if (request && request.match(/^Page out-of-sync/ig)) {
      Popup.showMessageDialog("Information", request, Popup.reloadTab);
    }
    else if (request && request.match(/^\{deleted\:\d+\}$/ig)) {
      var counter = request.substring(9,request.length-1);
      Popup.showMessageDialog("Information", "Deleting posts...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{hidden\:\d+\}$/ig)) {
      var counter = request.substring(8,request.length-1);
      Popup.showMessageDialog("Information", "Hiding entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{unhidden\:\d+\}$/ig)) {
      var counter = request.substring(10,request.length-1);
      Popup.showMessageDialog("Information", "Unhiding entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{unliked\:\d+\}$/ig)) {
      var counter = request.substring(9,request.length-1);
      Popup.showMessageDialog("Information", "Unliking entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }

    else if (request && request.match(/^\{setPublic\:\d+\}$/ig)) {
      var counter = request.substring(11,request.length-1);
      Popup.showMessageDialog("Information", "Set privacy 'Public' to entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{setFriends\:\d+\}$/ig)) {
      var counter = request.substring(12,request.length-1);
      Popup.showMessageDialog("Information", "Set privacy 'Friends' to entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{setOnlyMe\:\d+\}$/ig)) {
      var counter = request.substring(11,request.length-1);
      Popup.showMessageDialog("Information", "Set privacy 'Only Me' to entries...(" + counter + ")", Popup.reloadTab, "Stop Now");
    }



    else if (request && request.match(/^\{running\:true\b.*\bprescanning:true\b/ig)) {
      Popup.disableButtons();
      Popup.showMessageDialog("Information", "Prescanning the activity log. Please verify the Facebook page and continue.", window.close);
    }
    else if (request && request.match(/^\{.*\bprescanned:true\b/ig)) {
      Popup.showMessageDialog("Information", "This page has been processed. Please refresh the page for a next task.", Popup.reloadTab);
    }
    else if (request && request.match(/^\{running\:true\b/ig)) {
      Popup.disableButtons();
      Popup.showMessageDialog("Information", "Processing entries...", Popup.reloadTab, "Stop Now");
    }
    else if (request && request.match(/^\{running\:false\b/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{event\:/ig)) {
      //ignore
    }
    else {
      Popup.showMessageDialog("Information", request, window.close);
    }

    sendResponse("{received}");
  }
);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-73397006-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
