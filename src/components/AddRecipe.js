import React, {Component} from "react";
import axios from "axios";

class AddRecipe extends Component{
  constructor(props) {
    super(props)
    this.state= {
      fullName: null

    }
  }

handleSubmit =(event) => {
  event.preventDefault()
  axios.post()
}
  handleInputChange = (event) => {
    event.preventDefault()
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    const {fullName} = this.state
    return (
      <div>
        <h1>New Recipe</h1>
        <p>Full name is:{fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p><input type ='text' placeholder="Your Name" name='fullName' onChange={handleInputChange}/></p>
          <p><input type='text' placeholder='New Recipe'/></p>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}



export default AddRecipe;