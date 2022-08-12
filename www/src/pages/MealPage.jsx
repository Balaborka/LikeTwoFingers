import React from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"

function MealPage() {
    let { mealName } = useParams();
    let currentMeal = Data.find(el => el.name == mealName);
    return (
        <div>
            <div>{mealName}</div>
            <div>{currentMeal.id}</div>
        </div>
    )
}

export default MealPage