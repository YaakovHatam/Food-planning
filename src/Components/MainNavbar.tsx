
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { store } from '../store/store';
import { useState } from 'react';


export default function MainNavbar() {

    const aboutFeature = process.env.REACT_APP_ABOUT_FEATURE_ENABLED;
    const [cartLen, setCartLen] = useState(store.getState().cart.length);

    store.subscribe(() => setCartLen(store.getState().cart.length));

    return (<Navbar bg="dark" variant="dark" sticky="top">
        <Container className=''>
            <Navbar.Brand>diet recipes</Navbar.Brand>
            <Nav className="d-flex flex-row" style={{ direction: 'rtl' }}>
                <Nav.Item>
                    <Link to='/' className='text-white mx-2 text-decoration-none'>דף הבית</Link>
                </Nav.Item>
                {aboutFeature ?
                    <Nav.Item>
                        <Link to='/About' className='text-white mx-2 text-decoration-none'>עלינו</Link>
                    </Nav.Item> : null}
                <Nav.Item>
                    <Link to='/search' className='text-white mx-2 text-decoration-none'>חיפוש</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/MyCart' className='text-white mx-2 text-decoration-none'>
                        {<AiOutlineShoppingCart />}
                        העגלה שלי ({cartLen})
                    </Link>
                </Nav.Item>
            </Nav>
        </Container>
    </Navbar>)
}