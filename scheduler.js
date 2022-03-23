var currentTime = function() {
    document.getElementById("currentTimeElement").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(currentTime, 1000);




const submitButton = document.getElementById('saveBtn')
submitButton.addEventListener('click', getInputFromUser)
//Need to figure out function to save it to a var
//console that var to see if it worked
//Afterwards create a global variable that can be saved
function getInputFromUser (){
    const inputFromUser = document.getElementById('events1')
    inputFromUser.innerHTML = inputFromUser
    console.log(inputFromUser)
    console.log(events)
}
