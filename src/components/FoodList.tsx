 import { Fooddetails } from "../Models/Fooddetails";
import FoodItem from "./FoodItem";

 interface Props{
    FoodData: Fooddetails[],
    setFoodData:React.Dispatch<React.SetStateAction<Fooddetails[]>>
 }
 
 const FoodList: React.FC<Props> = ({FoodData, setFoodData}) => {
    return ( 
        <div className="max-w-[1400px] mx-auto pt-[20px]">
            <h1 className="text-5xl py-[30px] text-white font-bold underline">The Food List</h1>
            <div className="grid grid-cols-3 gap-6 ">
                {FoodData.length > 0 ? FoodData.map((item)=>(
                    
                   <FoodItem key={item.id} item = {item}></FoodItem> 
                )):<p className="text-xl text-white">Loading....</p>}

            </div>
        </div>
     );
 }
  
 export default FoodList;