import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back title='Our Blogs' name='Check out the Latest Blog and getenriched with knowledge!'  cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
