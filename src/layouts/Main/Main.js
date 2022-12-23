import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() =>{
        if(localStorage.getItem('dark-mode') === "false"){
            setDarkMode(false)
        }
        else{
            setDarkMode(true)
        }
    }, [darkMode]);
    return (
        <div className={darkMode ? "dark" : "light"}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;