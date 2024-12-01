// Получаем элементы
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseMessage = document.getElementById('responseMessage');

// Обработчик для кнопки "Да"
yesButton.addEventListener('click', () => {
    responseMessage.textContent = 'Ура! Я так рад!';
    responseMessage.classList.remove('hidden');
    responseMessage.style.color = '#000000'; // Черный цвет

    // Открываем новую страницу в новой вкладке
    window.open('success.html', '_blank'); // Укажи путь к своей новой странице
});


// Обработчик для кнопки "Нет"
noButton.addEventListener('click', () => {
    responseMessage.textContent = 'капец ты дурак, обнови страничку и нажми "конечно пойду"';
    responseMessage.classList.remove('hidden');
    responseMessage.style.color = '#333';
});

// Получаем элементы картинок
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Функция для отслеживания прокрутки
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight; // Текущая позиция прокрутки

    // Если пользователь прокрутил до определённого места, показываем вторую картинку
    if (scrollPosition >= image2.offsetTop) {
        image2.style.opacity = 1;  // Показываем вторую картинку
        image2.style.visibility = 'visible';  // Делаем картинку видимой
        image1.style.opacity = 0;  // Прячем первую картинку
        image1.style.visibility = 'hidden';  // Делаем первую картинку невидимой
    } else {
        image2.style.opacity = 0;  // Прячем вторую картинку
        image2.style.visibility = 'hidden';  // Делаем вторую картинку невидимой
        image1.style.opacity = 1;  // Показываем первую картинку
        image1.style.visibility = 'visible';  // Делаем первую картинку видимой
    }
});