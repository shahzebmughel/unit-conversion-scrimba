/*
1 Meter = 3.281 feet
1 Liter = 0.264 gallon
1 kilogram = 2.204 pound
 */

const  FEET_CONVERSION =  3.281;
const  LITER_CONVERSION = 0.264;
const  KILOGRAM_CONVERSION = 2.204;

const convertLengthEl = document.getElementById("convert-length");
const convertVolumeEl = document.getElementById("convert-volume");
const convertMassEl = document.getElementById("convert-mass");
const unitTxtEl = document.getElementById("unit-txt");
const convertBtn = document.getElementById("convert-btn");


function convertFromTo(input, unit){

    switch(unit){
        case "feet": return (input * FEET_CONVERSION).toFixed(3);
        case "meters": return (input / FEET_CONVERSION).toFixed(3);

        case "gallons": return (input * LITER_CONVERSION).toFixed(3);
        case "liters": return (input / LITER_CONVERSION).toFixed(3);

        case "pounds": return (input * KILOGRAM_CONVERSION).toFixed(3);
        case "kilograms": return (input / KILOGRAM_CONVERSION).toFixed(3);
    }
}

unitTxtEl.addEventListener("input", function () {
    this.style.width = (this.value.length + 1) + "ch";
});



convertBtn.addEventListener("click", function(){
    const unitTextValue = unitTxtEl.value;
    console.log(unitTextValue)
const metersToFeet = convertFromTo(unitTextValue, "feet")
const FeetToMeters = convertFromTo(unitTextValue, "meters")

const litersToGallons = convertFromTo(unitTextValue, "gallons")
const gallonsToLiters = convertFromTo(unitTextValue, "liters")

const kilogramsToPounds = convertFromTo(unitTextValue, "pounds")
const poundsToKilogram = convertFromTo(unitTextValue, "kilograms")



convertLengthEl.innerHTML = `<h3>Length (Meter/Feet)</h3>
<p>${unitTextValue} meters = ${metersToFeet} feet | ${unitTextValue} feet = ${FeetToMeters} meters</p>`;

convertVolumeEl.innerHTML = `<h3>Volume (Liters/Gallons)</h3>
<p>${unitTextValue} liters = ${litersToGallons} gallons | ${unitTextValue} gallons = ${gallonsToLiters} liters</p>`;

convertMassEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>
<p>${unitTextValue} kilos = ${kilogramsToPounds} pounds | ${unitTextValue} pounds = ${poundsToKilogram} kilos</p>`;

})


