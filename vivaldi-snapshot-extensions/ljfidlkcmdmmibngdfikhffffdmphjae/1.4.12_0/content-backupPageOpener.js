var BackupPageOpener = function() {
  this.loopCounter = 0;
}

BackupPageOpener.openSettingsPage = function() {
  location.assign("https://www.facebook.com/settings");
}

BackupPageOpener.clickBackupLink = function() {
  BackupPageOpener.loopCounter++;
  var backupLink = document.querySelector("div#contentCol>div#contentArea>div#SettingsPage_Content>ul+div>a");
  if (backupLink) {
    BackupPageOpener.loopCounter = 0;
    $(backupLink)[0].click();
    return true;
  }
  else if (BackupPageOpener.loopCounter > 8) {
    return false;
  }
  else {
    setTimeout(BackupPageOpener.openSettingsPage, 100);
    setTimeout(BackupPageOpener.clickBackupLink, 1900);
    return false;
  }
}

$(function() {
  BackupPageOpener();
});