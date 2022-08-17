function createAbout() {
  let about = document.createElement('div');
  about.classList.add('container');

  let img = document.createElement('img');
  img.src = 'img/pizza-slice.png';
  about.appendChild(img);

  let div = document.createElement('div');

  let mainText1 = document.createElement('h4');
  mainText1.innerText = 'Making the best pizza in town since 1998. Valued by our clients for:';
  div.appendChild(mainText1);

  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  li1.innerText = 'Speed. Every delivery under 1 hour!';
  ul.appendChild(li1)

  let li2 = document.createElement('li');
  li2.innerText = 'Quality. We use only the best ingredients';
  ul.appendChild(li2)

  let li3 = document.createElement('li');
  li3.innerText = 'Pricing. We have the lowest prices and frequent discounts. That is double money saving!';
  ul.appendChild(li3)

  let li4 = document.createElement('li');
  li4.innerText = 'Standards. Only clean hands and no insects';
  ul.appendChild(li4)

  let li5 = document.createElement('li');
  li5.innerText = 'Community. We are a family';
  ul.appendChild(li5)
  div.appendChild(ul);

  let mainText2 = document.createElement('h4');
  mainText2.innerText = 'For us, Pomodoro is not only a pizza place. First of all it is a great thing that inspires us, makes us wake up every morning and continue to work with interest.';
  div.appendChild(mainText2);

  about.appendChild(div);

  return about;
}

export default function loadAbout() {
  let main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(createAbout());
}