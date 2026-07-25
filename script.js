// Находим элементы DOM
const resultBox = document.getElementById('result');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const messageBox = document.getElementById('message');

// Начальное значение счетчика
let count = 0;

// Функция обновления интерфейса
function updateCounter() {
    // 1. Выводим значение
    resultBox.textContent = count;

    // 2. Меняем цвет фона окошка
    resultBox.classList.remove('red', 'yellow', 'green');
    if (count === 0) {
        resultBox.classList.add('red');
    } else if (count > 0) {
        resultBox.classList.add('yellow');
    } else {
        resultBox.classList.add('green');
    }

    // 3. Блокировка/разблокировка кнопок
    btnPlus.disabled = (count >= 10);
    btnMinus.disabled = (count <= -10);

    // 4. Проверка на экстремальное значение
    if (count === 10 || count === -10) {
        messageBox.textContent = 'Вы достигли экстремального значения';
    } else {
        messageBox.textContent = '';
    }
}

// Слушатели событий
btnPlus.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateCounter();
    }
});

btnMinus.addEventListener('click', () => {
    if (count > -10) {
        count--;
        updateCounter();
    }
});

// Первоначальный вызов для установки правильного состояния
updateCounter();