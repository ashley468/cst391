import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import AboutThisSite from './AboutThisSite';
import ContactUS from './ContactUs';
import LoginPage from './LoginPage';
import User from './User';
import NavBar from './NavBar';
import PrivateRoute from './PrivateRoute';

const RootElement = () => (
    <div>
        <h1>Welcome to Our Site!</h1>
        <h5>Some friends of mine</h5>
        <ul>
            <li><Link to='/user/Mary'>Mary</Link></li>
            <li><Link to='/user/Justine'>Justine</Link></li>
            <li><Link to='/user/Brianna'>Brianna</Link></li>
            <li><Link to='/user/David'>David</Link></li>
        </ul>
    </div>
);

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (from, navigate) => {
        setIsLoggedIn(true);
        navigate(from, { replace: true });
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<RootElement />} />
                <Route
                    path='/about'
                    element={
                        <PrivateRoute authorized={isLoggedIn}>
                            <AboutThisSite />
                        </PrivateRoute>
                    }
                />
                <Route
                    path='/contact'
                    element={
                        <PrivateRoute authorized={isLoggedIn}>
                            <ContactUS />
                        </PrivateRoute>
                    }
                />
                <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                <Route path='/user/:username' element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
