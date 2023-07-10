import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our Features' subtitle='Discover the power of conscious living. CarbonSense: Empowering you to make a difference.' />
          <FeaturedCard />
          <div className="button-container ">
          <button className="Learn-more-btn">Read More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
