import React from "react"
import { useParams } from "react-router-dom"
import Data from "../data/Dishes.json"
import { Routes, Route, Link } from "react-router-dom"
import style from "./Header.module.css"
import { useState, useEffect } from "react"

function StepPage() {
    let { mealId } = useParams();
    let currentMeal = Data.find(el => el.id == mealId);
    let [currentStep, setCurrentStep] = useState(0);  
    const [isFirstStep, setIsFirstStep] = useState(true);
    const [isLastStep, setIsLastStep] = useState(false);

    const handleLeftHeaderClick = (e) => {
        setIsLastStep(false);
        setCurrentStep(currentStep => currentStep - 1)
        if(currentStep == 1) {
            setIsFirstStep(true);
        }
    }
    const handleRightHeaderClick = (e) => {
        setIsFirstStep(false);
        setCurrentStep(currentStep => currentStep + 1)
        if(currentStep == currentMeal.steps.length - 2) {
            setIsLastStep(true);
        }
    }

    return (
        <div>
            <div className={`${style.headerButtons}`}>
                <button className={isFirstStep ? `${style.collapsedButton}` : `leftButton ${style.leftHeaderButton} ${style.headerButton} shadow`} 
                    onClick={handleLeftHeaderClick}>
                        {"<"}
                </button>
                <button className={isLastStep ? `${style.collapsedButton}` : `rightButton ${style.rightHeaderButton} ${style.headerButton} shadow`}
                    onClick={handleRightHeaderClick}>
                        {">"}
                </button>
            </div>
            <div className="activeForm">
                <div className="mealNameLabel">{currentMeal.name}</div>
                <div className="productsCookItButtons stepTextArea">
                    <span>{currentMeal.steps[currentStep].text}</span>
                </div>
            </div>
            <Link to={"../"}>
                <button className="itemButton finishButton leftButton shadow">Finish</button>
            </Link>
        </div>
    )
}

export default StepPage