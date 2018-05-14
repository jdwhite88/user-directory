// Get first element with the element 'button'
//const button = document.querySelector('button');

// Get element with the id 'changeTextButton' (#)
//const button = document.querySelector('#changeTextButton');

// Get first element with the class 'greeting' (.)
//const button = document.querySelector('.greeting');

// Get first element with the element 'button' and class 'greeting'
const button = document.querySelector('button.greeting');

function changeText(ev) {
    
    const paragraph = document.querySelector('p.greeting');
    const title = document.querySelector('h1#title');
    // Change text of first <p> element with class 'greeting'
    paragraph.textContent = "Text has changed!";
    // Change text of first <h1> element with class 'title'
    title.textContent = "New User Directory";
    // Change text of the element that called the function
    ev.target.textContent = "Change Text Again";
}

// Run changeText function when button clicked
button.addEventListener('click', changeText);