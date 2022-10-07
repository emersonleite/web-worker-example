import { dataFetch } from '../services'
import { Photos } from '../interfaces'
import { url } from '../constants'


export default self.onmessage = async function () {
  const photos = await dataFetch<Photos[]>(url, 'photos')
  self.postMessage(photos)
}

