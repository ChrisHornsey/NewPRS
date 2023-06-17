import React from "react";
import Recipe from "../Recipe/Recipe";
import { Recipes } from "../../Data/Data";

export default function RecipeList () {

    return (
        <div className = "RecipeList">
                {Recipes.map(recipe => <Recipe key = {recipe.id} recipe={recipe}/>)}
            </div>
    )

}