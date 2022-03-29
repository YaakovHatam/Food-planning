
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import About from './Components/About';
import MyCart from './Components/MyCart';
import Search from './Components/Search';
import { MyCartProvider, MyCartValue } from './context/Cart-context';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function App() {
    const aboutFeature = process.env.REACT_APP_ABOUT_FEATURE_ENABLED;

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Container className=''>
                        <Navbar.Brand>diet recipes</Navbar.Brand>
                        <Nav className="d-flex flex-row" style={{ direction: 'rtl' }}>
                            <Nav.Item>
                                <Link to='/' className='text-white mx-2 text-decoration-none'>דף הבית</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to='/About' className='text-white mx-2 text-decoration-none'>עלינו</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to='/search' className='text-white mx-2 text-decoration-none'>חיפוש</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to='/MyCart' className='text-white mx-2 text-decoration-none'>
                                    {<AiOutlineShoppingCart />}
                                    העגלה שלי
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
                <MyCartProvider value={MyCartValue}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search' element={<Search />} />
                        {aboutFeature ? <Route path='/About' element={<About />} /> : null}
                        <Route path='/MyCart' element={<MyCart />} />
                    </Routes>
                </MyCartProvider>
            </div>

        </BrowserRouter>
    );
}

export default App;
