import React from 'react'
import { useAppSelector } from '../app/hooks'
import { postsReducer } from '../features/post/postSlice';

function Home() {
    const posts = useAppSelector((state: any) => { return state.postsReducer.posts.posts})
    console.log(posts)
  return (
    <div>
        {
           posts?.map((post:any) => {
                return <div className='grid justify-items-center mt-4 border rounded-md'>
                    <div className='mx-60'>
                    <h1 className='text-blue-600'>{post.title}</h1>
                    <p className=''>{post.body}</p>
                    </div>
                </div>
           })
        }
    </div>
  )
}

export default Home