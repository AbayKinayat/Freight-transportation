const burgerNav = document.querySelector('.burger-nav')
const navInner = document.querySelector('.nav-inner')
const navWrapper = document.querySelector('.nav__wrapper')
const burgerLines = document.querySelector('.burger-nav__lines')

burgerNav.onclick = function navInnerOpenClose() {
  navInner.classList.toggle('nav-inner_show')
  navWrapper.classList.toggle('nav__wrapper_active')
  burgerLines.classList.toggle('burger-nav__lines_active')
}

navWrapper.onclick = function navInnerOpenClose() {
  navInner.classList.remove('nav-inner_show')
  navWrapper.classList.remove('nav__wrapper_active')
  burgerLines.classList.remove('burger-nav__lines_active')
}

