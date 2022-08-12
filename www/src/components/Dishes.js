import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import MealPage from '../pages/MealPage'
import Data from "../data/Dishes.json"

class Dishes extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        const filteredData = Data.filter((el) => {
            if (this.props.searchBy === '') {
                return el;
            }
            else {
                return el.name.toLowerCase().includes(this.props.searchBy)
            }
        })

        if(filteredData.length > 0) {
            return (
                <div>
                    {filteredData.map((el) => (
                        <Link to={"/MealPage/" + el.name} key={el.id}>
                            <div className="dish mainItem" key={el.id}>
                                <span key={el.id}>{el.name}</span>
                            </div>
                        </Link>   
                    ))}
                </div>
            )
        }
        else {
            return (
                <div>
                    <span>Oops. There are no meals</span>
                </div>
            )
        }
    }
}

export default Dishes