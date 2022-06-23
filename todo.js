let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
   newItem(ourField.value)
});

function newItem(item) {
  let ourHTML = `<li>${item} <button onclick="deleteItem(this)">Delete</button> </li>`
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  ourField.value = ""
  ourField.focus()
}

function deleteItem(element) {
  element.parentElement.remove()
}
