/*
	License : 
	You have the liberty to copy this code anywhere you want.
	But do it at your own risk. It's inefficient for a reason :P
*/
window.chromeBlack = '#35363a';
window.colorSchemes = [
{ name: 'purple', hex: '#66459b', accentColor: 'none', darkSupport: false },
{ name: 'basic', hex: window.chromeBlack, accentColor: '#00c9db', darkSupport: true }];

x = ['#66459b', '#FFD700', '#e91e63', '#4caf50', '#ff5722', '#424242'];
window.nameInMillionLanguages = ['praveen naik.', 'ಪ್ರವೀಣ್ ನಾಯಕ್.', 'प्रवीण नायक ।', 'பிரவீன் நாய்க்.'];
window.activeNameIndicator = 0;

window.darkKnight = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (window.darkKnight) document.body.style.backgroundColor = window.chromeBlack;
changeColor(undefined, true);

init();

function init(){
  // Indicator
  const indicator = document.getElementById('indicator_wrapper');
  window.nameInMillionLanguages.map((each, index) => {
    const eachIndicator = document.createElement('span');
    const className = window.activeNameIndicator == index ? 'indicator active' : 'indicator'; 
    eachIndicator.className = className;
    indicator.appendChild(eachIndicator);
  });
}

function iJustGiveRandomShit(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function changeColor(e, isFisrtLoad) {
  const randomColor = isFisrtLoad ? window.colorSchemes[0] : iJustGiveRandomShit(window.colorSchemes);
  const cards = document.getElementsByClassName('card');
  // Note: These stunts are 'perform'ed by highly trained professionals.
  // Please do not try this at work or any openSource.
  for (var i = 0; i < cards.length; i++) {
    if (e) e.querySelector('h1 span').innerHTML = ['Not a', randomColor.name, 'person?'].join(' ');
    cards[i].style.backgroundColor = randomColor.hex;
    cards[i].style.border = window.darkKnight && randomColor.darkSupport ? '2px solid ' + randomColor.accentColor : 'unset';
    cards[i].style.borderRadius = window.darkKnight && randomColor.darkSupport ? '10px' : 'unset';
  }
}

var offCourseItsMyName = document.getElementById('not-my-name');

window.setInterval(function () {
  offCourseItsMyName.innerHTML = iJustGiveRandomShit(window.nameInMillionLanguages);
}, 2 * 1000);

var hireMeAlert = window.setInterval(function () {
  alert('You\'ve been looking at my profile for 3 minutes now. Wanna hire me?\nDrop me a mail at praveencn77@gmail.com\nCheers 🍺');
  window.clearInterval(hireMeAlert);
}, 60 * 3 * 1000);

console.log('If you\'re a developer and you\'ve come here, Viola!');
console.log('The is written with a bug, find it!');
console.log('Do you binge watch shows? Hit me up with your favs. There is a good chance I have seen it');
console.log('If your wondering what font i have used, its Product G̶o̶o̶g̶l̶e̶ Sans. Yeah, they were dumb to make it available to public');
