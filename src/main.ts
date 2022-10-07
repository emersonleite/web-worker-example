import './styles/style.scss'
import { dataFetch } from './services'
import { url } from './constants'
import { Posts, Comments, Albums, Photos, Todos } from './interfaces'
import { workerPosts, workerComments, workerAlbums, workerPhotos, workerTodos } from './workers/index'
import { getTimeElapsed, renderPostsElements } from './utils'
import { fetchAction, clearAction, fetchWorkerAction, timeWrapper } from './components'

fetchWorkerAction?.addEventListener('click', async (event) => {
  event.preventDefault()

  performance.mark("marker-3");

  workerPosts.postMessage('message')
  workerComments.postMessage('message')
  workerAlbums.postMessage('message')
  workerPhotos.postMessage('message')
  workerTodos.postMessage('message')


  workerPosts.addEventListener('message', function (e) {
    const posts = e.data
    document.querySelector<HTMLDivElement>('#posts')!.innerHTML = renderPostsElements<Posts>(posts, 'body', 'Posts')
  });

  workerComments.addEventListener('message', function (e) {
    const comments = e.data
    document.querySelector<HTMLDivElement>('#comments')!.innerHTML = renderPostsElements<Comments>(comments, 'body', 'Comments')
  });

  workerAlbums.addEventListener('message', function (e) {
    const albums = e.data
    document.querySelector<HTMLDivElement>('#albums')!.innerHTML = renderPostsElements<Albums>(albums, 'title', 'Albums')
  });

  workerPhotos.addEventListener('message', function (e) {
    const photos = e.data
    document.querySelector<HTMLDivElement>('#photos')!.innerHTML = renderPostsElements<Photos>(photos, 'title', 'Photos')
  });

  workerTodos.addEventListener('message', function (e) {
    const todos = e.data
    document.querySelector<HTMLDivElement>('#todos')!.innerHTML = renderPostsElements<Todos>(todos, 'title', 'Todos')
  });

  performance.mark("marker-4");
  performance.measure("3 to 4", "marker-3", "marker-4");
  let { duration } = performance.getEntriesByType("measure")[0];

  if (timeWrapper)
    getTimeElapsed(duration, timeWrapper)
})


fetchAction?.addEventListener('click', async (event) => {
  performance.mark("marker-1");

  event.preventDefault()

  const posts = await dataFetch<Posts[]>(url, 'posts')
  document.querySelector<HTMLDivElement>('#posts')!.innerHTML = renderPostsElements<Posts>(posts, 'body', 'Posts')
  const comments = await dataFetch<Comments[]>(url, 'comments')
  document.querySelector<HTMLDivElement>('#comments')!.innerHTML = renderPostsElements<Comments>(comments, 'body', "Comments")
  const albums = await dataFetch<Albums[]>(url, 'albums')

  performance.mark("marker-2.1");
  performance.measure("1 to 2.1", "marker-1", "marker-2.1");
  let { duration: duration1 } = performance.getEntriesByType("measure")[0];
  if (timeWrapper)
    getTimeElapsed(duration1, timeWrapper)

  document.querySelector<HTMLDivElement>('#albums')!.innerHTML = renderPostsElements<Albums>(albums, 'title', "Albums")
  const photos = await dataFetch<Photos[]>(url, 'photos')
  document.querySelector<HTMLDivElement>('#photos')!.innerHTML = renderPostsElements<Photos>(photos, 'title', 'Photos')
  const todos = await dataFetch<Todos[]>(url, 'todos')
  document.querySelector<HTMLDivElement>('#todos')!.innerHTML = renderPostsElements<Todos>(todos, 'title', 'Todos')

  performance.mark("marker-2");
  performance.measure("1 to 2", "marker-1", "marker-2");
  let { duration: duration2 } = performance.getEntriesByType("measure")[1];
  if (timeWrapper)
    getTimeElapsed(duration2, timeWrapper)

  performance.clearMarks()
  performance.clearMeasures()
})

clearAction?.addEventListener('click', (event) => {
  event.preventDefault()
  location.reload()
})

