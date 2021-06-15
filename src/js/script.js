document.addEventListener('DOMContentLoaded', setVh)

// window.addEventListener('resize', setVh)

function setVh() {
  document
    .querySelector(':root')
    .style.setProperty('--vh', window.innerHeight / 100 + 'px')
}

