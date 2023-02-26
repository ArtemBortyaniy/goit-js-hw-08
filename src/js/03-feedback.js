import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('[name="email"]');
const inputMessageEl = document.querySelector('[name="message"]');
const LOCALSTORAGE_KEY = "feedback-form-state";

updateForm();

formEl.addEventListener('input', throttle(saveInLocalStorage, 500));
formEl.addEventListener('submit', resetForm);

function saveInLocalStorage () {
    const email = formEl.elements.email.value;
    const message = formEl.elements.message.value;
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
        email : email, 
        message : message,
    })); 
}

function updateForm () {
    const jsonValueForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const localStorageObj = JSON.parse(jsonValueForm);

    if (localStorageObj) {
        inputEmailEl.value = localStorageObj.email || '';
        inputMessageEl.value = localStorageObj.message || '';
    }
}

function resetForm (e) {
    e.preventDefault();
    
    const jsonValueForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const localStorageObj = JSON.parse(jsonValueForm);
    console.log(localStorageObj);

    localStorage.clear();
    formEl.reset();
}

