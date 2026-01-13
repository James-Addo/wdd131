const mainnav = document.querySelector('.nav-links');
const hambutton = document.querySelector('#nav-menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification <span class="highlight">${document.lastModified}</span>`;
