import { Fooddetails } from "../Models/Fooddetails";

interface Props{
    item: Fooddetails
}

const FoodItem:React.FC<Props> = ({item}) => {
    return ( 
            <div key={item.id} className="py-[20px] w-[380px] shadow-lg shadow-blue-200/15">
                <img src={item.image} className="w-[100%] object-cover" alt="Food list" />
                <h3 className="text-white text-xl py-4 text-center" >
                {item.title}
                </h3>
                <div className="flex justify-center mb-3">
                    <button className="bg-blue-300/80 px-6 py-2 font-bold text-gray-900 ">View Recipe</button>
                </div>
          </div>
       
     );
}
 
export default FoodItem;