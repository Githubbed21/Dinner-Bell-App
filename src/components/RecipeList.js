import React from 'react'
import RecipeCollection from './RecipeCollection'
import RecipeForm from './RecipeForm'
import Navbar from './NavBar'
import { Container } from 'semantic-ui-react';


class RecipeList extends React.Component {

  state ={
    recipes: [],
    searchTerm: "A-Z"
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
}

render() {
  return (
    <Container>
      <h1>Recipe Nav</h1>
      <br />
      <RecipeForm />
      <br />
      <Navbar />
      <br />
      <RecipeCollection />
    </Container>
  )
}

      

export default RecipesList;