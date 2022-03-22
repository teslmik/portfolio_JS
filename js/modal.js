'use strict'

const modalButton = document.querySelector('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const closeButoon = modal.querySelector('.modal__close');

tabDescrition.forEach((modalButton) => {
  modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
})


overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
});

closeButoon.addEventListener('click', () => {
  modal.classList.add('hidden');
});