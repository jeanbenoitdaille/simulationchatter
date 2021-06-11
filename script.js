// Participant 1
var btnsend1 = document.getElementById('btn-send1')
var login1 = document.querySelector('#login1')
var message1 = document.querySelector('#message1')

// Participant 2
var btnsend2 = document.getElementById('btn-send2')
var login2 = document.querySelector('#login2')
var message2 = document.querySelector('#message2')

// Zone d'affichage
var displayText = document.getElementById('display-text')
var currentMessage = document.getElementsByClassName('message')

// Boutons d'actions
var btnreset = document.getElementById('reset')
var stop = document.getElementById('stop')

btnsend1.addEventListener('click', debounce(function(e) {
  displayMessage1(e)
}, 2000))

btnsend2.addEventListener('click', debounce(function(e) {
  displayMessage2(e)
}, 2000))

function displayMessage1(e) {
  displayText.innerHTML += '<p class="message">'+login1.value+' dit '+message1.value+'</p>'
}

function displayMessage2(e) {
  displayText.innerHTML += '<p class="message">'+login2.value+' dit '+message2.value+'</p>'
}

btnreset.addEventListener('click', reset)

function reset() {
  displayText.innerHTML = ''
}

stop.addEventListener('click', stopMessage)

function stopMessage(e) {
  e.preventDefault()
  btnsend2.setAttribute('disabled','disabled')
  btnsend2.removeEventListener('click', displayMessage2)
}

function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}