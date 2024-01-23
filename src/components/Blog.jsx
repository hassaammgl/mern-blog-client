import React from 'react'
import BlogContainer from './BlogContainer'

const Blog = () => {
  return (
    <div className='blog'>
        <h2 className='h2'>Welcome to DevLogs Blog!</h2>
        <div className="blogs">
          <BlogContainer />
          <BlogContainer />
          <BlogContainer />
        </div>
    </div>
  )
}

export default Blog