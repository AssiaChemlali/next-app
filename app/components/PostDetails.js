import React from 'react'

const postDetails = async({id}) => {

  const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post=await response.json()
  return (
    <div className='posts'>
      <h1>{post.title} </h1>
     <p>{post.body}</p>
    </div>
  )
}

export default postDetails