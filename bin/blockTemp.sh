#!/bin/bash

iptables -I INPUT -s $1 -j DROP

