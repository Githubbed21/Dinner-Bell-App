import React from 'react';
// import Home from './components/Home';
// import NavBar from './components/NavBar';
import RecipesList from './components/RecipeList';
import RecipeCollection from './components/RecipeCollection';
import RecipeCard from './components/RecipeCard';
// import PostForm from './components/PostForm';
// import AddRecipe from './components/AddRecipe';
import './App.css';



function App() {
  return (
    <div className="App">
        <RecipesList />
        <RecipeCollection />
        {/* <Home /> */}
        {/* <PostForm /> */}
        {/* <NavBar /> */}
        {/* <AddRecipe/> */}
        <input type="text" placeholder="Search Meals"/>
    </div>
  );
} 

export default App;
