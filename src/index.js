import loadHome from './home.js';
import loadAbout from './about.js';
import loadContact from './contact.js';

const content = document.querySelector('#content');

function createHeader() {
  let header = document.createElement('header');

  let logo = document.createElement('h1');
  logo.classList.add('nav-link');
  logo.innerText = 'POMODORO';
  logo.addEventListener('click', () => loadHome());
  header.appendChild(logo);

  let nav = document.createElement('nav');

  let link1 = document.createElement('h3');
  link1.classList.add('nav-link');
  link1.innerText = 'Home';
  link1.addEventListener('click', () => loadHome());
  nav.appendChild(link1);

  let link2 = document.createElement('h3');
  link2.classList.add('nav-link');
  link2.innerText = 'About';
  link2.addEventListener('click', () => loadAbout());
  nav.appendChild(link2);

  let link3 = document.createElement('h3');
  link3.classList.add('nav-link');
  link3.innerText = 'Contact';
  link3.addEventListener('click', () => loadContact());
  nav.appendChild(link3);

  header.appendChild(nav);

  return header;
}

function createMain() {
  let main = document.createElement('main');
  return main;
}

function createFooter() {
  let footer = document.createElement('footer');

  let a1 = document.createElement('a');
  a1.href = 'https://github.com/rikster-r/restaurant-page';
  a1.innerHTML = '&copy; 2022 rikster-r'; //used innerHTML for copyright sign;
  footer.appendChild(a1);

  let a2 = document.createElement('a');
  a2.href = 'https://www.freepik.com';
  a2.innerText = 'Vectors created by pch.vector - www.freepik.com';
  footer.appendChild(a2);

  return footer;
}

content.appendChild(createHeader());
content.appendChild(createMain());
content.appendChild(createFooter());

loadHome();