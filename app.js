let myInputs = []
const inputEl = document.getElementById("input-el")
const metImp = document.getElementById("met-to-imp")
const impMet = document.getElementById("imp-to-met")
const reset = document.getElementById("reset")
const long = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


function setElementsToNone(){
    long.innerHTML = ""
    volume.innerHTML = ""
    mass.innerHTML = ""
}
function alertUser(){
    if (isNaN(inputEl.value)){
        alert("Please enter a number, use a dot(.) for decimal numbers")
        setElementsToNone()
    }
}


metImp.addEventListener("click", function(){
   
    let valueLength = inputEl.value * 3.2808399
    let valueVolume = inputEl.value * 0.264172052
    let valueMass = inputEl.value * 2.20462262
    long.innerHTML = `${inputEl.value} meters = ${valueLength} feet`
    volume.innerHTML = `${inputEl.value} liters = ${valueVolume} gallons`
    mass.innerHTML = `${inputEl.value} kilograms = ${valueMass} pounds`
    alertUser()
})


impMet.addEventListener("click", function (){
    let valueLength = inputEl.value * 0.32808399
    let valueVolume = inputEl.value * 3.785412
    let valueMass = inputEl.value * 0.45359237
    long.innerHTML = `${inputEl.value} feet = ${valueLength} meters`
    volume.innerHTML = `${inputEl.value} gallons = ${valueVolume} liters`
    mass.innerHTML = `${inputEl.value} pounds = ${valueMass} kilograms`
    alertUser()   
})

reset.addEventListener("click", function (){
      setElementsToNone()
})


