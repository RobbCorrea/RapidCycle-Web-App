//inputData is the info from the Form and minLength is the minimum length of data necessary for approval
function minLengthValidation(inputData, minLength) {
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  if (value.length >= minLength) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

//Validates if the input data is a valid e-mail address.
function emailValidation(inputData) {
  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;

  removeClassErrorSuccess(inputData);

  const resultValidation = emailValid.test(value);

  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSuccess(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}

export { minLengthValidation, emailValidation, removeClassErrorSuccess };
