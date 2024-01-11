let if_preloader = document.querySelector('.preloader')
if (if_preloader) {

    var preloaderOverlay = document.querySelector(".preloader__overlay");
    var preloader = document.querySelector(".preloader");
    var element = document.querySelector(".element");
    
    // Функция для обновления ширины прелоадера в зависимости от процента загрузки
    function updateLoaderWidth(percentage) {
        preloaderOverlay.style.width = 100 - percentage + "%";
    }
    
    // Ваш код для отслеживания процента загрузки страницы
    // Пример: обновление ширины прелоадера каждую секунду
    var fakeProgress = 0;
    var progressInterval = setInterval(function() {
        fakeProgress += 1; // Замените на ваш реальный прогресс
        updateLoaderWidth(fakeProgress);
    
        if (fakeProgress >= 100) {
            clearInterval(progressInterval);
    
            // Задержка 2-3 секунды перед скрытием прелоадера
            setTimeout(function() {
                preloader.classList.add('remove');
            }, 300); // Измените на 3000, если нужно 3 секунды
        }
    }, 8); // Изменено на 30 миллисекунд для более плавной анимации изменения ширины
    
    // Функция для смены цвета элемента
    function changeElementColor() {
        var colors = [
            "#ff7900",
            "#ff0000",
            "#ffe000",
            "#00e83c",
            "#00e1ff",
            "#0000ff",
            "#ff00ff",
            "#6183ff",
            "#8cc63f",
            "#d4145a"
        ];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.setAttribute('fill', randomColor);
    
        // Сохраняем текущий цвет в localStorage
        localStorage.setItem('elementColor', randomColor);
    }

    // Событие загрузки страницы для смены цвета элемента
    document.addEventListener("DOMContentLoaded", function() {
        // Задержка 1 секунда перед сменой цвета элемента
        setTimeout(function() {
            changeElementColor();
        }, 1500);
    
        // Восстанавливаем цвет элемента из localStorage
        var savedColor = localStorage.getItem('elementColor');
        if (savedColor) {
            element.setAttribute('fill', savedColor);
        }
    });
    
}