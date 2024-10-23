const Sidebar = ({
  recipeQueue,
  removeRecipe,
  preparingRecipe,
  calculateTimeAndCalories,
  totalTime,
  totalCalories
}) => {
  return (
    <div className="w-[35%] mt-6 mb-4 border rounded-xl">
      <h2 className="p-3 text-xl font-bold text-center">
        Want To Cook:{recipeQueue.length}
      </h2>
      <div className="overflow-x-auto">
        {/* want to cook table */}
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.cook_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      removeRecipe(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.cook_time,
                        recipe.calories
                      );
                    }}
                    className="bg-[#0BE58A] py-1 px-2 rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* recipe preparing table */}

        <div className="mt-6">
          <h2 className="p-3 text-xl font-bold text-center">
            Currently Cooking:{preparingRecipe.length}
          </h2>

          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparingRecipe.map((recipe, index) => (
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.cook_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}

              <tr>
                <td></td>
                <td></td>
                <td>Total Time: {totalTime} min</td>
                <td>Total Calorie: {totalCalories}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
