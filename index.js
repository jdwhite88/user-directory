// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing pahe
    ev.preventDefault();
    const users = document.querySelector('#users');
    const userName = ev.target.user.value;
    users.innerHTML += '<p>' + userName + '</p>';
    ev.target.user.value = '';
}
form.addEventListener('submit', handleSubmit);