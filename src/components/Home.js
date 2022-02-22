import React, { useState, useEffect } from 'react'


const Home = () => {
  const [Recipes, setRecipes] = useState(null)

  const handleLike = (id) => {
    const newRecipe = Recipes.filter(Recipe => Recipe.id !== id);
    setRecipes(newRecipe);
  }

  useEffect(() => {
    fetch(' http://localhost:3001/Recipes')
      .then(res => {
        return res.json();
      })
      .then(Data => {
        setRecipes(Data)
      }) 
  }, []);

  return (
    <div className='home'>
      {Recipes && <recipes Recipes={Recipes} title="All Recipes!" handleLike={handleLike} />}
    </div>
  )
}

export default Home;