/*
	License : 
	You have the liberty to copy this code anywhere you want.
	But do it at your own risk. It's inefficient for a reason :P
*/
window.chromeBlack = '#35363a';
window.colorSchemes = [
  { name: 'purple', hex: '#66459b', accentColor: 'accent-color-cyan', darkSupport: false, accentHex: '#00c9dbcc' },
  { name: 'basic', hex: window.chromeBlack, accentColor: 'accent-color-cyan', darkSupport: true, accentHex: '#00c9dbcc' }];
window.activeColorScheme = -1;
x = ['#66459b', '#FFD700', '#e91e63', '#4caf50', '#ff5722', '#424242'];
window.nameInMillionLanguages = ['praveen naik.', 'ಪ್ರವೀಣ್ ನಾಯಕ್.', 'प्रवीण नायक ।', 'பிரவீன் நாய்க்.'];
window.activeNameIndicator = 0;

window.darkKnight = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (window.darkKnight) document.body.style.backgroundColor = window.chromeBlack;
changeColor(undefined, true);

var indicator = document.getElementById('indicator_wrapper');
init();

function init() {
  // Indicator
  window.nameInMillionLanguages.map((each, index) => {
    const eachIndicator = document.createElement('span');
    const className = window.activeNameIndicator == index ? `indicator ${window.colorSchemes[window.activeColorScheme].accentColor}` : 'indicator';
    eachIndicator.className = className;
    indicator.appendChild(eachIndicator);
  });
}

function iJustGiveRandomShit(list) {
  const index = Math.floor(Math.random() * list.length);
  const item = list[index];
  return { item, index };
}

function changeColor(e, isFisrtLoad) {
  const { item, index } = isFisrtLoad ? { item: window.colorSchemes[0], index: 0 } : iJustGiveRandomShit(window.colorSchemes);
  const randomColor = item;
  window.activeColorScheme = index;
  const cards = document.getElementsByClassName('card');
  if (!window.darkKnight)
    document.querySelector('meta[name="theme-color"]').setAttribute('content', randomColor.hex);
  // Note: These stunts are 'perform'ed by highly trained professionals.
  // Please do not try this at work or any openSource.
  for (var i = 0; i < cards.length; i++) {
    if (e) e.querySelector('h1 span').innerHTML = ['Not a', randomColor.name, 'person?'].join(' ');
    cards[i].style.backgroundColor = randomColor.hex;
    cards[i].style.border = window.darkKnight && randomColor.darkSupport ? '2px solid ' + randomColor.accentHex : 'unset';
    cards[i].style.borderRadius = window.darkKnight && randomColor.darkSupport ? '10px' : 'unset';
  }
}

var offCourseItsMyName = document.getElementById('not-my-name');

function handleIndicatorChange(currActive) {
  window.activeNameIndicator++;
  const nextActive = window.activeNameIndicator % window.nameInMillionLanguages.length;
  indicator.querySelectorAll('span')[currActive].classList.remove(window.colorSchemes[window.activeColorScheme].accentColor);
  indicator.querySelectorAll('span')[nextActive].classList.add(window.colorSchemes[window.activeColorScheme].accentColor);
  window.activeNameIndicator = nextActive;
  return nextActive;
}

window.setInterval(function () {
  const nextActive = handleIndicatorChange(window.activeNameIndicator);
  offCourseItsMyName.innerHTML = window.nameInMillionLanguages[nextActive];
}, 2 * 1000);

var hireMeAlert = window.setInterval(function () {
  alert('You\'ve been looking at my profile for 3 minutes now. Wanna hire me?\nDrop me a mail at praveencn77@gmail.com\nCheers 🍺');
  window.clearInterval(hireMeAlert);
}, 60 * 3 * 1000);

console.log('If you\'re a developer and you\'ve come here, Viola!');
console.log('Annexure 0 : Hey! This is Internet. I made it myself :p');
console.log('Annexure 1 : The <Code> is written with a bug, find it!');
console.log('Annexure 2 : Do you binge watch shows? Hit me up with your favs. There is a good chance I have seen it');
console.log('Annexure 3 : If your wondering what font i have used, its Product G̶o̶o̶g̶l̶e̶ Sans. Yeah, they were dumb to make it available to public');
