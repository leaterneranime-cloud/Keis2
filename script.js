const resultBox = document.getElementById('result');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const messageBox = document.getElementById('message');

const MAX = 10;
const MIN = -10;

let count = 0;

function updateUI() {
    resultBox.textContent = count;

    resultBox.classList.remove('positive', 'negative', 'zero');
    if (count > 0) {
        resultBox.classList.add('positive');
    } else if (count < 0) {
        resultBox.classList.add('negative');
    } else {
        resultBox.classList.add('zero');
    }

    btnPlus.disabled = count >= MAX;
    btnMinus.disabled = count <= MIN;

    if (count === MAX || count === MIN) {
        messageBox.textContent = 'Вы достигли экстремального значения';
    } else {
        messageBox.textContent = '';
    }
}

btnPlus.addEventListener('click', () => {
    count++;
    updateUI();
});

btnMinus.addEventListener('click', () => {
    count--;
    updateUI();
});

updateUI();
