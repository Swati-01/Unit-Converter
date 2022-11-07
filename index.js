/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl= document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl =document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let inputValue = 0
convertBtn.addEventListener("click", function(){
    inputValue = parseInt(inputEl.value)
    lengthEl.textContent = lengthConvert()
    volumeEl.textContent = volumeConvert()
    massEl.textContent = massConvert()
    
})
function lengthConvert(){
    // const feet = inputValue*3.281
    const length =` ${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | 
    ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters`
    return length
}
function volumeConvert(){
    const volume =` ${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | 
    ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters`
    return volume
}
function massConvert(){
    const mass =` ${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | 
    ${inputValue} pounds = ${(inputValue/2.204).toFixed(3)} kilos`
    return mass
}