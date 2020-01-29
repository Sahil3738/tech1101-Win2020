// console.log('hello and testing') // We don't need that anymore. It was just to test it was working.

// Use querySelector for now; it's easier for you to remember
// # <- For IDs when using querySelector
const fname = document.querySelector('#firstName') // Look on the right ==>

// Grab the button! We want to 'attach' an event listener to this button
const button = document.querySelector('#submit')

// button.addEventListener('click', function () {
  // console.log('This button is working!') // It's working!!!
// })

const show = document.querySelector('#show')

function fn(){
  show.textContent = fname.value
}

button.addEventListener('click', fn)
