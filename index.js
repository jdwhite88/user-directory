// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
// First element with id 'userForm'
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing page
    ev.preventDefault();
    const users = document.querySelector('#users');
    const form = ev.target;

    const userName = form.userName.value;
    const age = form.age.value;
    const favoriteColor = form.favoriteColor.value;

    // Adding to div in HMTL:
    //  <ul>
    //     <li>Name: [username]</li>
    //     <li>Age: [age]</li>
    //     <li></li>
    // </ul>
    const list = document.createElement('ul');
    const nameItem = document.createElement('li');
    nameItem.textContent = `Name: ${userName}`;
    const ageItem = document.createElement('li');
    ageItem.textContent = `Age: ${age}`;
    const colorItem = document.createElement('li');
    colorItem.textContent = `Favorite Color: ${favoriteColor}`;
    const colorSwatch = document.createElement('div');
    //Set dimensions of color swatch
    colorSwatch.style.width = '6rem';
    colorSwatch.style.height = '3rem';
    colorSwatch.style.backgroundColor = favoriteColor;

    colorItem.appendChild(colorSwatch);
    list.appendChild(nameItem);
    list.appendChild(ageItem);
    list.appendChild(colorItem);
    users.appendChild(list);

    form.reset();
    form.userName.focus();
}
form.addEventListener('submit', handleSubmit);