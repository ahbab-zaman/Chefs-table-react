import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({handleCookButton}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./Images/recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="w-[65%] mt-6 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Card handleCookButton={handleCookButton} recipe={recipe}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
