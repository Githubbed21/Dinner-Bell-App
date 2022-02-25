import React from 'react';
import Search from './components/Search';
// import RecipePage from './components/RecipePage'
// import RecipeCollection from './components/RecipeCollection';
import RecipeForm from './components/RecipeForm';
// import RecipeCard from './components/RecipeCard';

import './App.css';


function App() {
  return (
    <div className="App">
        {/* <RecipePage /> */}
        {/* <RecipeCollection /> */}
        <RecipeForm />
        {/* <RecipeCard /> */}
        <Search />
        
        <input type="text" placeholder="Search Meals"/>
    </div>
  );
} 

export default App;
