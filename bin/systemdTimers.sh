#!/bin/zsh

#all my services
rsync -auv --exclude='dbus*' --exclude='display-manager*' --exclude='systemd-rfkill*' /etc/systemd/system/*service /home/michael/MEGA/code/systemdTimers

#all my timers
rsync -auv /etc/systemd/system/*timer /home/michael/MEGA/code/systemdTimers
