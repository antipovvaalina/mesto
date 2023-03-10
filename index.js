const openButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');

openButton.addEventListener('click',function() {
    popup.classList.add('popup__opened')
});

const clozeButton = document.querySelector('.popup__close');

clozeButton.addEventListener('click',function(){
    popup.classList.remove('popup__opened')
});

let userName = 'Жак-Ив Кусто'
let userOccupation = 'Исследователь океана'

const userNameElement = document.querySelector('#name')
userNameElement.textContent = userName

const userOccupationElement = document.querySelector('#occupation')
userOccupationElement.textContent = userOccupation

const userNameInput = document.querySelector('#name-input')
userNameInput.value = userName

const userOccupationInput = document.querySelector('#occupation-input')
userOccupationInput.value = userOccupation

let formElement = document.querySelector('.form')

const saveButton = document.querySelector('.form__button')


function handleFormSubmit (evt) {
    evt.preventDefault(); 
    
    userNameElement.textContent = userNameInput.value
    userOccupationElement.textContent = userOccupationInput.value

}

formElement.addEventListener('submit', handleFormSubmit); 

saveButton.addEventListener('click',function(){
    popup.classList.remove('popup__opened')
});