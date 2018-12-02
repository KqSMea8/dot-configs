#!/usr/bin/zsh

cd /home/michael

# rsync stuff to Samsung for backup
rsync -av eBooks/ /run/media/michael/Samsung/eBooks/
rsync -av MEGA/ /run/media/michael/Samsung/MEGA/
rsync -av myVideos/ /run/media/michael/Samsung/myVideos/
rsync -av myPictures/ /run/media/michael/Samsung/myPictures/
rsync -av Yandex.Disk/ /run/media/michael/Samsung/Yandex.Disk/

