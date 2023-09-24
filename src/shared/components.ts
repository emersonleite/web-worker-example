export const headerWrapper = document.createElement('header')
export const footerWrapper = document.createElement('footer')
export const mainWrapper = document.createElement('main')
export const bodyWrapper = document.querySelector('body')

export const headerTitleWrapper = document.createElement('h1')

mainWrapper.classList.add('main-wrapper')
footerWrapper.classList.add('footer')
headerWrapper.classList.add('header')
headerTitleWrapper.classList.add('header-title')


headerTitleWrapper.innerText = 'Título do Header'

headerWrapper.prepend(headerTitleWrapper)

footerWrapper.innerHTML = `<div class="container">
<p>By Emerson Leite - <span id="year">${new Date().getFullYear()}</span></p>
</div>`


