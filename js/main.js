const navbar = document.querySelector('nav');
const navOpen = document.querySelector('.menu--open');
const navClose = document.querySelectorAll('.menu--close');

const submitBtn = document.querySelector('input[type=submit]');
const dialogBody = document.querySelector('.dialog--box');
const dialogBox = document.querySelector('#dialog');
const dialogClose = document.querySelector('.dialog-close');

submitBtn.addEventListener('click', () => {
    dialogBody.style.transform = 'translateY(0)';
    // dialogBox.style.transform = 'unset';
    // dialogBox.style.top = 'unset';
})

dialogClose.addEventListener('click', () => {
    dialogBody.style.transform = 'translateY(-100%)';
})


navOpen.addEventListener('click', () => {
    navbar.style.transform = 'translateX(0)';
});

// navClose.addEventListener('click', () => {
//     navbar.style.transform = 'translate(100%)';
// });

navClose.forEach((el) => {
    el.addEventListener('click', () => {
        navbar.style.transform = 'translateX(100%)';
    });
});