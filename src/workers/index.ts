import WorkerPosts from './workerPosts?worker'
import WorkerComments from './workerComments?worker'
import WorkerAlbums from './workerAlbums?worker'
import WorkerPhotos from './workerPhotos?worker'
import WorkerTodos from './workerTodos?worker'

export const workerPosts = new WorkerPosts()
export const workerComments = new WorkerComments()
export const workerAlbums = new WorkerAlbums()
export const workerPhotos = new WorkerPhotos()
export const workerTodos = new WorkerTodos()