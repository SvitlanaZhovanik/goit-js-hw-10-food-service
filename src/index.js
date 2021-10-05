import './sass/main.scss';
import menu from './menu.json';
import menuCardsTpl from'./menu-cards.hbs'

// Сделана разметка
const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('beforeend', menuCardsTpl({menu}));

// Работа с ползунком и темами
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const inputThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

bodyRef.classList.add(Theme.LIGHT)


inputThemeRef.addEventListener('change', ()=> {
    bodyRef.classList.toggle(Theme.LIGHT)
    bodyRef.classList.toggle(Theme.DARK);
    localStorage.setItem('currentTheme', bodyRef.className)});


    
    currentTheme()

    function currentTheme() {
      const currentThemeUser = localStorage.getItem('currentTheme');
      if (currentThemeUser) {
          bodyRef.classList.add(currentThemeUser)
          if (bodyRef.classList.contains(Theme.DARK)){
              inputThemeRef.checked = true; }
  }
  }