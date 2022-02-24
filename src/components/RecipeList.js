import React from 'react'
import RecipeCollection from './RecipeCollection'
import RecipeForm from './RecipeForm'
import Navbar from './NavBar'
import { Container } from 'semantic-ui-react'



class RecipeList extends React.Component {

  state = {
    recipes: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3001/Recipes')
    .then(res => res.json())
    .then((recipeArr) => {
      this.setState({
        recipes: recipeArr
      })
    })
  }

  changeSearchTerm = (theTermSearched) => {
    this.setState({
      searchTerm : theTermSearched
    })
  }

  addRecipe = (singleRecipeFrom) => {
    let theArrayOfRecipes = [singleRecipeFrom, ...this.state.recipes]
    this.setState({
      recipes: theArrayOfRecipes
    })
  }


render() {
  let theFilteredRecipeArray = this.state.recipes.filter((recipePojo) => {
    return recipePojo.name.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
  })


  return (
    <Container>
      <h1>Recipe Nav</h1>
      <br />
      <RecipeForm 
      addRecipe={this.addRecipe}
      />
      <br />
      <Navbar searchTerm ={this.state.searchTerm} changeSearchTerm = {this.changeSearchTerm}/>
      <br />
      <RecipeCollection recipes = {theFilteredRecipeArray}/>
    </Container>
    )
  }
}

export default RecipeList;