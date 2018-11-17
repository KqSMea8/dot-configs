#!/bin/bash

iptables -A INPUT -j DROP
iptables -A FORWARD -o wlp2s0 -j DROP
iptables -A OUTPUT -o wlp2s0 -j DROP
