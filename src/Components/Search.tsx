import { createRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FastFood, Food } from '../Interfaces/Fast.Food.Interface';
import { api } from '../services/db.service';
import SearchResults from './SearchResults';

const Search = () => {
    const carboMin = createRef<HTMLInputElement>();
    const carboMax = createRef<HTMLInputElement>();
    const protMin = createRef<HTMLInputElement>();
    const protMax = createRef<HTMLInputElement>();
    const fatMin = createRef<HTMLInputElement>();
    const fatMax = createRef<HTMLInputElement>();

    const [searchItems, setSearchItems] = useState<Food[]>([]);

    const setSearchResults = () => {
        if (fatMin.current?.value && fatMax.current?.value &&
            protMin.current?.value && protMax.current?.value &&
            carboMax.current?.value && carboMin.current?.value && carboMin.current?.value !== '') {

            api.searchFoodByValues({
                carboMax: +carboMax.current?.value,
                carboMin: +carboMin.current?.value,
                fatMax: +fatMax.current?.value,
                fatMin: +fatMin.current?.value,
                protMax: +protMax.current?.value,
                protMin: +protMin.current?.value,
            }).then(res => {
                setSearchItems(res);
            });
        }
    }

    return (
        <div className="container col-6" style={{ direction: "rtl" }}>
            <h2 className="text-center">חיפוש תפריט בהתאמה אישית</h2>
            <h6 className="text-danger text-center">(לפי 100 גרם)</h6>
            <Form className="mx-auto">
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
            {searchItems && searchItems.length > 0 ? <SearchResults foodItems={searchItems}></SearchResults> : null}
        </div>
    )
}

export default Search