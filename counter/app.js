// initial counter
let count = 0;

//select value and buttons
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    }

    if (styles.contains('reset')) {
      count = 0;
    }

    if (styles.contains('decrease')) {
      count--;
    }

    value.textContent = count;
  });
});
