import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "React landing page",
    desc: " Lorem Ipsum has been the industry'sunknown printeleap ectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

function Banner() {
  return (
    <div className='banner-bg'>
      <div className='container'>
        <div className='banner-con'>
            <div className='banner-text'>
                <h1>{bannerData.title}</h1>
                <p>
                    {bannerData.desc}
                </p>
                <a href='#' className='banner-btn'>Learn More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
