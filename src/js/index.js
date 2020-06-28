import '../scss/main.scss';
import {
    registerSW
} from './pwa.js';
registerSW();


const counter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toISOString().slice(0, 10);

let currentNumberOfGlasses = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentNumberOfGlasses = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}

counter.innerHTML = currentNumberOfGlasses;

buttonAdd.addEventListener('click', () => {
    currentNumberOfGlasses++;
    counter.innerHTML = currentNumberOfGlasses;

    localStorage.setItem(key, currentNumberOfGlasses);
})

buttonRemove.addEventListener('click', () => {
    if (currentNumberOfGlasses > 0) {
        currentNumberOfGlasses--;
    }
    counter.innerHTML = currentNumberOfGlasses;

    localStorage.setItem(key, currentNumberOfGlasses);
})