var currentTime = function() {
    document.getElementById("currentTimeElement").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(currentTime, 1000);




var submitButton = document.getElementById('saveBtn')
submitButton.addEventListener('click', getInputFromUser)

function updateInput () {
    
}
//store value to each input
//deny the page to be refreshed

function getInputFromUser (){
    const inputFromUser = document.getElementById('events1')
}

