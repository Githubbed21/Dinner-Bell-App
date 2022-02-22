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
    const {title, meal, directions} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type = "text" name= "title" value={title} onChange={this.changeHandler} placeholder="Your title"/>
          </div>
          <div>
            <input type = "text" name= "meal" value={meal}  onChange={this.changeHandler} placeholder="Name of Meal"/>
          </div>
          <div>
            <input type = "text" name= "directions" value={directions}  onChange={this.changeHandler} placeholder="How is it made"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm