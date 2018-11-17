#!/usr/bin/zsh

cd /home/michael

# gpg files sync
rsync -auv shtf.tar.gz.gpg /run/media/michael/gpg/
rsync -auv cabinet.tar.gz.gpg /run/media/michael/gpg/

# SHTF luks disk sync 
rsync -av MEGA/Docs_SHTF/ /run/media/michael/shtf/Docs_SHTF/
rsync -av MEGA/Docs_Cabinet/ /run/media/michael/shtf/Docs_Cabinet/

# Home folder clean up
rm /home/michael/cabinet.tar.gz
rm /home/michael/shtf.tar.gz
rm /home/michael/cabinet.tar.gz.gpg
rm /home/michael/shtf.tar.gz.gpg
