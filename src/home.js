function createHome() {
  let home = document.createElement('div');
  home.classList.add('home-container');

  for (let i = 1; i <= 9; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let itemImg = document.createElement('img');
    itemImg.src = `img/pizza-${i}.png`;
    menuItem.appendChild(itemImg);

    let itemTitle = document.createElement('h4');
    itemTitle.innerText = 'Pizza Name';
    menuItem.appendChild(itemTitle);

    let desc = document.createElement('p');
    desc.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, aut.';
    menuItem.appendChild(desc);

    home.appendChild(menuItem);
  }

  return home;
}

export default function loadHome() {
  let main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createHome());
}

