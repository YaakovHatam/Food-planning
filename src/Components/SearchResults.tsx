import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { MyCartContext } from "../context/Cart-context";
import { SearchResultsProps } from "../Interfaces/components-interfaces/SearchResults.props";
import { api } from "../services/db.service";
import { addItemAction } from "../store/cart.actions";
import { store } from "../store/store";

const SearchResults = (props: SearchResultsProps) => {
    const cart = useContext(MyCartContext);
    const handleClick = (id: number) => {
        api.searchFoodById(id).then((res) => {
            cart.AddItem(res);

            store.dispatch({
                type: addItemAction,
                payload: res
            });
        });
    };
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
                {props.foodItems.map((foodItem, i) => (
                    <tr key={i}>
                        <td>{foodItem.name}</td>
                        <td>{foodItem.fats}</td>
                        <td>{foodItem.proteins}</td>
                        <td>{foodItem.carbohydrates}</td>
                        <td>{foodItem.totalCalories}</td>
                        <td>
                            <Button variant="dark" onClick={() => handleClick(foodItem.id)}>
                                הוסף לסל
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default SearchResults;
