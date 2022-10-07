import { dataFetch } from '../services'
import { Todos } from '../interfaces'
import { url } from '../constants'


export default self.onmessage = async function () {
  const todos = await dataFetch<Todos[]>(url, 'todos')
  self.postMessage(todos)
}

