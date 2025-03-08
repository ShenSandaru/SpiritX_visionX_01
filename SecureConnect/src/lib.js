// Sign Up Validations
const validEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// console.log(validEmail("n@gmail.com"))

//Ensure Username is at least 8 characters long and unique
const validUsernameLength = (username) => {
  return username.length >= 8;
}
