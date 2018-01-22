// File attaches click handlers. 


// front end -> our api -> third party api -> our api -> front end
// Click a button, call one our python endpoints.
// our python endpoints calls a 3rd party api 
// third party api does something and send back data
// our api does something with the data and sends it back to front end
// front end 


// BoilerPlate. Waits until html is loaded before executing the script.
$(document).ready(function() {
  
  // $("h4) selects h4 tag 
  // $(".test") selects html tag with class of test
  // $("#login") selects html tag with id of login
  

  // simple click function. Calls an alert function. No backend calls.
  $("h3").click(function() {
    alert('clicked');
  })

  
  // calls our test endpoint. Our test endpoint calls google.com. 
  $(".test").click(function(){
    $.get( "/test", function( data ) {
      // log out the data that is returned
      console.log(data);
      // set the html to the data is returned
      $('.result').html(data)
    });
  });

  // calls our example endpoint
  $("#login").click(function() {
    // get email and password value from the form
    var email = $("#email").val();
    var password = $("#password").val();

    $.post("/example", { 'email1': email, 'password1':password }, function(data) {
      $('.example-placeholder').html(data);
    })
  });

// closing }) of boilerplate
});