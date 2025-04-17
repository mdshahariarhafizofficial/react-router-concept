import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Mobile from './Components/Mobile/Mobile.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import Users from './Components/Users/Users.jsx'
import Todos from './Components/Todos/Todos.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/Post Details/PostDetails.jsx'
import Comments from './Components/Comments/Comments.jsx'
import CommentsDetails from './Components/Comments/CommentsDetails.jsx'

const todosFetch = fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())

const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      { index: true, Component: Mobile },
      { path: 'about', Component: About},
      { path: 'contact', Component: Contact},
      { path: 'app', Component: App },
      { path: 'blogs', Component: Blogs},
      { path: 'users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users 
      },
      {
        path: 'todos',
        element: <Suspense fallback={<h3>Loading....</h3>}>
          <Todos todosFetch = {todosFetch}></Todos>
        </Suspense>
      },
      {
        path: 'posts',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        
        Component: PostDetails
      },
      {
        path: 'comments',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        Component: Comments
      },
      {
        path: 'Comments/:commentId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        Component: CommentsDetails
      },
    ]
  },
  {
    path: '*',
    element: <h1>404! not found</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
