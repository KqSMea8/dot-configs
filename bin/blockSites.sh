#!/bin/bash

# timewasting facebook
iptables -A OUTPUT -p tcp -m string --string "facebook.com" --algo kmp -j REJECT

# instagram
# whatsapp

# high envy site linkedin
iptables -A OUTPUT -p tcp -m string --string "linkedin.com" --algo kmp -j REJECT

# just plain old NO
iptables -A OUTPUT -p tcp -m string --string "nordea.fi" --algo kmp -j REJECT


# timewasting telegraaf
#iptables -A OUTPUT -p tcp -m string --string "telegraaf.nl" --algo kmp -j REJECT
