import React, {useEffect, useState} from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import Recipes from './components/Recipes';
// import Search from './components/Search';
// import RecipePage from './components/RecipePage'
// import RecipeCollection from './components/RecipeCollection';
// import RecipeForm from './components/RecipeForm';
// import RecipeCard from './components/RecipeCard';



const App = () => {

  const [recipes, setRecipes] = useState([]);

  // const recipeCard = recipes.map((recipeObj) => {
  //   return <RecipeCard title={recipeObj.title} meal={recipeObj.meal} directions={recipeObj.directions} image={recipeObj.image} />
  // })

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch('http://localhost:3001/Recipes')
    const data = await response.json();
    setRecipes(data);
  }
  

  return (
    <div className="App">
      <form className='RecipeForm'>
        <input className='Search-bar' type="text" />
        <button className="Search" type='submit'>Search</button>
      </form>
      {recipes.map(recipes => (
        <Recipes 
        title={recipes.title} 
        meal={recipes.meal}
        directions={recipes.directions}
        image={recipes.image}/>
      ))}
    </div>
  );
} 

export default App;
