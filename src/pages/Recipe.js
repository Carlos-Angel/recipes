import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import mealdb from '../mealdb-api';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeInstructions from '../components/RecipeInstructions';

export default function Recipe({ match }) {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mealdb
      .getRecipe(match.params.recipeId)
      .then((recipe) => setRecipe(recipe))
      .catch(() => setRecipe(null))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div className='message'>Cargando...</div>;
  } else if (recipe === null) {
    return <div className='message'>Hubo un problema :(</div>;
  }

  return (
    <div className='Recipe'>
      <Helmet>
        <title>{recipe.name}</title>
      </Helmet>

      <div
        className='hero'
        style={{ backgroundImage: `url(${recipe.thumbnail})` }}
      />

      <div className='title'>
        <div className='info'>
          <h1>{recipe.name}</h1>
          <p>{recipe.origin}</p>
        </div>
        <div />
      </div>

      <RecipeIngredients ingredients={recipe.ingredients} />

      <RecipeInstructions instructions={recipe.instructions} />
    </div>
  );
}
