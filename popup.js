const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')//originally displayed as none

button.addEventListener('click', () => {
    popup.style.display = 'block';
})

const exit = document.querySelector('.popup-close');
exit.addEventListener('click', () => {
    popup.style.display = 'none'
});

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})



