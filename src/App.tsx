import React, { useEffect,useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import { Fooddetails } from './Models/Fooddetails';



function App() {
  const ApiKey:string = "1798c5f0f6e848fb8c06e7889af28791";
  const Url:string = "https://api.spoonacular.com/recipes/complexSearch";

   const [FoodData, setFoodData] = useState<Fooddetails[]>([]);
   const [query, setquery] = useState<string>("");

   useEffect(()=>{
    async function Food(){
      const data = await fetch(`${Url}?query=${query}&apiKey=${ApiKey}`)
      const output = await data.json();
        setFoodData(output.results)
        console.log(output.results)
    }
    Food();
},[query]);

  return (
    <div className="py-[40px]">
       
         <Search query={query} setquery={setquery}></Search>
         <FoodList FoodData = {FoodData} setFoodData={setFoodData}></FoodList>
      
    </div>
  );
}

export default App;
