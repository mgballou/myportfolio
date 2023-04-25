console.log('JS linked')

// cached DOM elements
const navbarEl = document.querySelector('nav')
const navbarMenuEl = document.getElementById('navbar-target')

// event listeners

navbarMenuEl.addEventListener('click', scrollToElement)

navbarEl.addEventListener('mouseover', displayNav)

navbarEl.addEventListener('mouseout', resetOpacity)

// functions

function scrollToElement(evt) {
    if (evt.target.id !== '' && evt.target.id !== 'navbar-target') {
        document.getElementById(`${evt.target.id}-section`).scrollIntoView({ behavior: 'smooth', block: 'center' })
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
// window events

window.onscroll = function (evt) {
    if (window.scrollY <= 35) {
        navbarEl.style.opacity = "1"
    } else {
        navbarEl.style.opacity = "0.0"
    }
}