function PostDeletor() {
  this.index = 0;
  this.running = false;
  this.currentEditButtonId = null;
  this.previousEditButtonId = null;
  this.operator = "delete";
  this.prescan = false;
  this.prescanned = false;
  this.stage = 0;
  this.deleteCounter = 0;
  this.hideCounter = 0;
  this.unhideCounter = 0;
  this.unlikeCounter = 0;
  this.privacyCounter = 0;
  this.total = 8192;
  this.loopCounter = 0;
  this.maxLoop = 16;
  this.rolldownThredshold = 12;
  this.delayFactor=4;
  this.dateRange = null;
  this.containText = null;
  this.containTextFunc = null;
  this.notContainText = null;
  this.notContainTextFunc = null;
}

PostDeletor.prepareConfirmButton = function() {
  var selectAllButton = $("#selectAllButton");
  if (selectAllButton) selectAllButton.click(PostDeletor.selectAll);

  var deselectAllButton = $("#deselectAllButton");
  if (deselectAllButton) deselectAllButton.click(PostDeletor.deselectAll);

  var confirmOperationButton = $("#confirmOperationButton");
  if (confirmOperationButton) confirmOperationButton.click(PostDeletor.confirmOperation);

  var cancelOpeartionButton = $("#cancelOpeartionButton");
  if (cancelOpeartionButton) cancelOpeartionButton.click(PostDeletor.cancelOperation);

  var confirmButtonText = null;
  if (PostDeletor.operator.startsWith("prv")) {
    confirmButtonText = "Confirm to proceed";
  }
  else {
    confirmButtonText = "Confirm to " + PostDeletor.operator;
  }
  var prescanButtons = PostDeletor.getOrCreatePrescanButtons(confirmButtonText);
  $(prescanButtons[0]).jqDropdown("attach","#confirmOptionMenu");
}

PostDeletor.noop = function() {}

PostDeletor.selectAll = function() {
  $("._fpm_chkbx").prop("checked", true);
}

PostDeletor.deselectAll = function() {
  $("._fpm_chkbx").prop("checked", false);
}

PostDeletor.confirmOperation = function() {
  Utils.sendMessage("{event:content confirm button,action:clicked}");
  PostDeletor.processPostsStageTwo();
}

PostDeletor.cancelOperation = function() {
  PostDeletor.init();
  location.reload();
}

PostDeletor.end = function() {
  Utils.clearPopup();

  if (PostDeletor.prescan && PostDeletor.stage === 1) {
    $("._prescanDiv").remove();
  }

  if (PostDeletor.prescan && PostDeletor.stage === 0) {
    PostDeletor.prescanned = true;
    PostDeletor.prepareConfirmButton();
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("Activity log scanned. Please click the Confirm button on top of the page.", true);
      },
      500
    );
  }
  else if (PostDeletor.deleteCounter > 0) {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("Success! Deleted " + PostDeletor.deleteCounter + " posts.", true);
      },
      500
    );    
    
  }
  else if (PostDeletor.hideCounter > 0) {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("Success! Hid " + PostDeletor.hideCounter + " posts.", true);
      },
      500
    );
  }
  else if (PostDeletor.unhideCounter > 0) {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("Success! Unhid " + PostDeletor.unhideCounter + " posts.", true);
      },
      500
    );
  }
  else if (PostDeletor.unlikeCounter > 0) {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("Success! Unliked " + PostDeletor.unlikeCounter + " posts.", true);
      },
      500
    );
  }
  else if (PostDeletor.privacyCounter > 0) {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);

    var messageStr = null;
    if (PostDeletor.operator === "prvPublic") {
      messageStr = "Set privacy 'Public' to ";
    }
    else if (PostDeletor.operator === "prvFriends") {
      messageStr = "Set privacy 'Friends' to ";
    }
    else if (PostDeletor.operator === "prvOnlyMe") {
      messageStr = "Set privacy 'Only Me' to ";
    }
    setTimeout(function() {
        Utils.sendMessage("Success! " + messageStr + PostDeletor.privacyCounter + " posts.", true);
      },
      500
    );
  }
  else {
    PostDeletor.running=false;
    PostDeletor.prescan=false;
    PostDeletor.stage = 0;
    PostDeletor.preroll(false);
    setTimeout(function() {
        Utils.sendMessage("No entry found.", true);
      },
      500
    );
  }
}

