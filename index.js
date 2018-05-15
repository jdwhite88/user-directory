// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
// First element with id 'userForm'
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing page
    ev.preventDefault();
    const users = document.querySelector('#users');
    const form = ev.target;

    const username = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;

    const p = document.createElement('p');
    p.textContent = `${username}, ${age}`;
    p.style.backgroundColor = color;
    users.appendChild(p);

    form.reset();
    form.userName.focus();
}
form.addEventListener('submit', handleSubmit);