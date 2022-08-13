import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import HomePage from './pages/HomePage'
import MealPage from './pages/MealPage'
import ProductsPage from './pages/ProductsPage'
// import NotFoundPage from './pages/NotFoundPage'
  
function App() {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/MealPage/:mealId" element={ <MealPage /> } />
            <Route path="/ProductsPage/:mealId" element={ <ProductsPage /> } />
            {/* <Route path="*" element={ <NotFoundPage /> } /> */}
        </Routes>
    )
}

export default App