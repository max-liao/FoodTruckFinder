
//import moment from 'moment';
//import 'moment/locale/es-us';
// jQuery(document).ready(function($) {
//   "use strict";

//function to validate form data, ensure no fields are blank
function validateForm() {
  var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  //when the submit is clicked to add a new food truck, validate the form and send the data
  //$("#submittruck").on("click", function(event) {
  $('#submittruck').on("click", function(event) {
    event.preventDefault();
    console.log("submit truck clicked");
    //var formattedDate = $("#truck-date").val().trim();
    //formattedDate = moment(formattedDate).format("YYYY-MM-DD HH:mm:ss");
    if(validateForm()){
    // Here we grab the form elements and remove blank spaces
    var newTruck = {
      foodtruck_name: $("#truck-name2").val().trim(),
      contact: $("#truck-phone").val().trim(),
      descr: $("#truck-description").val().trim(),
      cuisine: $("#truck-cuisine").val().trim(),
      location: $("#truck-location").val().trim(),
      //date: formattedDate
      date: $("#truck-date").val().trim()
    };

    console.log(newTruck);
    // $.post("/api/model", newTruck,
    //   function(data) {
    //     console.log("changed rows: " + data[0].changedRows);
    //     // If a truck is added, send alert.
    //     if (data.length > 0) {
    //       alert("Congratulations, your truck was added!");
    //     }
    //     else {
    //       alert("Sorry, the truck was not added");
    //     }
    //     // Clear the form when submitting
    //    $("#truck-name").val('');
    //    $("#truck-phone").val('');
    //    $("#truck-descirption").val('');
    //    $("#truck-cusine").val('');
    //    $("#truck-location").val('')
    //    $("#truck-date").val('')

    //   });
  }else {
      alert("Please fill out all fields before submitting the new truck!");
      
    }
  });

  //Contact
  // $('form.contactForm').submit(function() {
  //   var f = $(this).find('.form-group'),
  //     ferror = false,
  //     emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

  //   f.children('input').each(function() { // run all inputs

  //     var i = $(this); // current input
  //     var rule = i.attr('data-rule');

  //     if (rule !== undefined) {
  //       var ierror = false; // error flag for current input
  //       var pos = rule.indexOf(':', 0);
  //       if (pos >= 0) {
  //         var exp = rule.substr(pos + 1, rule.length);
  //         rule = rule.substr(0, pos);
  //       } else {
  //         rule = rule.substr(pos + 1, rule.length);
  //       }

  //       switch (rule) {
  //         case 'required':
  //           if (i.val() === '') {
  //             ferror = ierror = true;
  //           }
  //           break;

  //         case 'minlen':
  //           if (i.val().length < parseInt(exp)) {
  //             ferror = ierror = true;
  //           }
  //           break;

  //         case 'email':
  //           if (!emailExp.test(i.val())) {
  //             ferror = ierror = true;
  //           }
  //           break;

  //         case 'checked':
  //           if (! i.is(':checked')) {
  //             ferror = ierror = true;
  //           }
  //           break;

  //         case 'regexp':
  //           exp = new RegExp(exp);
  //           if (!exp.test(i.val())) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //       }
  //       i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //     }
  //   });
  //   f.children('textarea').each(function() { // run all inputs

  //     var i = $(this); // current input
  //     var rule = i.attr('data-rule');

  //     if (rule !== undefined) {
  //       var ierror = false; // error flag for current input
  //       var pos = rule.indexOf(':', 0);
  //       if (pos >= 0) {
  //         var exp = rule.substr(pos + 1, rule.length);
  //         rule = rule.substr(0, pos);
  //       } else {
  //         rule = rule.substr(pos + 1, rule.length);
  //       }

  //       switch (rule) {
  //         case 'required':
  //           if (i.val() === '') {
  //             ferror = ierror = true;
  //           }
  //           break;

  //         case 'minlen':
  //           if (i.val().length < parseInt(exp)) {
  //             ferror = ierror = true;
  //           }
  //           break;
  //       }
  //       i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //     }
  //   });
  //   if (ferror) return false;
  //   else var str = $(this).serialize();
  //   $.ajax({
  //     type: "POST",
  //     url: "contactform/contactform.php",
  //     data: str,
  //     success: function(msg) {
  //       // alert(msg);
  //       if (msg == 'OK') {
  //         $("#sendmessage").addClass("show");
  //         $("#errormessage").removeClass("show");
  //         $('.contactForm').find("input, textarea").val("");
  //       } else {
  //         $("#sendmessage").removeClass("show");
  //         $("#errormessage").addClass("show");
  //         $('#errormessage').html(msg);
  //       }

  //     }
  //   });
  //   return false;
  // });

//});
