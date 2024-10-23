const Card = ({ recipe,handleCookButton }) => {
  const { recipe_image,recipe_name,recipe_description,ingredients_items,cook_time,calories} = recipe;
  return (
    <div>
      <div className="card border">
        <figure className="p-4">
          <img className="md:h-48 w-full rounded-xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-sm text-gray-400 font-semibold">{recipe_description}</p>
          <div className="border my-2"></div>
          <div>
            <h4 className="text-lg font-bold mb-2">Ingredients: {ingredients_items.length}</h4>
            {
                
                ingredients_items.map(item=><li className="text-gray-500">{item}</li>)
            }
          </div>
          <div className="border my-2"></div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
            <i class="fa-regular fa-clock text-gray-600 font-semibold"></i>
             <p className="text-gray-600 font-semibold">{cook_time} mins</p>
            </div>
            <div className="flex items-center gap-2">
            <i class="fa-solid fa-fire-flame-curved text-gray-600 font-semibold"></i>
             <p className="text-gray-600 font-semibold">{calories} calories</p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button onClick={()=>handleCookButton(recipe)} className="btn bg-[#0BE58A] rounded-full font-semibold">Want To Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
