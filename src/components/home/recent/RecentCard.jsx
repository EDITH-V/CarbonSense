import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#ff98001a" : "#25b5791a ", color: category === "For Sale" ? "#ff9800" : "#25b579" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
