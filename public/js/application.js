
$(document).ready(function () {
  $('#target').submit(function(event) { // Intecepts form submission
    event.preventDefault(); // Prevents default form-submission
    console.log(this);
    // var input_from_form = $(this)serialize();
    $.ajax({ // AJAX post
      type: 'Post',
      url: '/rolls',
      // data: ,
      // data: input_from_form,
      success: function(data) {
        $('#die').html(data); // replaces the contents of #die
      }
    })
  })

  // function diceRoll(){
  //   console.log(Roll.new)
  // }

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});

// How do we pass data to the server when making an AJAX call?
// When the server responds, what code gets run? How do we access
// the data that the server sends back?
