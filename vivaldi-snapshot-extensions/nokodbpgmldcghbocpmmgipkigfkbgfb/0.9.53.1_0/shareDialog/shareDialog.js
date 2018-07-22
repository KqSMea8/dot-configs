var intentlyShareDialog = {
    emailDialogDisplayed: false, 
    dialogID: 'intentlyShareDialog',
    /*
    intention: {},
    cdnRoot: '',
    appURL: '',
    friends: [],
    apiBase: '',
    closeiconurl: '',
    defaultFriendIconURL: '',
    closehovericonurl: '',
    searchiconurl: '',
    */
    init: function() {
        var self = this;
        self.showDialog(self.intention);
        self.resize();
    },
    showDialog: function(intention) {
        var self = this;
        var img = new Image();
        img.onload = function() {
            $('#intentlyShareImage').append(img);
            self.resize();
        };
        img.src = self.intention.imgURL;
        self.processFriends();

        $('#intentlyShareSearch').on("keyup",function() {
            var str = $("#intentlyShareSearch").val();
            self.emails = self.extractEmails(str);
            if(self.emails !== null) {
                if(!self.emailDialogDisplayed) {
                    self.transitionEmail();
                    self.emailDialogDisplayed = true;
                }
            }
            else {
                if(self.emailDialogDisplayed) {
                    self.transitionFriends();
                    self.emailDialogDisplayed = false;
                }
                self.populateFriends(str);
            }
        }).css({
            background: "url('" + self.searchiconurl + "') no-repeat scroll 7px 7px",
            "padding-left": "30px",
        });

        $("#intentlyShareClose").css({
            "background-image": 'url("' + self.closeiconurl + '")',
            "background-repeat": "no-repeat",
            "cursor": "pointer"
        }).mouseover(function() {
            $(this).css({"background-image":'url("' + self.closehovericonurl + '")'});
        }).mouseout(function() {
            $(this).css({"background-image":'url("' + self.closeiconurl + '")'});
        }).click(function() {
            self.closeDialog();
        });

        $("#intentlyShareInvite:hover").css({"background-color":"#41943f"});
        $("#intentlyShareInvite").click(function() {
            self.selectEmails();
        });
        $('#intentlyShareFacebookTrigger').click(function() {
            var tmprequest = {
                messageType: 'useraction',
                action:"facebooksharebuttonclicked",
                facebookShareButtonClickData: { 
                    channelResourceID: self.intention.id
                }
            };
            self.triggerEvent('receive-intently', tmprequest);
        });
    },
    populateFriends: function(substr) {
        var self = this;
        var el = $("#intentlyShareFriendsList");
        var substrLower = substr.toLowerCase();
        el.html("");
        self.friends.filter(function(friend) {
            var name = friend.fullName.toLowerCase() + friend.username.toLowerCase();
            if(name.indexOf(substrLower)!= -1) {
                self.appendFriend(friend,el);
                return true;
            }
            return false;
        });
        self.resize();
    },
    appendFriend: function(friend, el) {
        var self = this;
        var html = "<div class='intentlyFriend' id='user-" + friend.username + "'><div id='" + friend.username + "' class='intentlyFriendIcon'></div><div class='intentlyUserName'>" + friend.fullName + "</div><div class='intentlyUserTitle'>@" + friend.username + "</div></div>";
        el.append(html);
        var friendPanel = $('#' + friend.username);
        var friendIcon = 'intentlyAvatar.png';
        if(friend.cdnFileName !== ''){
            friendIcon = friend.cdnFileName;
        }
        friendPanel.css({
            "background-image":"url('" + self.cdnRoot + 'avatar/' + friendIcon + "')"
        });
        if(el.attr("id") == "intentlyShareFriendsList") {
            $("#user-" + friend.username).click(function(){
                self.selectFriend(friend);
            });
        }
    },
    processFriends: function() {
        var self = this;
        $.each(self.friends, function(id, friend) {
            self.appendFriend(friend, $("#intentlyShareFriendsList"));
        });
    },
    transitionEmail: function() {
        $("#intentlyShareSearch").addClass("intentlyShareSearchEmail").removeClass("intentlyShareSearchEmailHidden");
        $("#intentlyShareInvite").removeClass("hidden");
        $("#intentlyShareInvite").removeClass("intentlyShareInviteHidden").addClass("intentlyShareInviteShown").html("Invite");
        $("#intentlyShareFriendsList").addClass("hidden");
    },
    transitionFriends: function() {
        $("#intentlyShareSearch").removeClass("intentlyShareSearchEmail").addClass("intentlyShareSearchEmailHidden");
        $("#intentlyShareInvite").addClass("hidden");
        $("#intentlyShareInvite").addClass("intentlyShareInviteHidden").removeClass("intentlyShareInviteShown").html("");
        $("#intentlyShareFriendsList").removeClass("hidden");
    },
    selectFriend: function(friend) {
        var self = this;
        var el = $("#intentlySharedCard");
        var message = "";

        $("#intentlyShareSearchBar").addClass("hidden");
        $("#intentlyShareFriendsList").remove();
        $("#intentlyShareFacebookTrigger").remove();
        self.appendFriend(friend, el);
        el.append(
            "<div id='intentlyCustomMessage'><textarea cols='35' rows='5' id='intentlyShareCustomMessage' style='width: 100%;'></textarea></div>" +
            "<div class='intentlyShareButton'>Send</div>"
        );

        $("#intentlyShareCustomMessage").on("keyup", function() {
            var count = $("#intentlyShareCustomMessage").val().split("").length;
            if(count > 255) {
                $("#intentlyShareCustomMessage").addClass("intentlyOverage");
            }
            else {
                $("#intentlyShareCustomMessage").removeClass("intentlyOverage");
            }
        });

        var data = "";
        $(".intentlyShareButton").click(function() {
            var tmprequest = {
                messageType: 'useraction',
                action: "sharechannelresource",
                friendid: friend.id,
                imageid: self.intention.id,
                data: { 
                    customMessage: $('#intentlyShareCustomMessage').val() 
                }
            };
            self.triggerEvent('receive-intently', tmprequest);
        });
    },
    triggerEvent: function(eventName, curdata) {
        var self = this;
        var options = { detail: curdata };
        var event;
        if(window.CustomEvent) {
            event = new CustomEvent(eventName, options);
        } 
        else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, options);
        }
        document.dispatchEvent(event);
    },
    selectEmails: function() {
        var self = this;
        var el = $("#intentlySharedCard");
        var message = "";

        $("#intentlyShareSearchBar").remove();
        $("#intentlyShareFriendsList").remove();
        $("#intentlyShareFacebookTrigger").remove();
        el.append(
            "<div id='intentlyCustomMessage'><textarea cols='35' rows='5' id='intentlyShareCustomMessage' style='width: 100%;'></textarea></div>" +
            "<div class='intentlyShareInvite'>Send Invitation</div>"
        );

        $("#intentlyShareCustomMessage").on("keyup",function(){
            var count = $("#intentlyShareCustomMessage").val().split("").length;
            if(count > 255) {
                $("#intentlyShareCustomMessage").addClass("intentlyOverage");
            }
            else {
                $("#intentlyShareCustomMessage").removeClass("intentlyOverage");
            }
        });

        var data = {},
        emailList = self.emails.join(",");

        $(".intentlyShareInvite").click(function() {
            var tmprequest = {
                messageType: 'useraction',
                action: "emailinvite",
                data: { 
                    customMessage: $('#intentlyShareCustomMessage').val(), 
                    emailAddresses: emailList,
                    channelResourceID: self.intention.id
                }
            };
            self.triggerEvent('receive-intently', tmprequest);
        });
    },
    extractEmails: function(str) {
        return str.match(/([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    },
    closeDialog: function() {
        var self = this;
        var tmprequest = {
            messageType: 'closesharedialog'
		};		
		self.triggerEvent('receive-intently', tmprequest);
    },
    resize: function() {
        var self = this;
        setTimeout(function() {
	       self.triggerEvent('receive-intently', { messageType: 'resize' });
        }, 10);
    }
};

//$(document).ready(function() { intentlyShareDialog.init(); });
