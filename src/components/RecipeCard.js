import React from "react";
import { Card } from 'semantic-ui-react'

class RecipeCard extends React.Component {
  render() {
    let {title, meal} = this.props.recipe 
    let {image} = this.props.recipe.image
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="I was hungry" src={image} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
          <div className="extra content">
          </div>
            <span>
              {meal}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default RecipeCard