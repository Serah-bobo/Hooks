import React from 'react'
import { useState } from 'react'

const initialLikes=[
    {id:1, user:'User 1', content:'post 1', likes:'10'},
    {id:2, user:'User 2', content:'post 2', likes:'15'},
    {id:3 , user:'User 3', content:'post 3', likes:'17'},

]
const Social = () => {
    const[posts, setPost]=useState(initialLikes);

    const handlePost= (postsId)=>{
        const updatePosts=posts.map((post)=>
            post.id===postsId ?{
                ...post, likes:post.likes+1
            } : post
            )
        setPost(updatePosts)
        
    }
  return (
    <div>
      <div className='flex'>
    {posts.map((post)=>
    <div key={post.id}>
        <h3>{post.user}</h3>
        <p>{post.content}</p>
        <p>{post.likes}</p>
        <button onClick={()=>
        handlePost(post.id)
    }>Like</button>
    </div>
    )}
      </div>
    </div>
  )
}

export default Social
