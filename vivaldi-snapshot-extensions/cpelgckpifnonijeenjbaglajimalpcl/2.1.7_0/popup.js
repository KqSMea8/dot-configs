$(document).ready(function () {

  /* checks if this is the first time on the app */
  chrome.storage.sync.get('welcome', function(w){
    var w = w.welcome;
    if (w !== "yes") {
      $("#welcome-popup").show();
      //open to-do list
      $("#launch").click(function(){
        chrome.tabs.create({'url': chrome.extension.getURL('new-tab.html')});
      });
    } else {
      normal();
    }

  });

function normal(){

  /* Pause Blocking and unpause */
  chrome.storage.sync.get({pause:{active:false, pauseMoment:"", dayOff:"", duration:0}}, function (data) {
    pause = data.pause;

    //if pausing is on, let us know
    if(pause.active === true){
      $("#todo-list-item-popup").attr("placeholder", "Add a to-do to resume site blocking\u2026");
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

      $("#todo-list-item-popup").attr("placeholder", "Add a to-do\u2026");
    }
  }

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

  if(tabs[0].title == "New Tab"){

    chrome.storage.sync.get({blockedUrls:[]}, function(d){
    if(d.blockedUrls.length === 0){
      $("#blocked-message").text("You haven't blocked any sites.");
      $("#show-options").show();
    } else {
      $("#pay-for-prod").show();
    }
    });

  } else {

        // Show to-do list options
        $("#add-to-list").show();

        //open to-do list
        $("#open-new-tab").click(function(){
          chrome.tabs.create({'url': chrome.extension.getURL('new-tab.html')});
        });


        //add items to to-do list
        $('.add-items').submit(function(event){
          event.preventDefault();
          //Get value from input
          var item = $('#todo-list-item-popup').val();
          // Get Date
          var d = new Date();
          // if there is text in input
          if(item){
            // html to str
            var itemstr = item.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
            // Add to list
            appendList(item, d);
            // Clear input for to do list
            $('#todo-list-item-popup').val("");
          }

          resetPause();

        });


      }

  });

  chrome.storage.sync.get({listItems:[]}, function(obj){
      // Get Items
      var c = obj.listItems.length;
      var countText = "";
      var count = c.toString();

      if(c === 0){
          $("#finished-list-popup").show();
      } else if (c === 1){
          $("#taskCount").show();
          $("#count").text(count);
          $("#s").hide();
      } else {
        $("#taskCount").show();
        $("#count").text(count);
        $("#s").show();
      }
  });

  // Update List
  function appendList(content, date){
    chrome.storage.sync.get({listItems:[]}, function(obj){
        var list = obj.listItems;
        var c = list.length;
        if(c === 0){
          list = [];
        }
        var item = {c:content,d:date,h:""};
        list.push(item);

        // Save current to-do list
        chrome.storage.sync.set( {'listItems': list}, function(obj){
          c++;
          updateCount(c);
        });

    });
  }

  // Update Count
  function updateCount(c){

    if (c === 1){
      $("#finished-list-popup").fadeOut(300, function(){
        $("#count").text(c);
        $("#taskCount").fadeIn(300);
      });

    } else {
      $("#count").fadeOut(300, function(){
        $("#count").text(c).fadeIn(300);
      });

      if(c > 1){
        $("#s").fadeIn(300);
      }

    }
  }

  // options
  $('#open-options').click(function() {
      // Reasonable fallback.
      window.open(chrome.runtime.getURL('options.html'));

  });

};

});
