// Menu Animation
$(".menu-button").click(function(){

  if($(this).parent().next(".display-options").hasClass("show-options")){

  $(this).parent().next(".display-options").animate({height: 0}, 700, "swing");


  } else {


    var el = $(this).parent().next(".display-options");
        var curHeight = el.height();
        var autoHeight = el.css('height', 'auto').height();
        el.height(curHeight).animate({height: autoHeight}, 700, "swing");

        $('.display-options').not(el).each(function(){
          $(this).animate({height: 0}, 700, "swing");
          $(this).removeClass("show-options");
        });

        $(".menu-button").not(this).removeClass("pause-button-big retro-shadow").addClass("small-lines");

  }


  $(this).parent().next(".display-options").toggleClass("show-options");
  $(this).toggleClass("pause-button-big retro-shadow small-lines");

  });

// Menu small reminder to share or review

chrome.storage.sync.get('remind', function(share){
  var share = share.remind;
  if (share !== "two"){
    $('.reminder').show();
  }
  $("#payforprod").click(function(){
    $('.reminder').fadeOut();
    chrome.storage.sync.set( {'remind': "two"}, function(){
    });
  });
});

// Pause and save paused Options
$(".pause").click(function(){
  var pauseLength = $(this).attr("data-l");
  var dayOff = $(this).attr("data-d"); // Make sure this is a MOMENT.JS DateTime
  var pauseObj = {active:true, pauseMoment:moment().unix(), dayOff:dayOff, duration:pauseLength}

  chrome.storage.sync.set({
    pause: pauseObj,

  }, function(){
    // Do something to give users feedback, that pause mode is on.
      $("#pause-active-hide").fadeOut(400).delay(300).queue(function(next){

          if(pauseObj.dayOff === "true"){
            var message = "until 4am tomorrow";
          } else {
            var message = "for " + pauseObj.duration + " minutes";
          }

          $("#blocked-duration").text(message);
          $("#pause-active-show").fadeIn(1000);
          next();
        });



  });

});



//Site blocking options
function blockedSitesMessage(){

  var count;

  chrome.storage.sync.get({blockedUrls:[]}, function(items){
    count = items.blockedUrls.length;

    if (count == 0){

        $('#nosites').fadeIn(300);
        $('#nothing-blocked').show();
        $('#pause-active-hide').hide();

      } else {

        $('#nosites').hide(300);
        $('#nothing-blocked').hide();
        $('#pause-active-hide').show();
      }



});

}

blockedSitesMessage();

// Block an exact url or not
var advanced = false;
$("#advanced-toggle").click(function(){
  advanced = ! advanced;

  // Sanitize website instructions — this should be in the html already
  var specificInstructions = "Enter a specific url:</br>e.g. <small class='caps reg'>news.example.com</small> or <small class='caps reg'>www.example.com/quizzes</small>";
  var sanitizeSpecific = DOMPurify.sanitize(specificInstructions, { SAFE_FOR_JQUERY: true });
  // Sanitize website instuctions — this should be in the html already
  var wholeWebsiteInstructions = "You only need to enter the middle of the url:</br>e.g. <small class='caps reg'>example</small> will block both <small class='caps reg'>www.example.com</small> and <small class='caps reg'>example.org</small>";
  var sanitizeWholeWebsite = DOMPurify.sanitize(wholeWebsiteInstructions, { SAFE_FOR_JQUERY: true });

  if(advanced){

    $("#com").fadeOut(400);
    $("#toggler").addClass("slide");
    $(".toggle-1").addClass("light-grey");
    $(".toggle-2").removeClass("light-grey");
    $("#customurl").attr("placeholder", "e.g. news.google.com");

    $(".options-fade").addClass("hide-options").delay(300).queue(function(next){
      //— this should be in the html already
      $("#specific-instructions").html(sanitizeSpecific);
      $(".options-fade").removeClass("hide-options");
        next();
      });

  } else {

    $("#com").fadeIn(400);
    $("#toggler").removeClass("slide");
    $(".toggle-1").removeClass("light-grey");
    $(".toggle-2").addClass("light-grey");
    $("#customurl").attr("placeholder", "e.g. facebook");

    $(".options-fade").addClass("hide-options").delay(300).queue(function(next){
      // — this should be in the html already
      $("#specific-instructions").html(sanitizeWholeWebsite);
      $(".options-fade").removeClass("hide-options");
        next();
      });


  }

});


