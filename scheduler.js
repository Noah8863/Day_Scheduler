//Monday Elements
var nineMondayBox = document.getElementById("9amMondayBox")
var tenMondayBox = document.getElementById("10amMondayBox")
var elevenMondayBox = document.getElementById("11amMondayBox")
var twelveMondayBox = document.getElementById("12pmMondayBox")
var oneMondayBox = document.getElementById("1pmMondayBox")
var twoMondayBox = document.getElementById("2pmMondayBox")
var threeMondayBox = document.getElementById("3pmMondayBox")
var fourMondayBox = document.getElementById("4pmMondayBox")
var fiveMondayBox = document.getElementById("5pmMondayBox")
//Tuesday Elements
var nineTuesdayBox = document.getElementById("9amTuesdayBox")
var tenTuesdayBox = document.getElementById("10amTuesdayBox")
var elevenTuesdayBox = document.getElementById("11amTuesdayBox")
var twelveTuesdayBox = document.getElementById("12pmTuesdayBox")
var oneTuesdayBox = document.getElementById("1pmTuesdayBox")
var twoTuesdayBox = document.getElementById("2pmTuesdayBox")
var threeTuesdayBox = document.getElementById("3pmTuesdayBox")
var fourTuesdayBox = document.getElementById("4pmTuesdayBox")
var fiveTuesdayBox = document.getElementById("5pmTuesdayBox")


let time = document.getElementById("currentTimeElement")

//Submission and Reset Buttons Go Here
var resetBtnElement = document.getElementById('resetBtn')
var submitButton = document.getElementById('saveBtn')

//Event Listeners for those Buttons
submitButton.addEventListener('click', addEvents)
resetBtnElement.addEventListener('click', resetEvents)

//This is the time element
var currentTime = function() {
    time.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    
} 

setInterval(currentTime, 1000);

function updatingEvent(){
    var grabbingHourforMonday = (time.textContent.split(',')[1].split(':')[0].trim())
    if (grabbingHourforMonday === moment().format("9")){
        mondayNewValue.setAttribute('class', 'present')
    }
}

//Setting variable that will hold Mondays Storage

var mondayNineAmStorage = localStorage.getItem("9amMondayStorage")
var mondayTenAmStorage  = localStorage.getItem("10amMondayStorage") 
var mondayElevenAmStoreage  = localStorage.getItem("11amMondayStorage") 
var mondayTwelvePmStorage  = localStorage.getItem("12pmMondayStorage") 
var mondayOnePmStorage  = localStorage.getItem("1pmMondayStorage") 
var mondayTwoPmStorage  = localStorage.getItem("2pmMondayStorage") 
var mondayThreePmStorage  = localStorage.getItem("3pmMondayStorage") 
var mondayFourPmStorage  = localStorage.getItem("4pmMondayStorage") 
var mondayFivePmStorage  = localStorage.getItem("5pmMondayStorage") 

//Setting variable that will hold Tuesday Storage
var tuesdayNineAmStorage = localStorage.getItem("9amTuesdayStorage")
var tuesdayTenAmStorage  = localStorage.getItem("10amTuesdayStorage") 
var tuesdayElevenAmStoreage  = localStorage.getItem("11amTuesdayStorage") 
var tuesdayTwelvePmStorage  = localStorage.getItem("12pmTuesdayStorage") 
var tuesdayOnePmStorage  = localStorage.getItem("1pmTuesdayStorage") 
var tuesdayTwoPmStorage  = localStorage.getItem("2pmTuesdayStorage") 
var tuesdayThreePmStorage  = localStorage.getItem("3pmTuesdayStorage") 
var tuesdayFourPmStorage  = localStorage.getItem("4pmTuesdayStorage") 
var tuesdayFivePmStorage  = localStorage.getItem("5pmTuesdayStorage")

// Setting input variables text contents to new variables

nineMondayBox.textContent = mondayNineAmStorage
tenMondayBox.textContent = mondayTenAmStorage
elevenMondayBox.textContent = mondayElevenAmStoreage
twelveMondayBox.textContent = mondayTwelvePmStorage
oneMondayBox.textContent = mondayOnePmStorage
twoMondayBox.textContent = mondayTwoPmStorage
threeMondayBox.textContent = mondayThreePmStorage
fourMondayBox.textContent = mondayFourPmStorage
fiveMondayBox.textContent = mondayFivePmStorage

nineTuesdayBox.textContent = tuesdayNineAmStorage
tenTuesdayBox.textContent = tuesdayTenAmStorage
elevenTuesdayBox.textContent = tuesdayElevenAmStoreage
twelveTuesdayBox.textContent = tuesdayTwelvePmStorage
oneTuesdayBox.textContent = tuesdayOnePmStorage
twoTuesdayBox.textContent = tuesdayTwoPmStorage
threeTuesdayBox.textContent = tuesdayThreePmStorage
fourTuesdayBox.textContent = tuesdayFourPmStorage
fiveTuesdayBox.textContent = tuesdayFivePmStorage

function addEvents(){
    localStorage.setItem("9amMondayStorage", nineMondayBox.value)
    localStorage.setItem("10amMondayStorage", tenMondayBox.value)
    localStorage.setItem("11amMondayStorage", elevenMondayBox.value)
    localStorage.setItem("12pmMondayStorage", twelveMondayBox.value)
    localStorage.setItem("1pmMondayStorage", oneMondayBox.value)
    localStorage.setItem("2pmMondayStorage", twoMondayBox.value)
    localStorage.setItem("3pmMondayStorage", threeMondayBox.value)
    localStorage.setItem("4pmMondayStorage", fourMondayBox.value)
    localStorage.setItem("5pmMondayStorage", fiveMondayBox.value)

    localStorage.setItem("9amTuesdayStorage", nineTuesdayBox.value)
    localStorage.setItem("10amTuesdayStorage", tenTuesdayBox.value)
    localStorage.setItem("11amTuesdayStorage", elevenTuesdayBox.value)
    localStorage.setItem("12pmTuesdayStorage", twelveTuesdayBox.value)
    localStorage.setItem("1pmTuesdayStorage", oneTuesdayBox.value)
    localStorage.setItem("2pmTuesdayStorage", twoTuesdayBox.value)
    localStorage.setItem("3pmTuesdayStorage", threeTuesdayBox.value)
    localStorage.setItem("4pmTuesdayStorage", fourTuesdayBox.value)
    localStorage.setItem("5pmTuesdayStorage", fiveTuesdayBox.value)
}




//reset Events
function resetEvents () {
    //depending on the day, wipe this out
    localStorage.clear()
    window.location.reload();
}