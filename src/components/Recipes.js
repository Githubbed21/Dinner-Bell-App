import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Recipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/Recipes')
    .then(res => {
      console.log(res);
    })
  
  })
  return (
    <div>
      <ul>
        {
          recipes.map(post => <li key={recipes.id}>{recipes.meal} {recipes.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Recipes