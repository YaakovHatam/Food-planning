import { FastFood } from "../Interfaces/Fast.Food.Interface"
import Search from "./Search"

const Home = (props:{dbArr:FastFood[],setMenusArr:any}) => {
  return (
    <div>
      <Search dbArr={props.dbArr} setMenusArr={props.setMenusArr}/>
    </div>
  )
}

export default Home