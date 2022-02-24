import React from 'react'
import { Card } from 'semantic-ui-react'


class RecipeCollection extends React.Component {

  returnsArrayOfComponents = () => {
    return this.props.recipes.map((recipePOJO) => {
      return <RecipeCard />
    })
  }


  render() {
    let arrayOfComponents = this.props.recipes.map((recipePOJO) => {
      return <RecipeCard 
      key={recipePOJO.id}
      recipe={recipePOJO}
      />
    })
    return (
      <Card.Group itemsPerRow={4}>
        { arrayOfComponents }
      </Card.Group>
    )
  }
}

export default RecipeCollection