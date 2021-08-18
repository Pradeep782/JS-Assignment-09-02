// use strict is used to execute the code in the strict mode.
"use strict";

// when the document is ready the below function will be executed.
$(document).ready(function () {
  var isDate = function (text) {
    if (!/^[01]?\d\/[0-3]\d\/\d{4}$/.test(text)) return false;

    var index1 = text.indexOf("/");

    var index2 = text.indexOf("/", index1 + 1);

    var month = parseInt(text.substring(0, index1));

    var day = parseInt(text.substring(index1 + 1, index2));

    if (month < 1 || month > 12) {
      return false;
    }
    //if( day > 31 ) { return false; }
    else {
      switch (month) {
        case 2:
          if (day > 28) {
            return false;
          }
          // doesn't handle leap year
          break;

        case 4:
        case 6:
        case 9:
        case 11:
          if (day > 30) {
            return false;
          }
          break;

        default:
          if (day > 31) {
            return false;
          }
          break;
      }
    }
    return true;
  };

  // adding the click event listener on the button whose id is save.
  $("#save").click(function () {
    // It clears any previous error messages.

    $("span").text("");

    // initialising the isvalid flag with the true.
    var isValid = true;

    // assigning the values of email, phone, zip, and dob to the respective variables.
    var email = $("#email").val();

    var phone = $("#phone").val();

    var zip = $("#zip").val();

    var dob = $("#dob").val();

    if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
      // using the regular expression to validate the email.

      isValid = false;
      $("#email").next().text("Please enter a valid email.");
    }

    if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      // using the regular expression to validate the phone number.

      isValid = false;
      $("#phone")
        .next()
        .text("Please enter a phone number in NNN-NNN-NNNN format.");
    }

    if (zip === "" || !zip.match(/^\d{5}(-\d{4})?$/)) {
      //  using the regular expression to validate the zip code.

      isValid = false;
      $("#zip").next().text("Please enter a valid zip code.");
    }

    if (dob === "" || !isDate(dob)) {
      // validating the date of birth.
      isValid = false;
      $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
    }

    if (isValid) {
      // if the user entered data is valid then it will be moved to the sessionstorage.
      sessionStorage.email = email;

      sessionStorage.phone = phone;

      sessionStorage.zip = zip;

      sessionStorage.dob = dob;

      // It will go to the profile.html
      location.href = "profile.html";
    }

    // focus method is used to focus on the label with the id.
    $("#email").focus();
  });

  // focus method is used to focus on the label with the id.
  $("#email").focus();
});
