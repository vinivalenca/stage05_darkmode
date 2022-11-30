let forestOff = document.querySelector('.forestOff');
let forestOn = document.querySelector('.forestOn');
let rainOff = document.querySelector('.rainOff');
let rainOn = document.querySelector('.rainOn');
let coffeeOff = document.querySelector('.coffeeOff');
let coffeeOn = document.querySelector('.coffeeOn');
let fireOff = document.querySelector('.fireOff');
let fireOn = document.querySelector('.fireOn');
let light = document.querySelector('.light');
let dark = document.querySelector('.dark');

let buttonPlay = document.querySelector('.play');
let buttonStop = document.querySelector('.stop');
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let timerTimeOut

const buttonForest = new Audio('Floresta.wav')
const buttonRain = new Audio('Chuva.wav')
const buttonCoffee = new Audio('Cafeteria.wav')
const buttonFire = new Audio('Lareira.wav')

let volume1 = document.querySelector("#volume-control1");
let volume2 = document.querySelector("#volume-control2");
let volume3 = document.querySelector("#volume-control3");
let volume4 = document.querySelector("#volume-control4");


function resetButtons() {
    forestOff.classList.remove('hide')
    forestOn.classList.add('hide')
    rainOff.classList.remove('hide')
    rainOn.classList.add('hide')
    coffeeOff.classList.remove('hide')
    coffeeOn.classList.add('hide')
    fireOff.classList.remove('hide')
    fireOn.classList.add('hide')
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
       
        if (minutes == 0 && seconds == 0) {
            buttonPlay.disabled = false;
            return
        }
        
        if (seconds <= 0) {
            seconds = 60;
            --minutes
            minutesDisplay.textContent = String(minutes).padStart(2, "0")

        } 
        --seconds
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        countdown()
    }, 1000)
}

function stop() {
    minutesDisplay.textContent = 25;
    secondsDisplay.textContent = String(00).padStart(2, "0")

}

function plus() {
    let minutes = Number(minutesDisplay.textContent)
    minutes = minutes + 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

function minus() {
    let minutes = Number(minutesDisplay.textContent)
    minutes = minutes - 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")

    if (minutes <= 0) {
        minutes = 0
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }
}

function pauseAudio() {
   buttonForest.pause()
   buttonRain.pause()
   buttonCoffee.pause()
   buttonFire.pause()
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.disabled = true;
    countdown()
})

buttonStop.addEventListener('click', function() {
    buttonPlay.disabled = false;
    clearTimeout(timerTimeOut)
    stop()
})

buttonPlus.addEventListener('click', function() {
    plus()
})

buttonMinus.addEventListener('click', function() {
    minus()
})

forestOff.addEventListener('click', function() {
    resetButtons()
    forestOff.classList.toggle('hide')
    forestOn.classList.toggle('hide')
    pauseAudio()
    buttonForest.play()
    buttonForest.loop = true

    volume1.addEventListener("change", function(e) {
        buttonForest.volume = e.currentTarget.value / 100;
        })
      
})

forestOn.addEventListener('click', function() {
    forestOff.classList.toggle('hide')
    forestOn.classList.toggle('hide')
    pauseAudio()
})

rainOff.addEventListener('click', function() {
    resetButtons()
    rainOff.classList.toggle('hide')
    rainOn.classList.toggle('hide')
    pauseAudio()
    buttonRain.play()
    buttonRain.loop = true

    volume2.addEventListener("change", function(e) {
        buttonRain.volume = e.currentTarget.value / 100;
        })
      
})

rainOn.addEventListener('click', function() {
    rainOff.classList.toggle('hide')
    rainOn.classList.toggle('hide')
    pauseAudio()
})

coffeeOff.addEventListener('click', function() {
    resetButtons()
    coffeeOff.classList.toggle('hide')
    coffeeOn.classList.toggle('hide')
    pauseAudio()
    buttonCoffee.play()
    buttonCoffee.loop = true

    volume3.addEventListener("change", function(e) {
        buttonCoffee.volume = e.currentTarget.value / 100;
        })
      
})

coffeeOn.addEventListener('click', function() {
    coffeeOff.classList.toggle('hide')
    coffeeOn.classList.toggle('hide')
    pauseAudio()
})

fireOff.addEventListener('click', function() {
    resetButtons()
    fireOff.classList.toggle('hide')
    fireOn.classList.toggle('hide')
    pauseAudio()
    buttonFire.play()
    buttonFire.loop = true

    volume4.addEventListener("change", function(e) {
        buttonFire.volume = e.currentTarget.value / 100;
        })
      
})

fireOn.addEventListener('click', function() {
    fireOff.classList.toggle('hide')
    fireOn.classList.toggle('hide')
    pauseAudio()
})

light.addEventListener('click', function() {
dark.classList.toggle('hide')
light.classList.toggle('hide')
document.documentElement.style.setProperty('--bg-color', '#121214')
document.documentElement.style.setProperty('--text-color', '#FFFFFF')
document.documentElement.style.setProperty('--card-primary-color', '#29292E')
document.documentElement.style.setProperty('--card-secondary-color', '#0A3442')
document.documentElement.style.setProperty('--input-primary-color', 'white')



})

dark.addEventListener('click', function() {
dark.classList.toggle('hide')
light.classList.toggle('hide')

document.documentElement.style.setProperty('--bg-color', '#FFFFFF')
document.documentElement.style.setProperty('--text-color', '#323238')
document.documentElement.style.setProperty('--card-primary-color', '#E1E1E6')
document.documentElement.style.setProperty('--card-secondary-color', '#02799D')
document.documentElement.style.setProperty('--input-primary-color', 'black')

})

