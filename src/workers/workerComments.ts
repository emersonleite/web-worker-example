import { dataFetch } from '../services'
import { Comments } from '../interfaces'
import { url } from '../constants'


export default self.onmessage = async function () {
  const comments = await dataFetch<Comments[]>(url, 'comments')
  self.postMessage(comments)
}