PostDeletor.next = function() {
  Utils.clearPopup();
  PostDeletor.index++;
  if (PostDeletor.currentEditButtonId) {
    PostDeletor.previousEditButtonId = PostDeletor.currentEditButtonId
  }
  PostDeletor.currentEditButtonId = null;

  if (PostDeletor.index >= PostDeletor.total) {
    PostDeletor.end();
  }
  else {
    setTimeout(function() { PostDeletor.processPost(PostDeletor.index); }, 50 * PostDeletor.delayFactor);
  }
}

PostDeletor.findConfirmButton = function() {
  return document.querySelector("div[role='dialog'] form._s[action^='/ajax/timeline/delete'] button");
}

PostDeletor.waitForConfirmButtonToDisappear = function() {
  var confirmButton = PostDeletor.findConfirmButton();
  if (confirmButton) {
    setTimeout(PostDeletor.waitForConfirmButtonToDisappear, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
  else {
    PostDeletor.deleteCounter++;
    Utils.sendMessage("{deleted:" + PostDeletor.deleteCounter + "}");
    console.log("Posts deleted: " + PostDeletor.deleteCounter);
    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
}

PostDeletor.findOutOfSyncButton = function() {
  return document.querySelector("div[role='dialog'] div._t a.layerCancel");
}

PostDeletor.fastDelete = function() {
  var deletePostForms = $("form[action^='/ajax/timeline/delete']");
  if (deletePostForms && deletePostForms.length > 0) {
    var deletePostForm = $(deletePostForms[0]);
    var formUrl = deletePostForm.prop("action");
    var formData = deletePostForm.serialize();

    $.ajax({
      url: formUrl,
      data: formData,
      method: 'POST'
    });

    $(PostDeletor.findConfirmButton()).closest("form").find("a.layerCancel[role='button']")[0].click();

    var editButton = PostDeletor.findEditButton();
    if (editButton) {
      var postRows = $(editButton).parents('table.uiGrid').parent();
      if (postRows && postRows.length > 0) {
        postRows.remove();
      }
    }

    PostDeletor.deleteCounter++;
    Utils.sendMessage("{deleted:" + PostDeletor.deleteCounter + "}");
    console.log("Posts deleted: " + PostDeletor.deleteCounter);
    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
}

PostDeletor.clickConfirmButton = function() {
  var outOfSyncButton = PostDeletor.findOutOfSyncButton();
  if (outOfSyncButton) {
    outOfSyncButton.click();
    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
  else {
    PostDeletor.loopCounter++;
    var confirmButton = PostDeletor.findConfirmButton();
    if (confirmButton) {
      PostDeletor.loopCounter = 0;
      PostDeletor.fastDelete();
    }
    else if (PostDeletor.loopCounter >= PostDeletor.maxLoop ) {
      PostDeletor.end();
    }
    else { setTimeout(function() { PostDeletor.clickConfirmButton(); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1)); }
  }
}

PostDeletor.findContextMenu = function() {
  if (!PostDeletor.currentEditButtonId) {
    Utils.sendMessage("Page out-of-sync. Please reload the page, and then try again.", true);
    return null;
  }

  return document.querySelector("div.uiContextualLayerPositioner.uiLayer[data-ownerid='" + PostDeletor.currentEditButtonId + "'] ul[role='menu']");
}

PostDeletor.findDeleteButton = function(menu) {
  for (var i = 0; i < menu.children.length; i++) {
    var item = menu.children[i];
    if (item) {
      var link = item.firstElementChild;
      if (link) {
        var linkAction = link.getAttribute("ajaxify");
        if (linkAction && linkAction.indexOf("/ajax/timeline/delete/confirm") == 0) { return link; }
        else if (linkAction && linkAction.indexOf("/ajax/timeline/all_activity/remove_content.php") == 0) { return link; }  
      }
    }
  }
  return null;
}

PostDeletor.clickDeleteButton = function(i) {
  PostDeletor.loopCounter++;
  var contextMenu = PostDeletor.findContextMenu();
  if (contextMenu) {
    PostDeletor.loopCounter = 0;
    var deleteButton = PostDeletor.findDeleteButton(contextMenu);
    if (deleteButton) {
      if (PostDeletor.prescan && PostDeletor.stage === 0) {
        PostDeletor.addCheckbox();
        setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
      }
      else {
        var deleteAction = deleteButton.getAttribute("ajaxify");
        deleteButton.click();
        if (deleteAction.indexOf("/ajax/timeline/delete/confirm") == 0) {
          setTimeout(PostDeletor.clickConfirmButton, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
        }
        else {
          PostDeletor.deleteCounter++;
          Utils.sendMessage("{deleted:" + PostDeletor.deleteCounter + "}");
          console.log("Posts deleted: " + PostDeletor.deleteCounter);

          setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
        }
      }
    }
    else {
      setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
    }
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop) { 
    PostDeletor.end();
  }
  else {
    Utils.clearPopup();
    setTimeout(function() { PostDeletor.clickDeleteButton(i); }, 100 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.findHideButton = function(menu) {
  for (var i = 0; i < menu.children.length; i++) {
    var item = menu.children[i];
    if (item) {
      var link = item.firstElementChild;
      if (link) {
        var linkAction = link.getAttribute("ajaxify");
        if (linkAction && linkAction.indexOf("/ajax/timeline/all_activity/visibility.php?action=hide") == 0) { return link; }
      }
    }
  }
  return null;
}

PostDeletor.clickHideButton = function(i) {
  PostDeletor.loopCounter++;
  var contextMenu = PostDeletor.findContextMenu();
  if (contextMenu) {
    PostDeletor.loopCounter = 0;
    var hideButton = PostDeletor.findHideButton(contextMenu);
    if (hideButton) {
      if (PostDeletor.prescan && PostDeletor.stage === 0) {
        PostDeletor.addCheckbox();
      }
      else {
        hideButton.click();
        PostDeletor.hideCounter++;
        Utils.sendMessage("{hidden:" + PostDeletor.hideCounter + "}");
        console.log("Posts hidden: " + PostDeletor.hideCounter);
      }
    }

    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop) { 
    PostDeletor.end();
  }
  else {
    Utils.clearPopup();
    setTimeout(function() { PostDeletor.clickHideButton(i); }, 100 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.findUnhideButton = function(menu) {
  for (var i = 0; i < menu.children.length; i++) {
    var item = menu.children[i];
    if (item) {
      var link = item.firstElementChild;
      if (link) {
        var linkAction = link.getAttribute("ajaxify");
        if (linkAction && linkAction.indexOf("/ajax/timeline/all_activity/visibility.php?action=allow") == 0) { return link; }
      }
    }
  }
  return null;
}

PostDeletor.clickUnhideButton = function(i) {
  PostDeletor.loopCounter++;
  var contextMenu = PostDeletor.findContextMenu();
  if (contextMenu) {
    PostDeletor.loopCounter = 0;
    var unhideButton = PostDeletor.findUnhideButton(contextMenu);
    if (unhideButton) {
      if (PostDeletor.prescan && PostDeletor.stage === 0) {
        PostDeletor.addCheckbox();
      }
      else {
        unhideButton.click();
        PostDeletor.unhideCounter++;
        Utils.sendMessage("{unhidden:" + PostDeletor.unhideCounter + "}");
        console.log("Posts unhidden: " + PostDeletor.unhideCounter);
      }
    }

    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop) { 
    PostDeletor.end();
  }
  else {
    Utils.clearPopup();
    setTimeout(function() { PostDeletor.clickUnhideButton(i); }, 100 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.findUnlikeButton = function(menu) {
  for (var i = 0; i < menu.children.length; i++) {
    var item = menu.children[i];
    if (item) {
      var link = item.firstElementChild;
      if (link) {
        var linkAction = link.getAttribute("ajaxify");
        if (linkAction) {
          if (linkAction.indexOf("/ajax/timeline/all_activity/remove_content.php?action=unfan_fbpage") == 0) { return link; }
          if (linkAction.indexOf("/ajax/timeline/all_activity/remove_content.php?action=unlike") == 0) { return link; }
        } 
      }
    }
  }
  return null;
}

PostDeletor.clickUnlikeButton = function(i) {
  PostDeletor.loopCounter++;
  var contextMenu = PostDeletor.findContextMenu();
  if (contextMenu) {
    PostDeletor.loopCounter = 0;
    var unlikeButton = PostDeletor.findUnlikeButton(contextMenu);
    if (unlikeButton) {
      if (PostDeletor.prescan && PostDeletor.stage === 0) {
        PostDeletor.addCheckbox();
      }
      else {
        unlikeButton.click();
        PostDeletor.unlikeCounter++;
        Utils.sendMessage("{unliked:" + PostDeletor.unlikeCounter + "}");
        console.log("Posts unliked: " + PostDeletor.unlikeCounter);
      }
    }

    setTimeout(PostDeletor.next, 25 * PostDeletor.delayFactor);
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop) { 
    PostDeletor.end();
  }
  else {
    Utils.clearPopup();
    setTimeout(function() { PostDeletor.clickUnhideButton(i); }, 100 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.findPrivacyOptionButton = function(prvMenuButton, value) {
  var privacyOptions = $(prvMenuButton).parent().parent().find("div.uiSelectorMenuWrapper ul > li > a");
  var returnOption = null;
  var searchStr = "%7B%22value%22%3A" + value + "%7D%7D";

  for (var i = 0; i < privacyOptions.length; i++) {
    var item = privacyOptions[i];
    if (item) {
      var anOption = $(item);
      var ajaxifyStr = anOption.attr("ajaxify");
      if (ajaxifyStr && ajaxifyStr.endsWith(searchStr)) {
        returnOption = item;
      }
    }
  }
  
  return returnOption;
}

PostDeletor.clickPrivacyButton = function(i, value) {
  PostDeletor.loopCounter++;

  var prvMenuButton = PostDeletor.findPrivacyButton();
  if (prvMenuButton) {
    if (PostDeletor.prescan && PostDeletor.stage === 0) {
      PostDeletor.addCheckbox();
      setTimeout(PostDeletor.next, 100 * (Math.log2(PostDeletor.delayFactor) + 1));
    }
    else {
      var prvOptionButton = PostDeletor.findPrivacyOptionButton(prvMenuButton, value);
      if (prvOptionButton) {
        prvOptionButton.click();

        PostDeletor.privacyCounter++;

        var eventMsg1 = null;
        if (value == 80) eventMsg1 = "setPublic";
        if (value == 40) eventMsg1 = "setFriends";
        if (value == 10) eventMsg1 = "setOnlyMe";
        var eventMsg2 = null;
        if (value == 80) eventMsg2 = "set as Public";
        if (value == 40) eventMsg2 = "set as Friends";
        if (value == 10) eventMsg2 = "set as OnlyMe";

        Utils.sendMessage("{" + eventMsg1 + ":" + PostDeletor.privacyCounter + "}");
        console.log("Posts " + eventMsg2 +": " + PostDeletor.privacyCounter);
        setTimeout(PostDeletor.next, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
      }
      else {
        Utils.clearPopup();
        prvMenuButton = PostDeletor.findPrivacyButton();
        prvMenuButton.click();
        setTimeout(function() { PostDeletor.clickPrivacyButton(i, value); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
      }
    }
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop) { 
    PostDeletor.end();
  }
  else {
    Utils.clearPopup();
    prvMenuButton = PostDeletor.findPrivacyButton();
    prvMenuButton.click();
    setTimeout(function() { PostDeletor.clickPrivacyButton(i, value); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.addCheckbox = function() {
  var divElem;
  if (PostDeletor.dateRange) {
    divElems = document.querySelectorAll("div.fbTimelineLogBody div#" + PostDeletor.dateRange + " div.fbTimelineLogStream table tr td:nth-of-type(1) > div > div > div");
  }
  else {
    divElems = document.querySelectorAll("div.fbTimelineLogBody div.fbTimelineLogStream table tr td:nth-of-type(1) > div > div > div");
  }

  var i = PostDeletor.index;
  if (divElems && divElems.length > i) {
    $(divElems[i]).prepend("<input type='checkbox' class='_fpm_chkbx' checked/>");
  }
}

PostDeletor.findEditButton = function() {
  var editButtons;
  if (PostDeletor.dateRange) {
    editButtons = document.querySelectorAll("div.fbTimelineLogBody div#" + PostDeletor.dateRange + " div.fbTimelineLogStream div.rfloat a");
  }
  else {
    editButtons = document.querySelectorAll("div.fbTimelineLogBody div.fbTimelineLogStream div.rfloat a");
  }

  var i = PostDeletor.index;
  if (PostDeletor.deleteCounter > 0) { 
    i -= PostDeletor.deleteCounter;
  }
  else if (PostDeletor.unlikeCounter > 0) {
    i -= PostDeletor.unlikeCounter;
  }

  if (editButtons && editButtons.length > i) {
    return editButtons[i];
  }
  else {
    return null;
  }
}

PostDeletor.findPrivacyButton = function() {
  var editButtons;
  if (PostDeletor.dateRange) {
    editButtons = document.querySelectorAll("div.fbTimelineLogBody div#" + PostDeletor.dateRange + " div.fbTimelineLogStream div.uiPopover > a");
  }
  else {
    editButtons = document.querySelectorAll("div.fbTimelineLogBody div.fbTimelineLogStream div.uiPopover > a");
  }

  var i = PostDeletor.index;
  if (PostDeletor.deleteCounter > 0) { 
    i -= PostDeletor.deleteCounter;
  }
  else if (PostDeletor.unlikeCounter > 0) {
    i -= PostDeletor.unlikeCounter;
  }

  if (editButtons && editButtons.length > i) {
    return editButtons[i];
  }
  else {
    return null;
  }
}

PostDeletor.shouldRolldown = function() {
  var currentSegment = document.querySelector("ul.fbTimelineLogScrubber li.clearfix._3rrn");
  if (!currentSegment) {
    var firstSegmentLink = document.querySelector("ul.fbTimelineLogScrubber li.clearfix a");
    if (firstSegmentLink) firstSegmentLink.click();
    return false;
  }
  else {
    var segmentYear, dateRangeYear;

    var yearKey = currentSegment.getAttribute("data-key");
    if (yearKey) {
      segmentYear = yearKey.substring(5);
    }

    if (PostDeletor.dateRange) {
      if (PostDeletor.dateRange.startsWith("year")) {
        dateRangeYear = PostDeletor.dateRange.substring(5, 9);
      }
      else {
        dateRangeYear = PostDeletor.dateRange.substring(6, 10);
      }
    }

    if (segmentYear && dateRangeYear) {
      return parseInt(segmentYear) > parseInt(dateRangeYear);
    }
    
    return true;
  }
}

PostDeletor.rolldown = function(i) {
  var waitTime=500;

  if (PostDeletor.shouldRolldown()) {
    var nextSegmentLink = document.querySelector("ul.fbTimelineLogScrubber li.clearfix._3rrn + li a");
    if (nextSegmentLink) {
      nextSegmentLink.click();
      waitTime = 3000 * (Math.log2(PostDeletor.delayFactor) + 1);
      PostDeletor.loopCounter = 0;
      setTimeout(function() { PostDeletor.processPost(i); }, waitTime);
    }
    else {
      PostDeletor.end();
    }
  }
  else {
    setTimeout(function() { PostDeletor.processPost(i); }, waitTime);
  }
}

PostDeletor.isAfterDateRange = function(i) {
  var currentSegment = document.querySelector("ul.fbTimelineLogScrubber li.clearfix._3rrn");

  if (currentSegment) {
    var segmentYear, dateRangeYear;

    var yearKey = currentSegment.getAttribute("data-key");
    if (yearKey) {
      segmentYear = yearKey.substring(5);
    }

    if (PostDeletor.dateRange) {
      if (PostDeletor.dateRange.startsWith("year")) {
        dateRangeYear = PostDeletor.dateRange.substring(5, 9);
      }
      else {
        dateRangeYear = PostDeletor.dateRange.substring(6, 10);
      }
    }

    if (segmentYear && dateRangeYear) {
      return parseInt(segmentYear) < parseInt(dateRangeYear);
    }
    
    return false;
  }
}

PostDeletor.prepareContainTextFunc = function() {
  if (PostDeletor.containText && !PostDeletor.containTextFunc) {
    if (!PostDeletor.containText.match(/\b(and|or)\b/i)) {
      PostDeletor.containTextFunc = "NA";
      return;
    }
    try {
      var containTextExp = math.parse(PostDeletor.containText);
      var exp = PostDeletor.containText;
      exp = exp.replace(/\band\b/g, "&&");
      exp = exp.replace(/\bor\b/g, "||");
      exp = exp.replace(/[\-\w\:\,\.]+(?:\s+[\-\w\:\,\.]+)*/g, "target.search('$&')>=0");
      exp = "return " + exp + ";";
      PostDeletor.containTextFunc = new Function('target', exp);
    } catch(err) {
      PostDeletor.containTextFunc = "NA";
    }
  }
}

PostDeletor.prepareNotContainTextFunc = function() {
  if (PostDeletor.notContainText && !PostDeletor.notContainTextFunc) {
    if (!PostDeletor.notContainText.match(/\b(and|or)\b/i)) {
      PostDeletor.notContainTextFunc = "NA";
      return;
    }
    try {
      var notContainTextExp = math.parse(PostDeletor.notContainText);
      var exp = PostDeletor.notContainText;
      exp = exp.replace(/\band\b/g, "&&");
      exp = exp.replace(/\bor\b/g, "||");
      exp = exp.replace(/[\-\w\:\,\.]+(?:\s+[\-\w\:\,\.]+)*/g, "target.search('$&')>=0");
      exp = "return " + exp + ";";
      PostDeletor.notContainTextFunc = new Function('target', exp);
    } catch(err) {
      PostDeletor.notContainTextFunc = "NA";
    }
  }
}

PostDeletor.acceptText = function(editButton) {
  if (PostDeletor.containText || PostDeletor.notContainText) {
    var rowDescription = $(editButton).closest("tr").text().toLowerCase();
    
    PostDeletor.prepareContainTextFunc();

    if (PostDeletor.containText) {
      if (!jQuery.isFunction(PostDeletor.containTextFunc) && rowDescription.indexOf(PostDeletor.containText.toLowerCase()) == -1) {
        return false;
      }
      if (jQuery.isFunction(Utils.containTextFunc) && !Utils.containTextFunc(rowDescription)) {
        return false;
      }
    }
    
    PostDeletor.prepareNotContainTextFunc();

    if (PostDeletor.notContainText) {
      if (!jQuery.isFunction(PostDeletor.notContainTextFunc) && rowDescription.indexOf(PostDeletor.notContainText.toLowerCase()) >= 0) {
        return false;
      }
      if (jQuery.isFunction(Utils.notContainTextFunc) && Utils.notContainTextFunc(rowDescription)) {
        return false;
      }
    }
  }
  return true;
}

PostDeletor.isEntryChecked = function(editButton) {
  if (!editButton) return false;

  var btn = $(editButton);
  var chkbxs = btn.parents("div > table > tbody > tr").find("input._fpm_chkbx")
  if (chkbxs && chkbxs.length > 0) {
    return chkbxs[0].checked;
  }
  return false;
}

PostDeletor.processPost = function(i) {
  PostDeletor.loopCounter++;

  var privacyMode = false;
  if (PostDeletor.operator.startsWith("prv")) {
    privacyMode = true;
  }

  var editButton = null;

  if (privacyMode) {
    editButton = PostDeletor.findPrivacyButton();
  }
  else {
    editButton = PostDeletor.findEditButton();
  }
  
  if (editButton) {
    PostDeletor.loopCounter = 0;
    $(document).scrollTop($(editButton).offset().top - 150);
    editButton.click();    

    if (!privacyMode) {
      if (editButton.id == PostDeletor.previousEditButtonId) {
        window.scrollBy(0, 100);
        setTimeout(PostDeletor.next, 50 * PostDeletor.delayFactor);
        return;
      }

      PostDeletor.currentEditButtonId = editButton.id;
    }
    else {
      PostDeletor.currentEditButtonId = null;
    }

    if (PostDeletor.prescan && PostDeletor.stage === 1) {
      if (PostDeletor.isEntryChecked(editButton)) {
        if (PostDeletor.operator && PostDeletor.operator.startsWith("prv")) {
          setTimeout(
            function() {
              if (PostDeletor.operator === "prvPublic") {
                PostDeletor.clickPrivacyButton(i, 80);
              }
              else if (PostDeletor.operator === "prvFriends") {
                PostDeletor.clickPrivacyButton(i, 40);
              }
              else if (PostDeletor.operator === "prvOnlyMe") {
                PostDeletor.clickPrivacyButton(i, 10);
              }
            },
            250 * (Math.log2(PostDeletor.delayFactor) + 2)
          );
        }
        else {
          setTimeout(
            function() {
              if (PostDeletor.operator === "delete") {
                PostDeletor.clickDeleteButton(i);
              }
              else if (PostDeletor.operator === "hide") {
                PostDeletor.clickHideButton(i);
              }
              else if (PostDeletor.operator === "unhide") {
                PostDeletor.clickUnhideButton(i);
              }
              else if (PostDeletor.operator === "unlike") {
                PostDeletor.clickUnlikeButton(i);
              }
            },
            100 * (Math.log2(PostDeletor.delayFactor) + 1)
          );
        }
      }
      else {
        window.scrollBy(0, 100);
        setTimeout(PostDeletor.next, 50 * PostDeletor.delayFactor);
      }
    }
    else {
      if (PostDeletor.acceptText(editButton)) {
        if (PostDeletor.operator && PostDeletor.operator.startsWith("prv")) {
          setTimeout(
            function() {
              if (PostDeletor.operator === "prvPublic") {
                PostDeletor.clickPrivacyButton(i, 80);
              }
              else if (PostDeletor.operator === "prvFriends") {
                PostDeletor.clickPrivacyButton(i, 40);
              }
              else if (PostDeletor.operator === "prvOnlyMe") {
                PostDeletor.clickPrivacyButton(i, 10);
              }
            },
            250 * (Math.log2(PostDeletor.delayFactor) + 2)
          );
        }
        else {
          setTimeout(
            function() {
              if (PostDeletor.operator === "delete") {
                PostDeletor.clickDeleteButton(i);
              }
              else if (PostDeletor.operator === "hide") {
                PostDeletor.clickHideButton(i);
              }
              else if (PostDeletor.operator === "unhide") {
                PostDeletor.clickUnhideButton(i);
              }
              else if (PostDeletor.operator === "unlike") {
                PostDeletor.clickUnlikeButton(i);
              }
            },
            100 * (Math.log2(PostDeletor.delayFactor) + 1)
          );
        }
      }
      else {
        window.scrollBy(0, 100);
        setTimeout(PostDeletor.next, 50 * PostDeletor.delayFactor);
      }
    }
  }
  else if (PostDeletor.isAfterDateRange()) {
    PostDeletor.end();
  }
  else if (PostDeletor.loopCounter >= PostDeletor.maxLoop ) {
    PostDeletor.end();
  }
  else if (PostDeletor.loopCounter >= PostDeletor.rolldownThredshold) {
    PostDeletor.rolldown(i);
  }
  else {
    window.scrollBy(0, 100);
    setTimeout(function() { PostDeletor.processPost(i); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.init = function() {
  PostDeletor.index = 0;
  PostDeletor.running = false;
  PostDeletor.currentEditButtonId = null;
  PostDeletor.operator = "delete";
  PostDeletor.prescan = false;
  PostDeletor.prescanned = false;
  PostDeletor.stage = 0;
  PostDeletor.deleteCounter = 0;
  PostDeletor.hideCounter = 0;
  PostDeletor.unhideCounter = 0;
  PostDeletor.unlikeCounter = 0;
  PostDeletor.privacyCounter = 0;
  PostDeletor.total = 8192;
  PostDeletor.loopCounter = 0;
  PostDeletor.maxLoop = 16;
  PostDeletor.rolldownThredshold = 12;
  PostDeletor.dateRange = null;
  PostDeletor.containText = null;
  PostDeletor.containTextFunc = null;
  PostDeletor.notContainText = null;
  PostDeletor.notContainTextFunc = null;
}

PostDeletor.prerollMonth = function(andStart) {
  var divMonthTagSelector = "div.fbTimelineLogBody div.fbTimelineSection > div#" + PostDeletor.dateRange;
  var divMonthTagInvisible = $(divMonthTagSelector).hasClass("async_saving");
  if (divMonthTagInvisible) {
    window.scrollBy(0, 100);
    setTimeout(function() { PostDeletor.prerollMonth(andStart); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
  else if (andStart) {
    setTimeout(function() { PostDeletor.processPost(0); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
}

PostDeletor.preroll = function(andStart) {
  if (PostDeletor.dateRange) {
    if (!andStart && PostDeletor.dateRange.indexOf("month") == 0) {
      return false;
    }

    var yearTag = null;
    if (PostDeletor.dateRange.indexOf("year") == 0) {
      yearTag = PostDeletor.dateRange.substring(0, 9);
    }
    else if (PostDeletor.dateRange.indexOf("month") == 0) {
      yearTag = "year_" + PostDeletor.dateRange.substring(6, 10);
    }

    if (yearTag) {
      var yearLink = document.querySelector("ul.fbTimelineLogScrubber li.clearfix[data-key='" + yearTag + "'] a")
      if (yearLink) {
        yearLink.click();

        if (andStart && PostDeletor.dateRange.indexOf("month") == 0) {
          setTimeout(function() { PostDeletor.prerollMonth(andStart); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
        }
        else if (andStart) {
          setTimeout(function() { PostDeletor.processPost(0); }, 250 * PostDeletor.delayFactor);
        }
        return true;
      }

    }
  }

  window.scroll(0, 0);
  if (andStart) {
    setTimeout(function() { PostDeletor.processPost(0); }, 250 * (Math.log2(PostDeletor.delayFactor) + 1));
  }
  return false;
}

PostDeletor.scanningButtonTexts = [
">>> Scanning  >>>",
">>>> Scanning  >>",
">>>>> Scanning  >",
">>>>>> Scanning  ",
"Scanning  >>>>>>",
"> Scanning  >>>>>",
">> Scanning  >>>>"
];

PostDeletor.scanningButtonTextsIndex = 0;

PostDeletor.getScanningButtonText = function() {
  var text = PostDeletor.scanningButtonTexts[PostDeletor.scanningButtonTextsIndex % PostDeletor.scanningButtonTexts.length];
  PostDeletor.scanningButtonTextsIndex++;
  return text;
}

PostDeletor.animateScanningButtonText = function() {
  if (PostDeletor.prescan && !PostDeletor.prescanned) {
    PostDeletor.getOrCreatePrescanButtons(PostDeletor.getScanningButtonText());
    setTimeout(PostDeletor.animateScanningButtonText, 500);
  }
}


PostDeletor.processPosts = function() {
  if (PostDeletor.running) {
    console.log("Existing process running...");
    return "Existing process running...";
  }

  console.log(PostDeletor.operator + " posts");
  if (PostDeletor.prescan) console.log("Prescan: " + PostDeletor.prescan);
  if (PostDeletor.dateRange) console.log("Date Range: " + PostDeletor.dateRange);
  if (PostDeletor.containText) console.log("Must contains: " + PostDeletor.containText);
  if (PostDeletor.notContainText) console.log("Must NOT contains: " + PostDeletor.notContainText);

  if (PostDeletor.prescan) {
    PostDeletor.getOrCreatePrescanButtons(PostDeletor.getScanningButtonText());
    $("div.uiScrollableArea li.sideNavItem").click(function(){location.reload();});
    setTimeout(PostDeletor.animateScanningButtonText, 500);
  }

  PostDeletor.running = true;
  PostDeletor.preroll(true);

  return "Processing...";
}

PostDeletor.scanningButtonTexts2 = [
">>> Processing >>",
">>>> Processing >",
">>>>> Processing ",
"Processing >>>>>",
" Processing >>>>>",
"> Processing >>>>",
">> Processing >>>"
];

PostDeletor.scanningButtonTextsIndex2 = 0;

PostDeletor.getScanningButtonText2 = function() {
  var text = PostDeletor.scanningButtonTexts2[PostDeletor.scanningButtonTextsIndex2 % PostDeletor.scanningButtonTexts2.length];
  PostDeletor.scanningButtonTextsIndex2++;
  return text;
}

PostDeletor.animateScanningButtonText2 = function() {
  if (PostDeletor.prescan && PostDeletor.prescanned) {
    PostDeletor.getOrCreatePrescanButtons(PostDeletor.getScanningButtonText2());
    setTimeout(PostDeletor.animateScanningButtonText2, 500);
  }
}


PostDeletor.processPostsStageTwo = function() {
  if (!PostDeletor.prescan) {
    console.log("Not in prescan mode...");
    return "Not in prescan mode...";
  }
  if (PostDeletor.stage === 1) {
    console.log("Existing Stage Two process running...");
    return "Existing Stage Two process running...";
  }

  console.log(PostDeletor.operator + " posts");
  if (PostDeletor.prescan) console.log("Prescan: " + PostDeletor.prescan);
  if (PostDeletor.dateRange) console.log("Date Range: " + PostDeletor.dateRange);
  if (PostDeletor.containText) console.log("Must contains: " + PostDeletor.containText);
  if (PostDeletor.notContainText) console.log("Must NOT contains: " + PostDeletor.notContainText);

  if (PostDeletor.prescan) {
    console.log("Stage Two Processing...");
  }

  PostDeletor.getOrCreatePrescanButtons().unbind();
  PostDeletor.getOrCreatePrescanButtons(PostDeletor.getScanningButtonText2());
  setTimeout(PostDeletor.animateScanningButtonText2, 500);

  PostDeletor.loopCounter = 0;
  PostDeletor.index = 0;
  PostDeletor.running = true;
  PostDeletor.stage = 1;
  PostDeletor.preroll(true);

  return "Processing...";
}

PostDeletor.getOrCreatePrescanButtons = function(text) {
  if ($("#prescanButton").length === 0) {
    $("div#blueBarDOMInspector div[role='navigation'] > div:first-of-type > div:last-of-type").after("<div class='_4kny _2s24 _prescanDiv'><div class='_4q39'><a id='prescanButton' href='#' class='_2s25' style='background-color:yellow;color:blue;white-space:pre;width:120px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div></div>");
  }
  var btns = $("#prescanButton");
  if (text && btns && btns.length > 0) {
    btns.text(text);
  }
  return btns;
}

PostDeletor.checkStatus = function() {
  Utils.sendMessage("{running:" + PostDeletor.running + ", operator:" + PostDeletor.operator + ", prescanning:" + PostDeletor.prescan + ", prescanned:" + PostDeletor.prescanned + ", stage:" + PostDeletor.stage + "}");
}

PostDeletor.init();