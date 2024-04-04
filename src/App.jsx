import React from 'react';
import './main.css'
import Navbar from './Components/Navbar/navbar';
import Router from './Components/Router/router'
import RouterForAdmin from './Components/Router/RouterforAdmin'
import NavbarResponsive from './Components/Navbar/navbarResponsive';
import Admin from './Pages/Admin/Admin';
function App(props) {
    return (
        <div>
            <div className="main">
                <Navbar />
                <NavbarResponsive />
                <Router />
            </div>
        </div>
    );
}


export default App;

