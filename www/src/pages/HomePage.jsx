import React from "react"
import Dishes from "../components/Dishes"

class HomePage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            searchText: ""
        }
    }

    render() {
        return (
            <div className="activeForm">
                <input 
                    className="mainItem" 
                    placeholder="Search" 
                    onChange={e => this.setState({ searchText: e.target.value.toLowerCase() })}/>
                <main>
                    <Dishes searchBy={this.state.searchText} />
                </main>
            </div>
        )
    }
}

export default HomePage