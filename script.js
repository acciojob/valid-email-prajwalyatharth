function validEmail(str) {
  // Regular expression for email validation
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str); // Use 'str' instead of 'email'
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
