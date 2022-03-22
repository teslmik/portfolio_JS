'use strict'

const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescrition = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const designBlock = document.querySelectorAll('.design-block__img');
const designTitle = document.querySelectorAll('.design__title');
const titleBlock = document.querySelector('title');

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescrition, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(designBlock, dataValue);
    changeContent(designTitle, dataValue);

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    });
  });
});