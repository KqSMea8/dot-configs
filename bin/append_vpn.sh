tee -a michael.hoogkamer_conf/*.ovpn << END
setenv PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
script-security 2
up /etc/openvpn/update-resolv-conf.sh
down /etc/openvpn/update-resolv-conf.sh
down-pre
END

#tee -a michael.hoogkamer_conf/*.ovpn << END
#script-security 2
#setenv PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
#up /etc/openvpn/scripts/update-systemd-resolved
#down /etc/openvpn/scripts/update-systemd-resolved
#down-pre
#END

#cd michael.hoogkamer_conf
#find -name "ShadeYouVPN.com " -exec rename 's/ShadeYouVPN.com //' {} ";"
#find -name "ShadeYouVPN.com " -exec rename -v "ShadeYouVPN.com " ""  {} ";"
#cd ..

#tee -a michael.hoogkamer_conf/*.ovpn << END
#script-security 2
#up /etc/openvpn/update-resolv-conf
#down /etc/openvpn/update-resolv-conf
#END
