const choice = document.querySelectorAll('img');
const imgComputer = document.getElementById('img-computer');
const info = document.getElementById('info');

function getComputerChoice() {
  let computer = Math.random();

  if (computer < 0.34) {
    return 'paper';
  }
  if (computer >= 0.34 && computer < 0.67) {
    return 'scissor';
  }
  return 'rock';
}

function getResult(computer, player) {
  if (computer == player) {
    return 'draw';
  }
  if (player == 'paper') {
    return computer == 'rock' ? 'WIN' : 'LOSE';
  }
  if (player == 'rock') return computer == 'paper' ? 'LOSE' : 'WIN';
  if (player == 'scissor') return computer == 'rock' ? 'LOSE' : 'WIN';
}

function rollingChoice() {
  const image = ['rock', 'paper', 'scissor'];
  let i = 0;

  const start = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - start > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', `../img/${image[i++]}.jpg`);
    if (i == image.length) {
      i = 0;
    }
  }, 100);
}

choice.forEach(function (image) {
  image.addEventListener('click', function () {
    const getComputer = getComputerChoice();
    const getPlayer = image.id;
    const result = getResult(getComputer, getPlayer);

    rollingChoice();

    setTimeout(function () {
      imgComputer.setAttribute('src', `../img/${getComputer}.jpg`);
      info.innerHTML = result;
    }, 1000);
  });
});
