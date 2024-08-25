
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export const validateUsernameLength = (length = 8) => {

  return (username) => {
    return username.length >= length;
  }
}

export const validateUsernameCharacters = (username) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(username);
}

export const validatePasswordLength = (length) => {

  return (password) => {
    return password.length >= length;
  }
}