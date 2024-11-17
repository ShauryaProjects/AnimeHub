const loginBox = document.querySelector('.login-box');


const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', () => {
    loginBox.classList.add('register-active');
});

const loginLink = document.querySelector('.login-link');
loginLink.addEventListener('click', ()=> {
    loginBox.classList.remove('register-active');
});


const loginbtnPopup = document.querySelector('.loginbtn-popup');
loginbtnPopup.addEventListener('click', ()=> {
    loginBox.classList.remove('remove');
    home.classList.add('remove')
});

const iconclose = document.querySelector('.icon-close');
iconclose.addEventListener('click', ()=> {
    loginBox.classList.add('remove');
});

const home = document.querySelector('.home');

const homebtnPopup = document.querySelector('.homebtn-popup')
homebtnPopup.addEventListener('click', () => {
    loginBox.classList.add('remove');
    home.classList.remove('remove')
});

