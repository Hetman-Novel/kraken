const lucky_spin_menu = document.getElementById('lucky-spin')
if (lucky_spin_menu) {
   lucky_spin_menu.addEventListener('click', () => {
      document.getElementById('hidden-menu').classList.remove('open-menu')
      document.getElementById('hidden-menu').parentNode.parentNode.classList.remove('open-menu')
      const btns_menu = document.querySelectorAll('.header__btn-menu')
      btns_menu.forEach(function (btn_menu) {
         btn_menu.classList.remove('active')
      })
   })
}

const slot_machine_menu = document.getElementById('slot-machine-link')
if (slot_machine_menu) {
   slot_machine_menu.addEventListener('click', () => {
      document.getElementById('hidden-menu').classList.remove('open-menu')
      document.getElementById('hidden-menu').parentNode.parentNode.classList.remove('open-menu')
      const btns_menu = document.querySelectorAll('.header__btn-menu')
      btns_menu.forEach(function (btn_menu) {
         btn_menu.classList.remove('active')
      })
   })
}

document.addEventListener('DOMContentLoaded', function () {

   // Wheel of fortune
   const wheel = document.querySelector('.js-wheel-of-fortune');
   const rotateButton = document.querySelector('.js-btn-start-rotating');

   let rotating = false;
   let currentRotation = 0; // Текущий угол вращения

   rotateButton.addEventListener('click', function () {
      if (!rotating) {
         rotating = true;

         // Устанавливаем параметры вращения
         const rotationSpeed = 420; // Скорость вращения в градусах в секунду
         const rotationDuration = 3; // Длительность вращения в секундах

         // Устанавливаем анимацию с учетом скорости и длительности
         wheel.style.transition = `transform ${rotationDuration}s linear`;

         // Вычисляем новый угол вращения
         currentRotation += rotationSpeed * rotationDuration;
         wheel.style.transform = `rotate(${currentRotation}deg)`;

         // Запускаем таймер для сброса параметров вращения после завершения
         setTimeout(function () {
         rotating = false;
         }, rotationDuration * 1000);
      }
   });

 
   // Slot Machine
   const slot_machine = document.querySelector('.slot-machine-popup')
   if (slot_machine) {
      document.querySelector('.slot-machine-popup__play').addEventListener('click', () => {
         document.querySelectorAll('.slot-machine-popup__columns').forEach(function (slot_machine_popup_column) {
            slot_machine_popup_column.classList.add('play-animation-demo')
         })
         setTimeout(function () {
            document.querySelectorAll('.slot-machine-popup__columns').forEach(function (slot_machine_popup_column) {
               slot_machine_popup_column.classList.remove('play-animation-demo')
            })
         }, 3000);
      })
   }

});