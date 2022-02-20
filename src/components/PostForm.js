import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
   constructor(props) {
     super(props)

     this.state = {
       name: '',
       meal:'',
       ingredients:''

     }
   }

   changeHandler = (e) =>{
     this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = e => {
     e.preventDefault()
     console.log(this.state);
   }

  render() {
    const {name, meal, ingredients} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type = "text" name= "name" value={name} onChange={this.changeHandler} placeholder="Name"/>
          </div>
          <div>
            <input type = "text" name= "meal" value={meal}  onChange={this.changeHandler} placeholder="name of dish"/>
          </div>
          <div>
            <input type = "text" name= "ingredients" value={ingredients}  onChange={this.changeHandler} placeholder="how is it made"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm