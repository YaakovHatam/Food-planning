import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { AiOutlineReload} from "react-icons/ai";
import { useEffect, useState } from "react"
import CardHeader from "react-bootstrap/esm/CardHeader";
import { api } from "../services/db.service";

const RandomFoodCard = () => {
    const [randomRecipe,setRandomRecipe]= useState<any>({});
    useEffect(()=> {refrashRandomRecipe()},[]);
    const refrashRandomRecipe = () => {
        api.getRandomFood().then(res => setRandomRecipe(res))
    };
  return (
        <Card className="mt-2" style={{direction:'rtl',width: '18rem'}}>
            <CardHeader>מוצר אקראי</CardHeader>
        <Card.Body>
            <Card.Title className="text-center">{randomRecipe.name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    חברה: {randomRecipe.company}
                </ListGroupItem>
                <ListGroupItem>
                    פחמימות: {randomRecipe.carbohydrates}<br/>
                    שומנים: {randomRecipe.fats}<br/>
                    חלבונים: {randomRecipe.proteins}
                </ListGroupItem>
                <ListGroupItem>
                    סה"כ קלוריות: {randomRecipe.totalCalories}
                </ListGroupItem>
            </ListGroup>
            <div className="text-center mt-2">
                <Button variant="primary"onClick={()=>refrashRandomRecipe()}>
                    <AiOutlineReload/>
                </Button>
            </div>
        </Card.Body>
        </Card>
  )
}

export default RandomFoodCard