import { Routes, Route } from "react-router-dom"

import App from './App.js'
import PIN from "./components/authentication/optPin/PIN.js"

import Home from './views/home/Home'
import Login from "./views/login/Login.js"
import Food from "./views/food/Food.js"

const Router = () => {
    return (
        <App>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/food/:id" element={<Food />} />
                <Route path="/pin" element={<PIN />} />
            </Routes>
        </App>
    )
}

export default Router