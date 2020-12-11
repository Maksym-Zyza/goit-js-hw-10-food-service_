const bodyRef = document.querySelector('#body')
const changeRef = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

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





