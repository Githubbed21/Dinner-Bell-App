import React from "react";
import { Form } from 'semantic-ui-react'

class RecipeForm extends React.Component {

  state = {
    title:"",
    meal:"",
    directions:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let theObjectPosted = {
      title : this.state.title,
      meal : this.state.meal,
      directions : this.state.directions
    }
  
  fetch("http://localhost:3001/Recipes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(theObjectPosted)
  })
    .then(res => res.json())
    .then((newRecipe) => {
      this.props.addOnePokemon(newRecipe)
    })

  }

render () {
  return (
    <div>
      <h3>Add a Recipe!</h3>
      <Form onSubmit = { this.handleSubmit }>
      <Form.Group widths = "equal">
        <Form.Input fluid label ="title" value={this.state.title} onChange={this.changeHandler} placeholder="Your title" />
        <Form.Input fluid label = "meal" value={this.state.meal}  onChange={this.changeHandler} placeholder="Name of Meal"/>
        <Form.Input fluid label = "directions" value={this.state.directions}  onChange={this.changeHandler} placeholder="How is it made"/>
      </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
    )
  }
}





export default RecipeForm;