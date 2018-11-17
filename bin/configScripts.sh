#!/usr/bin/zsh

##LOCAL
#dot-emacs
rsync -auv /home/michael/.emacs /home/michael/MEGA/code/dot-emacs/

#dot-configs
rsync -auv /home/michael/.authinfo.gpg /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.gnus /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.bashrc /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.signature /home/michael/MEGA/code/dot-configs/
rsync -auv --exclude '*~' /home/michael/.vim/ /home/michael/MEGA/code/dot-configs/.vim/
rsync -auv /home/michael/.vimrc /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.zshrc /home/michael/MEGA/code/dot-configs/
rsync -auv --exclude '*~' /home/michael/.config/i3/ /home/michael/MEGA/code/dot-configs/i3/
rsync -auv --exclude '*~' /home/michael/.config/terminator/ /home/michael/MEGA/code/dot-configs/terminator/
rsync -auv /home/michael/.xprofile /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.xinitrc /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.xkeyboard /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.Xdefaults /home/michael/MEGA/code/dot-configs/
rsync -auv /home/michael/.config/redshift.conf /home/michael/MEGA/code/dot-configs/
#rsync -auv --exclude '*~' /home/michael/.config/ /home/michael/MEGA/code/dot-configs/.config/

#bin
rsync -auv --exclude '*~' /home/michael/MEGA/bin/ /home/michael/MEGA/code/dot-configs/bin/

#mutt
rsync -auv --exclude cache/ /home/michael/.mutt/ /home/michael/MEGA/code/dot-configs/.mutt/

#tmux
rsync -auv --exclude cache/ /home/michael/.tmux/ /home/michael/MEGA/code/dot-configs/.tmux/

#autostart
rsync -auv --exclude '*~' /home/michael/.config/autostart/ /home/michael/MEGA/code/dot-configs/autostart/

#terminator
rsync -auv --exclude '*~' /home/michael/.config/terminator/ /home/michael/MEGA/code/dot-configs/terminator/

#vivaldi extensions
rsync -auv --exclude '*~' /home/michael/.config/vivaldi-snapshot/Default/Extensions/ /home/michael/MEGA/code/dot-configs/vivaldi-snapshot-extensions/
rsync -auv --exclude '*~' /home/michael/.config/vivaldi-snapshot/Default/Extensions/ /home/michael/MEGA/code/dot-configs/vivaldi-stable-extensions/

#gnome-shell extensions
rsync -auv --exclude '*~' --exclude '*.png' /home/michael/.local/share/gnome-shell/extensions /home/michael/MEGA/code/dot-configs/gnome-shell-extensions/

#scripts
rsync -auv --exclude '*~' --exclude '*#' --exclude '*.#' /home/michael/MEGA/bin/ /home/michael/MEGA/code/scripts/


##SYSTEM
#etc/default
rsync -auv --exclude '*~' /etc/default/ /home/michael/MEGA/code/dot-configs/etc/default

#etc/
rsync -auv /etc/fstab /home/michael/MEGA/code/dot-configs/etc/
rsync -auv /etc/mkinitcpio.conf /home/michael/MEGA/code/dot-configs/etc/
rsync -auv /etc/locale.conf /home/michael/MEGA/code/dot-configs/etc/
rsync -auv /etc/vconsole.conf /home/michael/MEGA/code/dot-configs/etc/

#etc/X11
rsync -auv --exclude '*~' /etc/X11/xorg.conf.d/ /home/michael/MEGA/code/dot-configs/etc/X11/xorg.conf.d

#etc/tmpfiles.d
rsync -auv /etc/tmpfiles.d/tty-no-cursor-blink.conf /home/michael/MEGA/code/dot-configs/etc/

#etc/UPower
rsync -auv --exclude '*~' /etc/UPower/ /home/michael/MEGA/code/dot-configs/etc/UPower

#etc/snapper
#rsync -auv --exclude '*~' /etc/snapper/ /home/michael/MEGA/code/dot-configs/etc/snapper
