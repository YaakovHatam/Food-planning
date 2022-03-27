import { Table } from "react-bootstrap"
import { SearchResultsProps } from "../Interfaces/components-interfaces/SearchResults.props"

const SearchResults = (props: SearchResultsProps) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>שם</th>
                    <th>שומנים</th>
                    <th>חלבונים</th>
                    <th>פחמימות</th>
                    <th>סה"כ קלוריות</th>
                    <th>הוסף לסל</th>
                </tr>
            </thead>
            <tbody>
                {props.foodItems.map((foodItem,i) => <tr key={i}>
                    <td>{foodItem.name}</td>
                    <td>{foodItem.fats}</td>
                    <td>{foodItem.proteins}</td>
                    <td>{foodItem.carbohydrates}</td>
                    <td>{foodItem.totalCalories}</td>
                    <td>button - {foodItem.id}</td>
                </tr>)}
            </tbody>
        </Table >
    )
}

export default SearchResults