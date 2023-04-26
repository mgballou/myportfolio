console.log('JS linked')

const formSpreeUrl = 'https://formspree.io/f/mqkowoka'

// cached DOM elements
const navbarEl = document.querySelector('nav')
const navbarBurgerEl = document.querySelector('.navbar-burger')
const navbarMenuEl = document.getElementById('navbar-target')
const formEl = document.querySelector('form')
const contactTitleEl = document.getElementById('form-title')

// event listeners

navbarMenuEl.addEventListener('click', scrollToElement)

navbarEl.addEventListener('mouseover', displayNav)

navbarEl.addEventListener('mouseout', resetOpacity)

formEl.addEventListener('submit', handleForm)

navbarBurgerEl.addEventListener('click', handleNavBurger)



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

function resetOpacity(evt) {
    if (window.scrollY > 35) {
        navbarEl.style.opacity = "0.0"
    }
}

function handleForm(evt) {
    evt.preventDefault()
    submitForm()
}

function submitForm() {
    fetch(formSpreeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formEl.name.value,
            email: formEl.email.value,
            phone: formEl.phone.value,
            subject: formEl.subject.value,
            message: formEl.message.value
            // add more fields as needed
        })
    }).then(function (response) {
        clearForm()

    })
}
function clearForm(){
    formEl.name.value = ""
    formEl.email.value = ""
    formEl.phone.value = ""
    formEl.subject.value = ""
    formEl.message.value = ""
    contactTitleEl.innerText = "Thanks for reaching out!"

}

function handleNavBurger(evt){
    navbarMenuEl.classList.toggle('is-active')
    navbarBurgerEl.classList.toggle('is-active')
}

// window events

window.onscroll = function (evt) {
    if (window.scrollY <= 35) {
        navbarEl.style.opacity = "1"
    } else {
        navbarEl.style.opacity = "0.0"
    }
}