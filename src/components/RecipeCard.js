import React from "react";
import {Card} from 'semantic-ui-react'


class RecipeCard extends React.Component {

  state={
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let {name, meal, directions} = this.props.recipes
    let ImageUrl = this.props.recipes.image
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="I was hungry" src={this.state.clicked ? ImageUrl : null } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          <div className="header">{meal}</div>
          <div className="body">{directions}</div>
          </div>
        </div>
      </Card>
    )
  }
}

  export default RecipeCard