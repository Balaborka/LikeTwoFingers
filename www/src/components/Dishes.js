import React from "react"

class Dishes extends React.Component {
    constructor(props) {
        super(props) 
    }
    data = [
        {
            id: 0,
            name: "Buckweat",
            ingredients: [
                {
                    id: 0,
                    name: "Морковь",
                    count: "1 шт"
                },
                {
                    id: 1,
                    name: "Лук",
                    conut: "1 шт"
                },
                {
                    id: 2,
                    name: "Гречка",
                    count: "400 гр"
                },
                {
                    id: 3,
                    name: "Масло",
                    count: "30 мл"
                },
                {
                    id: 4,
                    name: "Соль",
                    count: ""
                },
                {
                    id: 5,
                    name: "Перец",
                    count: ""
                }
            ],
            steps: [
                {
                    id: 0,
                    text: "Нарежьте лук средней нарезкой."
                },
                {
                    id: 1,
                    text: "Натрите морковь на крупной терке."
                },
                {
                    id: 2,
                    text: "Налейте масло на сковородку."
                },                
                {
                    id: 3,
                    text: "Как только масло разогреется добавьте лук, перемешайте."
                },
                {
                    id: 4,
                    text: "Через 2 минуты добавьте морковь, перемешайте."
                },
                {
                    id: 5,
                    text: "Через 6 минут добавьте тушенку, перемешайте."
                },
                {
                    id: 6,
                    text: "Добавьте соль, перец, гречку, перемешайте."
                }
            ]
        },
        {
            id: 1,
            name: "Sweet potato"
        },
        {
            id: 2,
            name: "Soy sauce noodle"
        },
        {
            id: 3,
            name: "Mashrooms in the oven"
        },
        {
            id: 4,
            name: "Kimchi tige"
        },
    ]
    render() {
        const filteredData = this.data.filter((el) => {
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
                        <div className="dish mainItem" key={el.id}>
                            <span>{el.name}</span>
                        </div>
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