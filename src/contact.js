function createContact() {
  let contact = document.createElement('div');
  contact.classList.add('container');

  let img = document.createElement('img');
  img.src = 'img/courier.png';
  contact.appendChild(img);

  let div = document.createElement('div');

  let p1 = document.createElement('p');
  p1.innerText = 'Call us: +3 567 8345 7689, +3 436 7547 9493';
  div.appendChild(p1);

  let p2 = document.createElement('p');
  p2.innerText = 'Visit us: Grand Thomas Avenue 65, Las Santos, USA';
  div.appendChild(p2);

  contact.appendChild(div);

  return contact;
}

export default function loadContact() {
  let main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createContact());
}