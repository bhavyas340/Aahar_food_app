
import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";


const requestConfig= {};
export default function Meals() {

     const {data: loadedMeals,
         isLoding,
          error
        }=useHttp('http://localhost:3000/meals',requestConfig, [])

        console.log(loadedMeals);
        if(isLoding){
            return <p className="center">Fetching meals...</p>
        }

        if(error){
            console.log("error occuredffff")
            return <Error title="Failed to fetch meals" message={error}/>
        }


        // if(!data){
        //     return <p>No meals found yet</p>
        // }
    
    return (
    <ul id="meals">
      {loadedMeals.map(meal => <MealItem key={meal.id} meal={meal}/>)}
    </ul>
  )
}
