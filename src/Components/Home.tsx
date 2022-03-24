import { FastFood } from "../Interfaces/Fast.Food.Interface"
import Search from "./Search"

const Home = (props:{dbArr:FastFood[],setMenusArr:any}) => {
  return (
    <div className="container" style={{direction:"rtl"}}>
      <h2 className="text-center">חיפוש תפריט בהתאמה אישית</h2>
      <h6 className="text-danger text-center">(לפי 100 גרם)</h6>
      <Search dbArr={props.dbArr} setMenusArr={props.setMenusArr}/>
    </div>
  )
}

export default Home