import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"
import Product from "../components/Product.js";
import { Routes, Route, Link } from "react-router-dom"

function ProductsPage() {
    let { mealId } = useParams();
    let currentMeal = Data.find(el => el.id == mealId);

    return (
        <div>
            <div className="headerButtons">
                <Link to={"../MealPage/" + currentMeal.id} key={currentMeal.id}>
                    <div className="leftButton leftHeaderButton headerButton backHeaderButton shadow">{"<"}</div>
                </Link>
                <div className="rightButton rightHeaderButton headerButton cookItHeaderButton shadow">Cook it!</div>
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