// Add url to blocked list
$('.add-url').click(function(event){
  event.preventDefault();

  var urlpre = $('#customurl').val();

  // If 'specific url blocking' is selected
  if(advanced){

    //remove query string
    var removeQuery = urlpre.split("?")[0];

    if (removeQuery.match(/^([a-zA-Z0-9\/.?%:;*#& _-]+)$/) && removeQuery.indexOf(".") > -1){

      // Removes http or https if it has it
      var removeProtocol = removeQuery.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, "");

      // Changes to lower case
      var url = removeProtocol.toLowerCase();

      //  Sanitize and add blocked url to list
      var blockedUrlElement = "<li>"  + url + "</li>";
      var sanitizeUrlElement = DOMPurify.sanitize(blockedUrlElement, { SAFE_FOR_JQUERY: true });
      $('#blockedUrlList').prepend(sanitizeUrlElement);

      // clear input
      $('#customurl').val("");
      save_options();

    }else{

      //Highlight error message - this should be a seperate function
      $("#specific-instructions").addClass("highlight-error").delay(2000).queue(function(next){
        $(this).removeClass("highlight-error");
        next();
      });
      // Clear input
      $('#customurl').val("");
    }

    // Else - (if 'block whole website' is selected)
  }else{

      if (urlpre.match(/^([a-zA-Z0-9 _-]+)$/)){

        var url = urlpre.toLowerCase();
        //  Sanitize and add blocked url to list
        var blockedUrlElement = "<li>"  + url + "</li>";
        var sanitizeUrlElement = DOMPurify.sanitize(blockedUrlElement, { SAFE_FOR_JQUERY: true });
        $('#blockedUrlList').prepend(sanitizeUrlElement);
        // Clear input
        $('#customurl').val("");
        save_options();

      } else {

        //Highlight error message - this should be a seperate function
        $("#specific-instructions").addClass("highlight-error").delay(2000).queue(function(next){
          $(this).removeClass("highlight-error");
          next();
        });
        // Clear input
        $('#customurl').val("");

      }

}

blockedSitesMessage();

var el = $(this).closest(".display-options");
    var curHeight = el.height();
    var autoHeight = el.css('height', 'auto').height();
    el.height(curHeight).animate({height: autoHeight}, 300, "swing");

});

// Remove URL from List
$(document).on('click', '#blockedUrlList li', function(){
  $(this).remove();
  save_options();
  blockedSitesMessage();

  });


// Saves options to chrome.storage
    function save_options() {

      var blockedUrls = [];

      $("#blockedUrlList li").each(function(){

              blockedUrls.push($(this).text());

            });

      //check if prod feed is on
      //var prodfeed = document.getElementById('prodon').checked;

      chrome.storage.sync.set({
        blockedUrls: blockedUrls,

      }, function(){
        // Update status to let user know options were saved.
        $("#status").addClass("showstatus");
        setTimeout(function () {
              $("#status").removeClass('showstatus');
          }, 2000);
    });

  }




function restore_options() {

      chrome.storage.sync.get({
        blockedUrls:["example"]
      }, function(items){

        var urls = items.blockedUrls;

        var listhtml = "";

        for (var i = 0; i < urls.length; i++ ) { listhtml += "<li class='list-group-item'>"  + urls[i] + "</li>";}
        var sanitizeListhtml = DOMPurify.sanitize(listhtml, { SAFE_FOR_JQUERY: true });
        document.getElementById("blockedUrlList").innerHTML = sanitizeListhtml;


      });

    }




/* Stops Space Bar Usage */
    $(function() {
    $('#customurl').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
});

/* back to to-do list */
//open to-do list
$(".back-to-list").click(function(){
  chrome.tabs.update({'url': chrome.extension.getURL('new-tab.html')});
});

// Get current paused state
chrome.storage.sync.get({pause:{active:false, pauseMoment:"", dayOff:"", duration:0}}, function (data) {
    if(data.pause.active === true){
      $("#pause-active-show").show();
      $("#pause-active-hide").hide();
    }
  });

document.addEventListener('DOMContentLoaded', restore_options);
