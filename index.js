// Get first element with the element 'button'
//const button = document.querySelector('button');

// Get element with the id 'megaButton' (#)
//const button = document.querySelector('#megaButton');

// Get first element with the class 'greeting' (.)
//const button = document.querySelector('.greeting');

// Get first element with the element 'button' and class 'greeting'
const button = document.querySelector('button.greeting');
function changeText(ev) {
    /*// Get first element with the element 'p' and class 'greeting'
    const paragraph = document.querySelector('p.greeting');

    // Set <p> tag's text
    paragraph.textContent = "You done clicked!";*/

    // Text inside button/event that clicked it
    ev.target.textContent = "Clickity Click";




}

// Run changeText button when button clicked
button.addEventListener('click', changeText);