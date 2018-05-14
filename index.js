// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');

function changeText(ev) {
    
    // First <p> element with class 'greeting'
    const paragraph = document.querySelector('p.greeting');
    // First <h1> element with class 'heading'
    const titleHeading = document.querySelector('h1.heading');
    // Element with id 'message'
    const messageHeading = document.querySelector('#message');
    // Third element with class 'heading'
    const optionsHeading = document.querySelectorAll('.heading')[2];

    paragraph.textContent = "Text has changed!";
    titleHeading.textContent = "New User Directory";
    messageHeading.textContent = "Changed Message";
    optionsHeading.textContent = "Updated Options";

    ev.target.textContent = "Change Text Again";
}

// Run changeText function when button clicked
button.addEventListener('click', changeText);