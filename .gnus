(setq user-mail-address "michael.hoogkamer@gmail.com"
      user-full-name "Michael Hoogkamer")

(setq gnus-select-method
      '(nnimap "gmail"
	       (nnimap-address "imap.googlemail.com")  ; it could also be imap.googlemail.com if that's your server.
	       (nnimap-server-port "imaps")
	       (nnimap-stream ssl)))

(setq smtpmail-smtp-server "smtp.gmail.com"
      smtpmail-smtp-service 587
      gnus-ignored-newsgroups "^to\\.\\|^[0-9. ]+\\( \\|$\\)\\|^[\"]\"[#'()]")
