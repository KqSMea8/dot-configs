// call this function when notification count has been retrieved
var updateNotificationCount = function(count) {

  if(count > 0) {
    $(".notifications").removeClass("notifications-inactive");
    $(".notifications").addClass("notifications-active");
    $(".notification-count").html(count).removeClass('hidden');
  }
  else {
    $(".notifications").addClass("notifications-inactive");
    $(".notifications").removeClass("notifications-active");
    $(".notification-count").html(count).addClass('hidden');
  }

};

var updateAdReplacementCount = function(count){
	$("#ext-txt-replaced").html(count)
  $("#stats-container").css("display","")
  $("#stats-active").removeClass('hidden');
};
