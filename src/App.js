import React from 'react';
// import NavBar from './components/NavBar';
import Recipes from './components/Recipes';
import PostForm from './components/PostForm';
// import AddRecipe from './components/AddRecipe';
import './App.css';



function App() {
  return (
    <div className="App">
        <Recipes />
        <PostForm />
        <input type="text" placeholder="Search Meals"/>
    </div>
  );
} 

export default App;
