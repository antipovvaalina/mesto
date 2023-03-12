const openButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');

const userNameElement = document.querySelector('#name')
const userOccupationElement = document.querySelector('#occupation')

const userNameInput = document.querySelector('#name-input')
const userOccupationInput = document.querySelector('#occupation-input')

let formElement = document.querySelector('.form')

const clozeButton = document.querySelector('.popup__close');

openButton.addEventListener('click',function() {
    popup.classList.add('popup_opened')
    userNameInput.value = userNameElement.textContent
    userOccupationInput.value = userOccupationElement.textContent
});

clozeButton.addEventListener('click',function(){
    popup.classList.remove('popup_opened')
    
});

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    
    userNameElement.textContent = userNameInput.value
    userOccupationElement.textContent = userOccupationInput.value

    popup.classList.remove('popup_opened')

}

formElement.addEventListener('submit', handleFormSubmit); 

