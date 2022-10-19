function hideResults() {
  document.getElementById("spongebob").setAttribute("class", "hidden");
  document.getElementById("bugs").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const pets = parseInt(document.querySelector("input#numOfPets").value);
    const oneToNine = parseInt(document.querySelector("input#numOneToNine").value);
  }
}