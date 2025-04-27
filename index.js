
let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.vaule)
  console.log(myLeads)

  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
  }
})

