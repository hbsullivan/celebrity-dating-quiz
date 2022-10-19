function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("spongebob").setAttribute("class", "hidden");
  document.getElementById("bugs").setAttribute("class", "hidden");
  document.getElementById("noMatch").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const pets = parseInt(document.querySelector("input#numOfPets").value);
    const oneToNine = parseInt(document.querySelector("input#numOneToNine").value);

    if (pets && oneToNine) {
      if (pets>=4 && oneToNine>=5) {
        document.getElementById("bugs").removeAttribute("class");
      } else if (pets<4 && oneToNine<5){
        document.getElementById("spongebob").removeAttribute("class");
      } else {
        document.getElementById("noMatch").removeAttribute("class");
      } 

    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  }
}