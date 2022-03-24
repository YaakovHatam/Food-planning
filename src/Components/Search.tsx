import { createRef } from 'react';
import {Form, Button} from 'react-bootstrap';
import { FastFood } from '../Interfaces/Fast.Food.Interface';

const Search = (props:{dbArr:FastFood[],setMenusArr:any}) =>{
    const carboMin = createRef<HTMLInputElement>();
    const carboMax = createRef<HTMLInputElement>();
    const protMin = createRef<HTMLInputElement>();
    const protMax = createRef<HTMLInputElement>();
    const fatMin = createRef<HTMLInputElement>();
    const fatMax = createRef<HTMLInputElement>();
    const setSearchResults = () =>{ 
        if(fatMin.current?.value && fatMax.current?.value &&
        protMin.current?.value && protMax.current?.value &&
        carboMax.current?.value && carboMin.current?.value !== ''){
            const menuResults:FastFood[] = props.dbArr.filter(m => (m.fats<+fatMax.current?.value!) && 
            (m.fats>+fatMin.current?.value!) &&
            (m.carbohydrates<+carboMax.current?.value!) && 
            (m.carbohydrates>+carboMin.current?.value!) &&
            (m.proteins<+protMax.current?.value!) && 
            (m.proteins>+protMin.current?.value!))
            props.setMenusArr(menuResults); //state function
        }
    }
  return (
    <div className="container col-6" style={{direction:"rtl"}}>
        <h2 className="text-center">חיפוש תפריט בהתאמה אישית</h2>
        <h6 className="text-danger text-center">(לפי 100 גרם)</h6>
        <Form  className="mx-auto">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>פחמימות:</Form.Label>
                <div className='d-flex'>
                <Form.Control ref={carboMin} required className='col' type="Number" placeholder="מינמום" />
                <Form.Control ref={carboMax} required className='col' type="Number" placeholder="מקסימום" />
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>שומנים:</Form.Label>
                <div className='d-flex'>
                <Form.Control ref={fatMin} required className='col' type="Number" placeholder="מינמום" />
                <Form.Control ref={fatMax} required className='col' type="Number" placeholder="מקסימום" />
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>חלבונים:</Form.Label>
                <div className='d-flex'>
                <Form.Control ref={protMin} required className='col' type="Number" placeholder="מינמום" />
                <Form.Control ref={protMax} required className='col' type="Number" placeholder="מקסימום" />
                </div>
            </Form.Group>
            <div className='text-start'>
                <Button variant="dark" onClick={setSearchResults}>
                    חפש תפריט
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default Search