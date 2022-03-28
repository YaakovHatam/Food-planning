
import { useContext,  useState } from "react"
import { MyCartContext } from "../context/Cart-context";
import { Table } from "react-bootstrap"
import { Food } from "../Interfaces/Fast.Food.Interface";

function MyCart() {
  const Cart = useContext(MyCartContext);
  const [CartArr, setCartArr] = useState<Food[]>(Cart.cart);
  const handleClick = (id: number) => {
    Cart.removeItem(id)
    setCartArr([...Cart.cart]);
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
            handleClick(foodItem.id);
          }
          }
          >מחק </button></td>
        </tr>)}
      </tbody>
    </Table >
  )
}

export default MyCart
