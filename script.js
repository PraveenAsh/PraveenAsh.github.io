function getRandomColor() {
  const colors = ['#66459b', '#FFD700', '#e91e63', '#4caf50', '#ff5722', '#424242'];
  return colors[Math.floor(Math.random() * colors.length)];
};

function getRandomLanguage() {
  const colors = ['ಪ್ರವೀಣ್ ನಾಯಕ್.', 'प्रवीण नायक ।', 'praveen naik.', 'பிரவீன் நாய்க்.'];
  return colors[Math.floor(Math.random() * colors.length)];
};

function changeColor() {
  var randomColor = getRandomColor();
  const elements = document.getElementsByClassName('card');
  console.log(typeof elements);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = randomColor;
  }
}

var offCourseItsMyName = document.getElementById('not-my-name');
window.setInterval(function () {
  offCourseItsMyName.innerHTML = getRandomLanguage();
}, 5 * 1000);
window.setInterval(function () {
  alert('You\'ve been like 5 minutes on my website. Wanna hire me? Check console!');
}, 60 * 10 * 1000);