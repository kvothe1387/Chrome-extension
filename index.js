
let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value
  myLeads.push(inputValue)
  console.log(myLeads)
})

