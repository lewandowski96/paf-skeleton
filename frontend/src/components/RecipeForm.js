import React from 'react'

const RecipeForm = () => {
  return (
    <div className="recipe-form-container"> {/* Add class to container */}
        <h1>Recipe Form</h1>
        <div className='form-name'>
        <form className="recipe-form">
          <label htmlFor="recipeName">Recipe Name:</label>
          <input type="text" id="recipeName" name="recipeName" required />
          <label htmlFor="recipeDescription">Recipe Description:</label>
          <input type="text" id="recipeDescription" name="recipeDescription" required />
          <label htmlFor="recipeIngredients" className='Recipe-Ingredients'>Recipe Ingredients:</label>
          <input type="text" id="recipeIngredients" name="recipeIngredients" required />
          <label htmlFor="imgvid">Image</label>
          <input type="file" id="imgvid" name="imageVid" required />
          <button type="submit">Submit</button>
          
        </form>
        </div>
    </div>
  )
}

export default RecipeForm