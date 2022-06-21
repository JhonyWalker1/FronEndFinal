import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../layouts/Main/index";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateUser from "../layouts/PrivateUser/index";
import Profile from "../pages/Profile";
import OrderUser from "../pages/OrderUser";
import PageMain from "../pages/PageMain";


const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route element={<Main />}>
                <Route path="/" element={<PageMain />} />
            </Route>
            <Route element={<PrivateUser />}>
                <Route path="profile" element={<Profile />} />
                <Route path="order" element={<OrderUser />} />
            </Route>
        </Routes>
        </BrowserRouter>
)}

export default Router;