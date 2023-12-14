let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count++
    countEl.textContent = count
    console.log("Button clicked, count is " + count)
}

function decrement(){
    count--
    countEl.textContent = count
    console.log("Button clicked, count is " + count)
}
let saveEl = document.getElementById("save-el")
function save() {
    console.log("Total count " + count)
    saveEl.textContent += " " + count + " - "
    count = 0
    countEl.textContent = 0
}