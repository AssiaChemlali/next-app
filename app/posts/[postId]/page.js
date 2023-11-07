import React, { Suspense } from 'react'
import PostDetails from '@/app/components/postDetails'
const page = async({params}) => {
  const id =params.postId

    const loading=(
      <div>
        <h1>Loading .....</h1>
      </div>
    )
         
    

  return (
    <div className='posts'>
       <h1>list of posts</h1>
      <Suspense fallback={loading}>
        <PostDetails id={id}/>
      </Suspense>
    </div>
  )
}

export default page