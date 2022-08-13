import React from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"
import { Routes, Route, Link } from "react-router-dom"

function MealPage() {
    let { mealId } = useParams();
    let currentMeal = Data.find(el => el.id == mealId);
    return (
        <div>
            <div className="headerButtons">
                <Link to={"/"}>
                    <div className="leftButton leftHeaderButton headerButton backHeaderButton shadow">{"<"}</div>
                </Link>
                <div className="rightButton rightHeaderButton headerButton removeHeaderButton shadow">{"-"}</div>
            </div>
            <div className="activeForm">
                <div className="mealNameLabel">{currentMeal.name}</div>
                <div className="productsCookItButtons">
                    <Link to={"/ProductsPage/" + currentMeal.id} key={currentMeal.id}>
                        <div className="itemButton leftButton productsButton shadow">
                            <span>Products</span>
                        </div>
                    </Link>
                    <div className="itemButton rightButton cookItButton shadow">
                        <span>Cook it!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealPage