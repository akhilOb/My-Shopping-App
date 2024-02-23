import React from 'react'

function ImageWrapper({imageUrl}) {
  return (
    <article className='image-wrapper'>
       <img src={imageUrl} alt="" className='w-100 h-100 object-fit-cover object-poistion-top' />
    </article>
  )
}

export default ImageWrapper