
import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import About from './Components/About';
import MyCart from './Components/MyCart';
import Search from './Components/Search';
import { MyCartProvider, MyCartValue } from './context/Cart-context';
import MainNavbar from './Components/MainNavbar';
import { Login } from './Components/Login';
import { store } from './store/store';

function RequireAuth({ children }: { children: JSX.Element }) {

    let location = useLocation();
    const isUserLogged = !!(store.getState().userSettings as any).email;

    if (!isUserLogged) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

function App() {
    const aboutFeature = process.env.REACT_APP_ABOUT_FEATURE_ENABLED;

    return (
        <BrowserRouter>
            <div className='app'>
                <MainNavbar />
                <MyCartProvider value={MyCartValue}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/search' element={<Search />} />
                        {aboutFeature ? <Route path='/About' element={<About />} /> : null}
                        <Route path="app">
                            <Route path='MyCart' element={
                                <RequireAuth>
                                    <MyCart />
                                </RequireAuth>
                            } />
                        </Route>
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </MyCartProvider>
            </div>

        </BrowserRouter >
    );
}

export default App;
