console.log('JS linked')

// cached DOM elements
const navbarEl = document.querySelector('nav')

// event listeners

navbarEl.addEventListener('click', scrollToElement)


// functions

function scrollToElement(evt){
    if (evt.target.id !== ''){
        document.getElementById(`${evt.target.id}-section`).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}