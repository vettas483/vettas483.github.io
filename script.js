const button = document.getElementById('showMoreBtn');
const items = document.querySelectorAll('#content a');
let visibleCount = 5; // Сколько элементов показывать изначально

// Показываем первые элементы при загрузке
for (let i = 0; i < visibleCount; i++) {
  if (items[i]) {
    items[i].classList.add('visible');
  }
}

// Обработчик клика по кнопке
button.addEventListener('click', function() {
  let newVisibleCount = visibleCount + 5; // Показываем ещё 3 элемента

  // Показываем следующие элементы
  for (let i = visibleCount; i < newVisibleCount; i++) {
    if (items[i]) {
      items[i].classList.add('visible');
    }
  }

  visibleCount = newVisibleCount;

  // Скрываем кнопку, если все элементы показаны
  if (visibleCount >= items.length) {
    button.style.display = 'none';
  }
});