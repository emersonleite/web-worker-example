import { headerWrapper, mainWrapper, bodyWrapper, footerWrapper, headerTitleWrapper } from "./components"

export function renderSharedElements() {
  bodyWrapper?.prepend(headerWrapper, mainWrapper, footerWrapper)
}

export function renderMainWrapper(innerHTML?: string) {
  mainWrapper.innerHTML = innerHTML ? innerHTML : '<div class="app"></div>'
}

export function setHeaderTitle(title: string) { headerTitleWrapper.innerText = title }