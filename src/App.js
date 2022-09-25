import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/' element={<div> Home page </div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
