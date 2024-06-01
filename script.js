function checkEmail() {
  var email = document.getElementById('emailInput').value;
  // Check if email is entered
  if (email !== '') {
    alert('Thank you for providing your email! You will now receive notifications.');
    // Here, you can perform additional actions like sending the email to the server.
  } else {
    alert('Please enter a valid email!');
  }
}

function serviceBeauty(){
  var beauty = document.getElementById('beautyInput').value;
  if (beauty != ''){
    alert('Your Service is Booked!');
  } else{
    alert('Select the Service first')
  }
}



