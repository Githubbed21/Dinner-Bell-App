import React from 'react'
import RecipeCard from './RecipeCard'
import { Card } from 'semantic-ui-react'

class RecipeCollection extends React.Component {
  render() {
    let arrayOfComponents = this.props.recipes.map((recipePOJO) => {
      return <RecipeCard />
    })
    return(
      <Card.Group itemsPerRow={3}>
        <h1>So Much Good Food!</h1>
      </Card.Group>
    )
  }
}

export default RecipeCollection