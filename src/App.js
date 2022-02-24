import React from 'react';
// import Home from './components/Home';
import NavBar from './components/NavBar';
import RecipesList from './components/RecipeList';
import RecipeCollection from './components/RecipeCollection';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';
// import RecipeCard from './components/RecipeCard';

import './App.css';


function App() {
  return (
    <div className="App">
        <RecipesList />
        <RecipeCollection />
        <RecipeForm />
        <RecipeCard />
        {/* <Home /> */}
        {/* <NavBar /> */}
        
        <input type="text" placeholder="Search Meals"/>
    </div>
  );
} 

export default App;
