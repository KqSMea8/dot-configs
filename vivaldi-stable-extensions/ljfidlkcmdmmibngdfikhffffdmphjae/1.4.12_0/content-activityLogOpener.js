var ActivityLogOpener = function() {
  this.loopCounter = 0;
}

ActivityLogOpener.open = function() {
  var selfLink = $("div#blueBarDOMInspector a[data-gt*='timeline']");
  if (selfLink) {
    var activityLink = selfLink.attr("href") + "/allactivity?privacy_source=activity_log_top_menu";
    window.location.href = activityLink;
  }
}

ActivityLogOpener.click = function() {
  ActivityLogOpener.loopCounter++;
  var activityLogLink = document.querySelector("div.uiScrollableAreaContent li.__MenuItem a._54nc[data-gt*='menu_activity_log']");
  if (activityLogLink) {
    ActivityLogOpener.loopCounter = 0;
    activityLogLink.click();
    return true;
  }
  else if (ActivityLogOpener.loopCounter > 8) {
    return false;
  }
  else {
    setTimeout(ActivityLogOpener.click, 500);
    return false;
  }
}

$(function() {
  ActivityLogOpener();
});