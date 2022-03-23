
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import About from './Components/About';
import MyCart from './Components/MyCart';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container className=''>
            <Navbar.Brand>diet recipes</Navbar.Brand>
            <Nav className="d-flex flex-row" style={{direction:'rtl'}}>
              <Nav.Item>
              <Link to='/' className='text-white mx-2 text-decoration-none'>דף הבית</Link>
              </Nav.Item>
              <Nav.Item>
              <Link to='/About' className='text-white mx-2 text-decoration-none'>עלינו</Link>
              </Nav.Item>
              <Nav.Item>
              <Link to='/MyCart' className='text-white mx-2 text-decoration-none'>העגלה שלי</Link>
              </Nav.Item>
            </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/MyCart' element={<MyCart/>}/>
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
