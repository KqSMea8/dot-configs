$(document).ready(function () {

  /* Check Internet Connection */
  var online = navigator.onLine;
  if (online === false){
    $("#errorbox").show();
  }

  /* fhid */
  // Create two variable with the names of the months and days in an array
  var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Create a newDate() object
  var newDate = new Date();
  // Extract the current date from Date object
  newDate.setDate(newDate.getDate());
  // Output the day, date, month and year
  $('#date').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

 $('#day').html(dayNames[newDate.getDay()]);

  setInterval( function() {
  	// Create a newDate() object and extract the seconds of the current time on the visitor's
  	var seconds = new Date().getSeconds();
  	// Add a leading zero to seconds value
  	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
  	},1000);

  setInterval( function() {
  	// Create a newDate() object and extract the minutes of the current time on the visitor's
  	var minutes = new Date().getMinutes();
  	// Add a leading zero to the minutes value
  	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
      },1000);

  setInterval( function() {
  	// Create a newDate() object and extract the hours of the current time on the visitor's
  	var hours = new Date().getHours();
  	// Add a leading zero to the hours value
  	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
      }, 1000);

/* display blocked url if there is one */
chrome.storage.sync.get('blockedurl', function(obj){

var blockedURLtext = obj.blockedurl;
if (blockedURLtext !== "" && blockedURLtext !== undefined) {

  // Create img element containing eyes
  var eyes = $("<img>");
  var eyeNum = Math.floor(Math.random() * 7) + 1;
  var eyeSrc = "images/eyes/" + eyeNum + ".jpg";
  eyes.attr('src', eyeSrc);

  // Sanitize blockedURLText todo


  //Formats url to 'example.com'
  $('.eyes').append(eyes);
  $('.blockedurl').append(blockedURLtext);
  $('.hide-blocked').addClass("show-eyes");
}

  /* On click remove blocked url note */
    $(".hide-blocked").click(function(){
        $(this).addClass("fade-out-eyes");
        setTimeout(function() {
          $(".hide-blocked").hide();
      }, 800);
    });

});

$("#empty-list").click(function(){
  $(this).addClass("prod-poof").delay(300).queue(function(next){
      $(this).hide();
      next();
    });
});


/* Pause Blocking and unpause */
chrome.storage.sync.get({pause:{active:false, pauseMoment:"", dayOff:"", duration:0}}, function (data) {
  pause = data.pause;
  //if pausing is on, let us know
  if(pause.active === true){
    $("#todo-list-item").attr("placeholder", "Add a to-do to resume site blocking\u2026");
  }


  });

// Reset pause
function resetPause(){
  if(pause.active === true){
    var pauseObj = {active:false, pauseMoment:0, dayOff:"", duration:0};
    chrome.storage.sync.set({pause: pauseObj});
    chrome.storage.sync.get({pause:{active:false, pauseMoment:"", dayOff:"", duration:0}}, function (data) {
      pause = data.pause;
    });

    $("#todo-list-item").attr("placeholder", "Add a to-do\u2026");
    $("#blocking-resumed").fadeIn(700).delay(1300).queue(function(next){
        $(this).fadeOut(700);
        next();
      });
  }
}

/* Code for the To Do list */
//load items
chrome.storage.sync.get('listItems', function(obj){
      // Get Items
      var items = obj.listItems;

      // Check if there are items
      if (items !== undefined) {
        $(items).each(function(i){
            //Sanitize HTML and add to list
            var itemHTML = "<li class='todo-item " + this.h + "' data-d='" + this.d + "'><span class='to-do-inner'>" + this.c + "</span><span class='handle noclick'></span><span class='make-header noclick'></span></li>";
            var sanitizeItem = DOMPurify.sanitize(itemHTML, { SAFE_FOR_JQUERY: true });
            $('#list-items').append(sanitizeItem);
        });
      }

      /* Display Empty List Text */
      if ($('#list-items').is(':empty')){
          $('#empty-list').show();
          $('#finished-list').show();
      };

  });

  //add items to to-do list
  $('.add-items').submit(function(event){
    event.preventDefault();

    //Get value from input
    var item = $('#todo-list-item').val();
    // Get Date
    var d = new Date();
    // if there is text in input
    if(item){

      // html to str
      var itemstr = item.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      // Add to list
      var itemHTML = "<li class='todo-item' class='' data-d='" + d + "'><span class='to-do-inner'>" + itemstr + "</span><span class='handle noclick'></span><span class='make-header noclick'></span></li>";
      var sanitizeItem = DOMPurify.sanitize(itemHTML, { SAFE_FOR_JQUERY: true });
      $('#list-items').append(sanitizeItem);

        updateList();

      //Hide empty-list messages
      if ($('#list-items').not(':empty')){
        $('#finished-list').hide();
        $('#empty-list').addClass("prod-poof").delay(300).queue(function(next){
            $(this).hide();
            next();
          });
        hidebg();
      };

      // Clear input for to do list
      $('#todo-list-item').val("");
      resetPause();
  }

  });


  // Remove Items
  $(document).on('click', '.todo-item', function(e){
    if($(e.target).hasClass("noclick")){
      return
    } else {
      // Random Color for puff of smoke
      var m = Math.floor(Math.random() * 10) + 1;
      var n = "p" + m.toString();
      $(this).addClass("poof " + n).delay(300).queue(function(next){
          $(this).remove();
          updateList();
          resetPause();
          // Finished list Text
          if ($('#list-items').is(':empty')){
            var listfallback = '';
            chrome.storage.sync.set({'listItems': listfallback}, function(){
            });
            showbg();
            $('#finished-list').fadeIn(5000);
          };

          next();

        });

    //play audio
    //var audio = new Audio('ding.mp3');
    //audio.play();
  }
});

// Sort items
$(function() {
  $( "#list-items" ).sortable({
      handle: '.handle',
      placeholder: "li-placeholder",
      update: function( event, ui ){
          updateList();
        },
      connectWith: "#list-items",
      start: function(e, ui){
          ui.placeholder.height(ui.item.height());
      }
    });
    $("#list-items").disableSelection();
  });

// Header List items
$(document).on('click', '.make-header', function(){
  $(this).parent().toggleClass('h');
  updateList();
});


// Update List
function updateList(){
  var list = [];
  $('#list-items li').each(function(){
    // c = content
    var content = $(this).text();
    // h = header
    var header = "";
    if($(this).hasClass('h')){
      header="h";
    }
    // d = date
    var date = $(this).attr('data-d');

    var item = {c:content,d:date,h:header};

    list.push(item);
  });
  // Save current to-do list
  chrome.storage.sync.set( {'listItems': list}, function(){
  });
}







/* Rss Feed */
/* Check if prod has been deleted already today */

chrome.storage.sync.get('prodDate', function(d){
  var proddate = d.prodDate;

// get today's date
var date = new Date;
var d = date.toISOString().split('T')[0];


if(proddate !== d){
//url for JSON - CHANGE BEFORE DEPLOY OF APP
var produrl = "https://prodtodolist.com/json/" + d;

$.getJSON(produrl, {
    format: "json"
  }).done(function(data){
      if(data.title !== undefined){


        var itemHTML = "<div class='prod'><h4 class='prod-title " + data.style + " center-text'><span>" + data.title + "</span></h4><div class='prod-content'>" + data.content + "</div><div class='prod-sources'>" + data.sources + "</div></div>";
        var sanitizeItem = DOMPurify.sanitize(itemHTML, { SAFE_FOR_JQUERY: true });
        $(".prod-container").hide().append(sanitizeItem).fadeIn(300);

        /* Hide Prod */
        $(".prod-title").click(function(){
          $(".prod-container").addClass("prod-poof").delay(300).queue(function(next){
              $(this).hide();
              next();
            });
          /* Save Prod Date so it won't show today when deleted */
            chrome.storage.sync.set( {'prodDate': d}, function(){
          });

        });
      } else {
        return
      }

    });
} else {
  return
}

});

/* Reset Blocked URL Note */
var blockedurl = "";
  chrome.storage.sync.set( {'blockedurl': blockedurl}, function(){
});

// Options link
$(".go-to-options").click(function(){
  chrome.tabs.update({'url': chrome.extension.getURL('options.html')});
});


  /* checks if this is the first time on the app */
  chrome.storage.sync.get('welcome', function(w){
   var welcome = w.welcome;
   // Make sure this is set to yes before launch
  if (welcome !== "yes") {
    $('.hide-welcome').show();
    $('#empty-list').hide();
    $('#finished-list').hide();

    var welcomeitems = [{d:"",h:"h",c:"This is your to-do list"},{d:"",h:"",c:"You can add a to-do by typing in the input above"},{d:"",h:"",c:"When you've completed a to-do, give it a click"},{d:"",h:"",c:"Click the H button"},{d:"",h:"",c:"Use the arrow button to drag and drop items"},{d:"",h:"",c:"The options button is hidden at the bottom of the page"}];

    $(welcomeitems).each(function(i){
        var itemHTML = "<li class='todo-item " + this.h + "' data-d='" + this.d + "'><span class='to-do-inner'>" + this.c + "</span><span class='handle noclick'></span><span class='make-header noclick'></span></li>";
        var sanitizeItem = DOMPurify.sanitize(itemHTML, { SAFE_FOR_JQUERY: true });
        $('#list-items').append(sanitizeItem);
    });

    $("#continue").click(function(){
      $(".hide-welcome").addClass("prod-poof").delay(300).queue(function(next){
          $(this).hide();
          next();
        });
    });
    // Make sure this is set to yes before launch
  chrome.storage.sync.set( {'welcome': "yes"}, function(){
  });

} else {
  return
}
  });


// Load bg Image
if (online === true){
var imageURL = "url(https://source.unsplash.com/collection/2721999/daily)";
} else {
  var imageURL = "url(images/m.jpg)"
}
$('#bgimage').css('background-image',imageURL);

// Show bg Image
function showbg(){
  $('#prod').fadeOut(300);
  $('#bgimage').addClass("showbg");
}

function hidebg(){
  $('#prod').fadeIn(300);
  $('#bgimage').removeClass("showbg");
}

// End of Document Load


});
