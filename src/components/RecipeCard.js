import React from "react";
import {Card} from 'semantic-ui-react'


class RecipeCard extends React.Component {

  state={
    clicked: false
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let {title, meal, directions} = this.props.recipe 
    let {image} = this.props.recipe.image
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="I was hungry" src={this.state.image} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
          <div className="header">{meal}</div>
          <div className="body">{directions}</div>
          </div>
        </div>
      </Card>
    )
  }
}

  export default RecipeCard