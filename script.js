const wrapper = document.querySelector('.buttons-wrapper');
const mainButton = wrapper.querySelector('.button--main');

mainButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})