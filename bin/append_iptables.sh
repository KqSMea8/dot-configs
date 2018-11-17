sed -i -e 's/^/iptables -A OUTPUT -p tcp -m string --string "/' block_news
sed -i -e 's/$/" --algo kmp -j REJECT/' block_news
