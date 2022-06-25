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
//Wednsday Elements
var nineWedsndayBox = document.getElementById("9amWedsndayBox")
var tenWedsndayBox = document.getElementById("10amWedsndayBox")
var elevenWedsndayBox = document.getElementById("11amWedsndayBox")
var twelveWedsndayBox = document.getElementById("12pmWedsndayBox")
var oneWedsndayBox = document.getElementById("1pmWedsndayBox")
var twoWedsndayBox = document.getElementById("2pmWedsndayBox")
var threeWedsndayBox = document.getElementById("3pmWedsndayBox")
var fourWedsndayBox = document.getElementById("4pmWedsndayBox")
var fiveWedsndayBox = document.getElementById("5pmWedsndayBox")
//Thursday Elements
var nineThursdayBox = document.getElementById("9amThursdayBox")
var tenThursdayBox = document.getElementById("10amThursdayBox")
var elevenThursdayBox = document.getElementById("11amThursdayBox")
var twelveThursdayBox = document.getElementById("12pmThursdayBox")
var oneThursdayBox = document.getElementById("1pmThursdayBox")
var twoThursdayBox = document.getElementById("2pmThursdayBox")
var threeThursdayBox = document.getElementById("3pmThursdayBox")
var fourThursdayBox = document.getElementById("4pmThursdayBox")
var fiveThursdayBox = document.getElementById("5pmThursdayBox")
//Friay Elements
var nineFridayBox = document.getElementById("9amFridayBox")
var tenFridayBox = document.getElementById("10amFridayBox")
var elevenFridayBox = document.getElementById("11amFridayBox")
var twelveFridayBox = document.getElementById("12pmFridayBox")
var oneFridayBox = document.getElementById("1pmFridayBox")
var twoFridayBox = document.getElementById("2pmFridayBox")
var threeFridayBox = document.getElementById("3pmFridayBox")
var fourFridayBox = document.getElementById("4pmFridayBox")
var fiveFridayBox = document.getElementById("5pmFridayBox")

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
//Something else here
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
//Setting variable that will hold Wedsnday Storage
var wedsndayNineAmStorage = localStorage.getItem("9amWedsndayStorage")
var wedsndayTenAmStorage  = localStorage.getItem("10amWedsndayStorage") 
var wedsndayElevenAmStoreage  = localStorage.getItem("11amWedsndayStorage") 
var wedsndayTwelvePmStorage  = localStorage.getItem("12pmWedsndayStorage") 
var wedsndayOnePmStorage  = localStorage.getItem("1pmWedsndayStorage") 
var wedsndayTwoPmStorage  = localStorage.getItem("2pmWedsndayStorage") 
var wedsndayThreePmStorage  = localStorage.getItem("3pmWedsndayStorage") 
var wedsndayFourPmStorage  = localStorage.getItem("4pmWedsndayStorage") 
var wedsndayFivePmStorage  = localStorage.getItem("5pmWedsndayStorage")
//Setting variables that will hold Thursday Storage
var thursdayNineAmStorage = localStorage.getItem("9amThursdayStorage")
var thursdayTenAmStorage  = localStorage.getItem("10amThursdayStorage") 
var thursdayElevenAmStoreage  = localStorage.getItem("11amThursdayStorage") 
var thursdayTwelvePmStorage  = localStorage.getItem("12pmThursdayStorage") 
var thursdayOnePmStorage  = localStorage.getItem("1pmThursdayStorage") 
var thursdayTwoPmStorage  = localStorage.getItem("2pmThursdayStorage") 
var thursdayThreePmStorage  = localStorage.getItem("3pmThursdayStorage") 
var thursdayFourPmStorage  = localStorage.getItem("4pmThursdayStorage") 
var thursdayFivePmStorage  = localStorage.getItem("5pmThursdayStorage")
//Setting variables that will hold Friday Storage
var fridayNineAmStorage = localStorage.getItem("9amFridayStorage")
var fridayTenAmStorage  = localStorage.getItem("10amFridayStorage") 
var fridayElevenAmStoreage  = localStorage.getItem("11amFridayStorage") 
var fridayTwelvePmStorage  = localStorage.getItem("12pmFridayStorage") 
var fridayOnePmStorage  = localStorage.getItem("1pmFridayStorage") 
var fridayTwoPmStorage  = localStorage.getItem("2pmFridayStorage") 
var fridayThreePmStorage  = localStorage.getItem("3pmFridayStorage") 
var fridayFourPmStorage  = localStorage.getItem("4pmFridayStorage") 
var fridayFivePmStorage  = localStorage.getItem("5pmFridayStorage")

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

