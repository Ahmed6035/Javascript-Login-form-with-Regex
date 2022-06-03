function submitForm() {
  if (validateForm()) {
    window.location.reload();
  }
}
function validateForm() {
  console.log("kashif ali check");
  var user1 = document.getElementById("username").value;
  var user2 = document.getElementById("email").value;
  var user3 = document.getElementById("password").value;

  var checkName = /^[a-zA-Z]([0-9a-zA-Z]){2,9}$/;
  var checkMail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  var checkPass =
    /1111|2222|3333|4444|5555|6666|7777|8888|9999|0000|1234|4567|3456|6789|7890/;
  document.getElementById("emailError").innerHTML =
    document.getElementById("passError").innerHTML =
    document.getElementById("userError").innerHTML =
      "";

  if (user1 == "") {
    document.getElementById("userError").innerHTML = "User Name is Required";
    return false;
  } else if (!checkName.test(user1)) {
    document.getElementById("userError").innerHTML = "Enter Valid Name";
    return false;
  }
  if (user2 == "") {
    document.getElementById("emailError").innerHTML = "User Email is Required";
    return false;
  } else if (!checkMail.test(user2)) {
    document.getElementById("emailError").innerHTML = "Enter Valid Email";
    return false;
  }
  if (user3 == "") {
    document.getElementById("passError").innerHTML = "Password is Required";
    return false;
  } else if (checkPass.test(user3) || user3.length < 3) {
    document.getElementById("passError").innerHTML = "Enter Valid Password";
    return false;
  }
  return true;
}
