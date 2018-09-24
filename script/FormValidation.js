window.onload = function() {
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  $("#submitButton").click(function() {
    var email = "";
    var telephone = "";
    var password = "";

    var errorMessage = "";
    var feildMissing = "";

    if ($("#email").val() === "") {
      feildMissing += "Email is missing \n";
    }
    if ($("#telephone").val() == "") {
      feildMissing += "Telephone is missing \n";
    }
    if ($("#password").val() == "") {
      feildMissing += "Password is missing \n";
    } else {
      if ($("#passwordConfirm").val() == "") {
        feildMissing += "Please renter your password \n";
      }
    }

    if (!isEmail($("#email").val())) {
      errorMessage += "Your email id is not valid \n";
      email = "";
    } else {
      email = $("#email").val();
    }
    if (!$.isNumeric($("#telephone").val()) || $("#telephone").val().length != 10) {
      errorMessage += "Your Telephone no. is not valid \n";
      telephone = "";
      console.log($("#telephone").val().length);
    } else {
      telephone = $("#telephone").val();
    }
    if ($("#password").val() != $("#passwordConfirm").val()) {
      errorMessage += "Your password doesn't match \n";
      password = "";
    } else {
      password = $("#password").val();
    }
    if (feildMissing != "") {
      alert(feildMissing);
    } else if (errorMessage != "") {
        alert(errorMessage);
      }
    else {
      console.log('valid');
    }
  });
};