nineWedsndayBox.textContent = wedsndayNineAmStorage
tenWedsndayBox.textContent = wedsndayTenAmStorage
elevenWedsndayBox.textContent = wedsndayElevenAmStoreage
twelveWedsndayBox.textContent = wedsndayTwelvePmStorage
oneWedsndayBox.textContent = wedsndayOnePmStorage
twoWedsndayBox.textContent = wedsndayTwoPmStorage
threeWedsndayBox.textContent = wedsndayThreePmStorage
fourWedsndayBox.textContent = wedsndayFourPmStorage
fiveWedsndayBox.textContent = wedsndayFivePmStorage

nineThursdayBox.textContent = thursdayNineAmStorage
tenThursdayBox.textContent = thursdayTenAmStorage
elevenThursdayBox.textContent = thursdayElevenAmStoreage
twelveThursdayBox.textContent = thursdayTwelvePmStorage
oneThursdayBox.textContent = thursdayOnePmStorage
twoThursdayBox.textContent = thursdayTwoPmStorage
threeThursdayBox.textContent = thursdayThreePmStorage
fourThursdayBox.textContent = thursdayFourPmStorage
fiveThursdayBox.textContent = thursdayFivePmStorage

nineFridayBox.textContent = fridayNineAmStorage
tenFridayBox.textContent = fridayTenAmStorage
elevenFridayBox.textContent = fridayElevenAmStoreage
twelveFridayBox.textContent = fridayTwelvePmStorage
oneFridayBox.textContent = fridayOnePmStorage
twoFridayBox.textContent = fridayTwoPmStorage
threeFridayBox.textContent = fridayThreePmStorage
fourFridayBox.textContent = fridayFourPmStorage
fiveFridayBox.textContent = fridayFivePmStorage

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

    localStorage.setItem("9amWedsndayStorage", nineWedsndayBox.value)
    localStorage.setItem("10amWedsndayStorage", tenWedsndayBox.value)
    localStorage.setItem("11amWedsndayStorage", elevenWedsndayBox.value)
    localStorage.setItem("12pmWedsndayStorage", twelveWedsndayBox.value)
    localStorage.setItem("1pmWedsndayStorage", oneWedsndayBox.value)
    localStorage.setItem("2pmWedsndayStorage", twoWedsndayBox.value)
    localStorage.setItem("3pmWedsndayStorage", threeWedsndayBox.value)
    localStorage.setItem("4pmWedsndayStorage", fourWedsndayBox.value)
    localStorage.setItem("5pmWedsndayStorage", fiveWedsndayBox.value)

    localStorage.setItem("9amThursdayStorage", nineThursdayBox.value)
    localStorage.setItem("10amThursdayStorage", tenThursdayBox.value)
    localStorage.setItem("11amThursdayStorage", elevenThursdayBox.value)
    localStorage.setItem("12pmThursdayStorage", twelveThursdayBox.value)
    localStorage.setItem("1pmThursdayStorage", oneThursdayBox.value)
    localStorage.setItem("2pmThursdayStorage", twoThursdayBox.value)
    localStorage.setItem("3pmThursdayStorage", threeThursdayBox.value)
    localStorage.setItem("4pmThursdayStorage", fourThursdayBox.value)
    localStorage.setItem("5pmThursdayStorage", fiveThursdayBox.value)

    localStorage.setItem("9amFridayStorage", nineFridayBox.value)
    localStorage.setItem("10amFridayStorage", tenFridayBox.value)
    localStorage.setItem("11amFridayStorage", elevenFridayBox.value)
    localStorage.setItem("12pmFridayStorage", twelveFridayBox.value)
    localStorage.setItem("1pmFridayStorage", oneFridayBox.value)
    localStorage.setItem("2pmFridayStorage", twoFridayBox.value)
    localStorage.setItem("3pmFridayStorage", threeFridayBox.value)
    localStorage.setItem("4pmFridayStorage", fourFridayBox.value)
    localStorage.setItem("5pmFridayStorage", fiveFridayBox.value)
}




//reset Events
function resetEvents () {
    //depending on the day, wipe this out
    localStorage.clear()
    window.location.reload();
}