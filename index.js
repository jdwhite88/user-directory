// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');

function changeText(ev) {
    
    // First <p> element with class 'greeting'
    const paragraph = document.querySelector('p.greeting');
    // First <h1> element with class 'heading'
    const titleHeading = document.querySelector('h1.heading');
    // Element with id 'message'
    const messageHeading = document.querySelectorAll('.heading')[1];
    // Text input form for updating heading
    const newDirField = document.querySelector("input[type='text']");
    debugger;

    paragraph.textContent = "Directory has changed!";
    titleHeading.textContent = newDirField.value;
    newDirField.value = '';
    messageHeading.textContent = "Changed Message";

    ev.target.textContent = "Change Text Again";
}

// Run changeText function when button clicked
button.addEventListener('click', changeText);