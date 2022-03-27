var nineMondayBox = document.getElementById("9amMondayBox")
var tenMondayBox = document.getElementById("10amMondayBox")
var elevenMondayBox = document.getElementById("11amMondayBox")
var twelveMondayBox = document.getElementById("12pmMondayBox")
var oneMondayBox = document.getElementById("1pmMondayBox")
var twoMondayBox = document.getElementById("2pmMondayBox")
var threeMondayBox = document.getElementById("3pmMondayBox")
var fourMondayBox = document.getElementById("4pmMondayBox")
var fiveMondayBox = document.getElementById("5pmMondayBox")
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
}




//reset Events
function resetEvents () {
    //depending on the day, wipe this out
    localStorage.clear()
    window.location.reload();
}