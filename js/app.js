document
  .getElementById("Email")
  .setAttribute(
    "pattern",
    "^[a-zA-Z0-9._%+-]+@(?!redberry.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
  ).setAttribute(
    "oninvalid",
    "setCustomValidity('Please enter business email')"
  ).setAttribute("onchange", "try{setCustomValidity('')}catch(e){}')");