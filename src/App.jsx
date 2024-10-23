import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {

  // want to cook useState
  const [recipeQueue, setRecipeQueue] = useState([]);
  
  // preparing recipe useState
  const [preparingRecipe, setPreparingRecipe] = useState([]);

  // calculate time state
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
  
  // want to cook button functionalities starts from here
  const handleCookButton = cook =>{
    const isExist = recipeQueue.find(prev => prev.recipe_id === cook.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, cook]);
      console.log(recipeQueue)
    }else{
      alert('Already existed in the queue')
    }
  }
  // want to cook button functionalities ends from here

  // preparing button functionalities
  const removeRecipe = id =>{
    // find the recipe item you want to remove
    const deletedRecipe = recipeQueue.find(recipe=> recipe.recipe_id === id)
    // remove from want to cook table
    const updatedRecipe = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedRecipe)
    setPreparingRecipe([...preparingRecipe, deletedRecipe])
  }

  // calculate time and calories
  const calculateTimeAndCalories = (time, calorie)=>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }



  return (
    <div>
      {/* Header section */}
      <Header></Header>
      {/* Banner section */}
      <Banner></Banner>
      <div className="mt-6 w-3/5 mx-auto text-center space-y-2">
        <h3 className="text-3xl font-semibold">Our Recipes</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="flex gap-3 w-11/12 mx-auto">
        {/* Cards section */}
        <Cards handleCookButton={handleCookButton}></Cards>
        {/* Sidebar section */}
        <Sidebar removeRecipe={removeRecipe} recipeQueue={recipeQueue} preparingRecipe={preparingRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories} ></Sidebar>
      </div>
    </div>
  );
}

export default App;
