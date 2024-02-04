import React from 'react'

function ExampleCarouselImage({imageSource}) {
  return (
    <>
        <img
        className="d-block"
        src={imageSource}
        alt={`${imageSource}`}
      />
    </>
  )
}

export default ExampleCarouselImage