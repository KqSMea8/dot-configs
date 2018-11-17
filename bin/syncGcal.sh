#!/bin/bash

cd /home/michael/MEGA/
rm /home/michael/MEGA/basic.ics
wget https://www.google.com/calendar/ical/michael.hoogkamer%40gmail.com/private-f5e3e44e38461e7a648206841514aaa1/basic.ics
ical2orgpy /home/michael/MEGA/basic.ics /home/michael/MEGA/gcal.org
