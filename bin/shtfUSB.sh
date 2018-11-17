#!/usr/bin/zsh

cd /home/michael

# tar
#su - michael -c "tar czf shtf.tar.gz MEGA/Docs_SHTF/"
#su - michael -c "tar czf cabinet.tar.gz MEGA/Docs_Cabinet/"
tar czf shtf.tar.gz MEGA/Docs_SHTF/
tar czf cabinet.tar.gz MEGA/Docs_Cabinet/

# encrypt
#su - michael -c "gpg -e -r michael shtf.tar.gz"
#su - michael -c "gpg -e -r michael cabinet.tar.gz"
gpg -e -r michael shtf.tar.gz
gpg -e -r michael cabinet.tar.gz
