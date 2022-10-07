import { stringObject } from "./interfaces"
import { LIMIT } from "./constants"



export function getTimeElapsed(duration: number, wrapper: HTMLDivElement) {
  return wrapper!.textContent = String((duration / 1000).toFixed(4)) + ' segundos'
}

export function renderPostsElements<T extends stringObject>(data: T[], field: string, label: string = 'Label') {
  let liList = ''
  data.forEach((item, index) => {
    if (index < LIMIT)
      liList += `<li>${item[field]}</li>`
  })
  return `<h1 class='label-wrapper'>${label}</h1><ul>${liList}</ul>`
}