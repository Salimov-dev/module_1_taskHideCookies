import './index.css';

const button = document.querySelector('button')
const hideBlock = document.querySelector('.cookie-consent')

button.addEventListener('click', () => {
    hideBlock.style.display = 'none'
    localStorage.setItem('dislpay', hideBlock.style.display)
})

if (localStorage.getItem('dislpay')) {
    hideBlock.style.display = 'none'
}