import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"
import Product from "../components/Product.js";
import { Routes, Route, Link } from "react-router-dom"
import style from "./Header.module.css"

function ProductsPage() {
    let { mealId } = useParams();
    let currentMeal = Data.find(el => el.id == mealId);

    return (
        <div>
            <div className={`${style.headerButtons}`}>
                <Link to={"../MealPage/" + currentMeal.id}>
                    <button className={`leftButton ${style.leftHeaderButton} ${style.headerButton} shadow`}>{"<"}</button>
                </Link>
                <Link to={"../StepPage/" + currentMeal.id}>
                    <button className={`rightButton ${style.rightHeaderButton} ${style.headerButton} ${style.cookItHeaderButton} shadow`}>Cook it!</button>
                </Link>
            </div>
            <div className="activeForm">
                <div className="mealNameLabel mealNameLabelOnProductsPage">{currentMeal.name}</div>
                <div className="productsList">
                    {currentMeal.ingredients.map((el) => (
                        <Product product={el} key={el.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage