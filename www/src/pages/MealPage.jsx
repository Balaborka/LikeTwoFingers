import React from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"
import { Routes, Route, Link } from "react-router-dom"
import style from "./Header.module.css"

function MealPage() {
    let { mealId } = useParams();
    let currentMeal = Data.find(el => el.id == mealId);
    return (
        <div>
            <div className={`${style.headerButtons}`}>
                <Link to={"/"}>
                    <button className={`leftButton ${style.leftHeaderButton} ${style.headerButton} shadow`}>{"<"}</button>
                </Link>
                {/* <button className={`rightButton ${style.rightHeaderButton} ${style.headerButton} shadow`}>{"-"}</button> */}
            </div>
            <div className="activeForm">
                <div className="mealNameLabel">{currentMeal.name}</div>
                <div className="productsCookItButtons">
                    <Link to={"../ProductsPage/" + currentMeal.id}>
                        <button className="itemButton leftButton productsButton shadow">
                            <span>Products</span>
                        </button>
                    </Link>
                    <Link to={"../StepPage/" + currentMeal.id}>
                        <button className="itemButton rightButton cookItButton shadow">
                            <span>Cook it!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MealPage