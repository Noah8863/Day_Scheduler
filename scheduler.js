let test = document.getElementById("Monday")
let test1 = document.getElementById("Tuesday")
let test2 = document.getElementById("Wednsday")
let test3 = document.getElementById("Thursday")
let test4 = document.getElementById("Friday")



//This is the time element
var currentTime = function() {
    document.getElementById("currentTimeElement").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(currentTime, 1000);

//This is the submission button
var submitButton = document.getElementById('saveBtn')
submitButton.addEventListener('click', getInputFromUser)


//This needs to be worked on
function setTime(){
    if (currentTime === moment().format("MMMM Do YYYY, 9:01:30 0")){
        test.setAttribute('class', 'present')
    }
}

function getInputFromUser(){
    mondayNewValue = test.value
    if (test && mondayNewValue) {
        beep = localStorage.setItem('testing', mondayNewValue)
        console.log(mondayNewValue)
    } else {
        console.log('nothing here for monday')
    }
    tuesdayNewValue = test1.value
    if (test1 && tuesdayNewValue) {
        console.log(tuesdayNewValue)
    } else {
        console.log('nothing here for tuesday')
    }
    wednsdayNewValue = test2.value
    if (test2 && wednsdayNewValue) {
        console.log(wednsdayNewValue)
    } else {
        console.log('nothing here for wedsnday')
    }
    thursdayNewValue = test3.value
    if (test3 && thursdayNewValue) {
        console.log(thursdayNewValue)
    } else {
        console.log('nothing here for thursday')
    }
    fridayNewValue = test4.value
    if (test4 && fridayNewValue) {
        console.log(fridayNewValue)
    } else {
        console.log ('nothing here for friday')
    }
    
}

function newValues (){
    test.setAttribute('value', 'beep')
}


window.onload = function newValues() {
    var reloading = localStorage.getItem('beep');
    if (reloading) {
        sessionStorage.removeItem("testing");
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}









//figure out how to link time with functions for this to work
function timeRest () {
    localStorage.clear()
}

