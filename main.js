console.log('JS linked')
// state
let userName = ""
let phoneNumber = ""
let emailAddress = ""
let subject = ""
let message = ""

// cached DOM elements
const navbarEl = document.querySelector('nav')
const navbarMenuEl = document.getElementById('navbar-target')
const formSubmitButton = document.getElementById('form-submit')

const inputEls = document.querySelectorAll('input, textarea')

// event listeners

navbarMenuEl.addEventListener('click', scrollToElement)

navbarEl.addEventListener('mouseover', displayNav)

navbarEl.addEventListener('mouseout', resetOpacity)

formSubmitButton.addEventListener('click', handleForm)

inputEls.forEach(input => {
    input.addEventListener('input', function(evt){
        switch (evt.target.name){
            case 'userName':
               userName = evt.target.value
               break
            case 'phoneNumber':
                phoneNumber = evt.target.value
                break
            case 'emailAddress':
                emailAddress = evt.target.value
                break
            case 'subject':
                subject = evt.target.value
                break
            case 'message':
                message = evt.target.value
        }
    })
})

// functions

function scrollToElement(evt) {
    if (evt.target.id !== '' && evt.target.id !== 'navbar-target') {
        document.getElementById(`${evt.target.id}-section`).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

function displayNav(evt) {
    if (window.scrollY > 35) {
        navbarEl.style.opacity = "0.8"
    }
}

function resetOpacity(evt){
    if (window.scrollY > 35){
        navbarEl.style.opacity = "0.0"
    }
}

function handleForm(evt){
    console.log(userName, phoneNumber, emailAddress, subject, message)
    
}
// window events

window.onscroll = function (evt) {
    if (window.scrollY <= 35) {
        navbarEl.style.opacity = "1"
    } else {
        navbarEl.style.opacity = "0.0"
    }
}