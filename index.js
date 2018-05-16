// First <button> element with class 'greeting'
const button = document.querySelector('button.greeting');
// First element with id 'userForm'
const form = document.querySelector('#userForm');

const handleSubmit = function(ev) {
    // Prevent submit button from refreshing page
    ev.preventDefault();
    const users = document.querySelector('#users');
    const form = ev.target;

    const list = renderList();
    users.appendChild(list);

    form.reset();
    form.userName.focus();
}

// Takes the color value from the color selector, coloring and returning a div.
function renderColor(color) {
    const colorSwatch = document.createElement('div');
    colorSwatch.className = 'swatch';
    colorSwatch.style.width = '6rem';
    colorSwatch.style.height = '3rem';
    colorSwatch.style.backgroundColor = color;
    colorSwatch.addEventListener('click', updateColor);
    return colorSwatch;
}

// Given the input and a name for the input, return a list item containing text in the form "<name>: <input>"
function renderListItem(name, input) {
    const listItem = document.createElement('li');
    listItem.textContent = `${name}: ${input}`;
    return listItem;
}

// Returns a list containing the form values: the user name, age, and favorite color (with a swatch displaying the color)
// List in HMTL:
// <ul>
//     <li>Name: [userName]</li>
//     <li>Age: [age]</li>
//     <li>Favorite Color: #xxxxxx <div style="background-color:#xxxxxx; height: 3rem; width: 6rem;"></div></li>
// </ul>
function renderList() {
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

//Change the color of the input to the swatch the user clicked
function updateColor(ev) {
    form.favoriteColor.value = parseRGB(ev.target.style.backgroundColor);
}

//Convert "rgb(r, g, b)" (base-10 string) to "#rrggbb" (base-16 string)
function parseRGB(rgb) {
    //Match 'rgb(#, #, #)' for the component numbers
    const rgbMatch = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    const red = rgbMatch[1];
    const green = rgbMatch[2];
    const blue = rgbMatch[3];
    return rgbToHex(red, green, blue);
}

//Convert base-10 RGB colors (numbers) to base-16 color code (string)
function rgbToHex(r, g, b) {
    let hex = "#";
    hex += componentToHex(r) + componentToHex(g) + componentToHex(b);
    return hex;
}

//Convert base-10 color component (number) to base-16 (string)
function componentToHex(rgbComp) {
    let hexComp = Number(rgbComp).toString(16);
    if (hexComp.length < 2) {
        hexComp = '0' + hexComp;
    }
    return hexComp;
}

form.addEventListener('submit', handleSubmit);