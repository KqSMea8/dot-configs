#!/usr/bin/zsh

cd /home/michael

# rsync stuff to LaCie for backup
rsync -av myVideos/ /run/media/michael/LaCie/myVideos/
rsync -av myPictures/ /run/media/michael/LaCie/myPictures/
rsync -av Yandex.Disk/Camera/ /run/media/michael/LaCie/Yandex.Disk/Camera/
rsync -av Yandex.Disk/Camera\ Uploads/ /run/media/michael/LaCie/Yandex.Disk/Camera\ Uploads/

