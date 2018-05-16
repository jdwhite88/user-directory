// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
// First element with id 'userForm'
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing page
    ev.preventDefault();
    const users = document.querySelector('#users');
    const form = ev.target;

    

    // List in HMTL:
    //  <ul>
    //     <li>Name: [userName]</li>
    //     <li>Age: [age]</li>
    //     <li>Favorite Color: #xxxxxx <div style="background-color:#xxxxxx; height:'3rem'; width:'6rem';"></div></li>
    // </ul>
    const list = renderList(form);
    users.appendChild(list);

    form.reset();
    form.userName.focus();
}

// Takes the color value from the color selector, coloring and returning a div.
function renderColor(color) {
    const colorSwatch = document.createElement('div');
    colorSwatch.style.width = '6rem';
    colorSwatch.style.height = '3rem';
    colorSwatch.style.backgroundColor = color;
    return colorSwatch;
}

// Given the input and a name for the input, return a list item containing text in the form "<name>: <input>"
function renderListItem(name, input) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: ${input}`;
    return listItem;
}

// Returns a list containing the form values: the user name, age, and favorite color (with a swatch displaying the color)
function renderList(form) {
    const userName = form.userName.value;
    const age = form.age.value;
    const color = form.favoriteColor.value;

    const list = document.createElement('ul');
    const nameItem = renderListItem('Name', userName);
    const ageItem = renderListItem('Age', age);
    const colorItem = renderListItem('Favorite Color', color);
    const colorSwatch = renderColor(color);
    colorItem.appendChild(colorSwatch);

    list.appendChild(nameItem);
    list.appendChild(ageItem);
    list.appendChild(colorItem);

    return list;
}

form.addEventListener('submit', handleSubmit);