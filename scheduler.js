let mondayNewValue = document.getElementById("newMondayBox")
let tuesdayNewValue = document.getElementById("newTuesdayBox")
let wednsdayNewValue = document.getElementById("newWednsdayBox")
let thursdayNewValue = document.getElementById("newThursdayBox")
let fridayNewValue = document.getElementById("newFridayBox")

//Event Listeners for all the times/days
//This is over kill and I bit off more than I can chew
let nineMondayBox = document.getElementById("9amMondayBox")
let tenMondayBox = document.getElementById("10amMondayBox")
let elevenMondayBox = document.getElementById("11amMondayBox")
let twelveMondayBox = document.getElementById("12pmMondayBox")
let oneMondayBox = document.getElementById("1pmMondayBox")
let twoMondayBox = document.getElementById("2pmMondayBox")
let threeMondayBox = document.getElementById("3pmMondayBox")
let fourMondayBox = document.getElementById("4pmMondayBox")
let fiveMondayBox = document.getElementById("5pmMondayBox")

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

function addEvents(){
    
}



//reset Events
function resetEvents () {
    //depending on the day, wipe this out
    localStorage.clear()
}