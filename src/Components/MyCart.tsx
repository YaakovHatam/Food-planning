
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Food } from "../Interfaces/Fast.Food.Interface";
import { store } from "../store/store";
import { removeItemAction } from "../store/cart.actions";

function MyCart() {
    const [CartArr, setCartArr] = useState<Food[]>(store.getState().cart);

    useEffect(() => {
        const unsub = store.subscribe(() => setCartArr(store.getState().cart));

        return () => unsub();
    }, [])


    const handleClick = (id: number) => {
        store.dispatch({
            type: removeItemAction,
            payload: id
        })
    }
    return (
        <Table striped bordered hover dir="rtl">
            <thead>
                <tr>
                    <th>שם המוצר</th>
                    <th>שומנים</th>
                    <th>חלבונים</th>
                    <th>פחמימות</th>
                    <th>סה"כ קלוריות</th>
                    <th> מחק מהסל</th>
                </tr>
            </thead>
            <tbody>
                {CartArr.map((foodItem, i) => <tr key={i}>
                    <td>{foodItem.name}</td>
                    <td>{foodItem.fats}</td>
                    <td>{foodItem.proteins}</td>
                    <td>{foodItem.carbohydrates}</td>
                    <td>{foodItem.totalCalories}</td>
                    <td><button onClick={() => {
                        handleClick(i);
                    }
                    }
                    >מחק </button></td>
                </tr>)}
            </tbody>
        </Table >
    )
}

export default MyCart
