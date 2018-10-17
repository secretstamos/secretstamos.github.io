$(document).ready(function(){
    $("#resume").toggle();
    $(".corner_button").click(function(){
        $("#contact").slideUp();
    });
    $("#toggleResume").click(function() {
        $("#resume").toggle();
    });
});


/*
* Will prevent users from entering in incorrect emails (don't want spam..)
*/
var email = document.getElementById('email');

//Adds the event listener
email.addEventListener("input", emailSyntax);

function emailSyntax(){
  if(email.contains !== '@'){
      facilitator.setCustomValidity("Please enter a proper email address.");
      event.preventDefault();   
  }
  else{
      facilitator.setCustomValidity("");
      return true;
  }
}
