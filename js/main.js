const navbar = document.querySelector('nav');
const navOpen = document.querySelector('.menu--open');
const navClose = document.querySelector('.menu--close');

const submitBtn = document.querySelector('input[type=submit]');
const dialogBody = document.querySelector('.dialog--box');
const dialogBox = document.querySelector('#dialog');
const dialogClose = document.querySelector('.dialog-close');

submitBtn.addEventListener('click', () => {
    dialogBody.style.display = 'block';
    // dialogBox.style.transform = 'unset';
    // dialogBox.style.top = 'unset';
})

dialogClose.addEventListener('click', () => {
    dialogBody.style.display = 'none';
})


navOpen.addEventListener('click', () => {
    navbar.style.transform = 'translateX(0)';
});

// navClose.addEventListener('click', () => {
//     navbar.style.transform = 'translate(100%)';
// });

navClose.addEventListener('click', () => {
    navbar.style.transform = 'translateX(100%)';
});