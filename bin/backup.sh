#!/usr/bin/zsh

# Backup to 320GB drive
rsync -av /home/michael/eBooks/ /mnt/320GB/eBooks/
rsync -av /home/michael/MEGA/ /mnt/320GB/MEGA/
rsync -av /home/michael/myVideos/ /mnt/320GB/myVideos/
rsync -av /home/michael/myPictures/ /mnt/320GB/myPictures/
rsync -av /home/michael/Yandex.Disk/ /mnt/320GB/Yandex.Disk/
