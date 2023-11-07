import React from 'react'
import Link from 'next/link'
 const  page = async() => {
  const response= await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate:120,
    },
  })
  const data=await response.json()
    

  const postsList=data.map((post)=>{
    return(
    <Link href={`/posts/${post.id}`}>
      <div className='item'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

      </div>
    </Link>
     
    )
  })
  return (
    <div className='posts'>
       {postsList}
    </div>
    

  )
}

export default page
