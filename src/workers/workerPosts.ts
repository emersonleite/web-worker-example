import { dataFetch } from '../services'
import { Posts } from '../interfaces'
import { url } from '../constants'


export default self.onmessage = async function () {
  const posts = await dataFetch<Posts[]>(url, 'posts')
  self.postMessage(posts)
}

