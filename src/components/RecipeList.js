import React from 'react'

const RecipesList = ({Recipes, title, HandleLike}) => {
  return (
    <div className='recipe-list'>
      <h2>{ title }</h2>
      {Recipes.map((Recipes) => 
      <div className='recipe-preview' key = {Recipes.id}>
        <h2>{ Recipes.title }</h2>
        <p>{ Recipes.directions}</p>
        <button onClick={() => HandleLike(Recipes.id)}>Like Recipe!</button>
        </div>
        )}
    </div>
  );
}

      

export default RecipesList;