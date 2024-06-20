import { useLoaderData } from "react-router-dom"
import { type Blog } from "../Interfaces/blogs"

export function Blog() {
  const data = useLoaderData()


  return (
    <>
      <h1 className='text-4xl font-semibold'>Blog</h1>
      <ul>
        {
          data.map((post: Blog) => (
            <li key={post.id} className='my-4'>
              <h2 className='text-2xl font-semibold'>{post.title}</h2>
              <p className='text-lg'>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </>
  )
}

