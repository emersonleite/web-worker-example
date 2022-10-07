import { dataFetch } from '../services'
import { Albums } from '../interfaces'
import { url } from '../constants'


export default self.onmessage = async function () {
  const albums = await dataFetch<Albums[]>(url, 'albums')
  self.postMessage(albums)
}

