// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
// First element with id 'userForm'
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing page
    ev.preventDefault();
    const users = document.querySelector('#users');
    const form = ev.target;

    const userName = form.user.value;
    const age = form.age.value;
    users.innerHTML += `<p>${userName}, ${age}<\p>`;

    form.reset();
    form.userName.focus();
}
form.addEventListener('submit', handleSubmit);