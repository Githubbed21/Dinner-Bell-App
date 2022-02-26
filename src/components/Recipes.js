import React from 'react'

const Recipes = ({title, directions, meal, image}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{directions}</h2>
      <p>{meal}</p>
      <img src={image} alt='😋' />
    </div>
  )
}


export default Recipes;