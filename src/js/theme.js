const bodyRef = document.querySelector('#body')
const changeRef = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', JSON.stringify(Theme))
const value = localStorage.getItem('Theme')
const parsedValue = JSON.parse(value)
console.log(parsedValue);

// 1) При нажатии(событие change) на чекбокс #theme -switch-toggle - добавлять на элемент body класс light-theme или dark-theme.
function handleClick() {
    if (bodyRef.className === '') {
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
  }

  const currentTheme = bodyRef.getAttribute('class');

  localStorage.setItem('theme', currentTheme);
};

changeRef.addEventListener("change", handleClick);

// 2) Выбранная тема сохраняется между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.

function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    changeRef.setAttribute('checked', true);
  }
}

restoreTheme();



