import React,{useEffect, useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import Logout from '../screens/auth/Logout';
import CreatePost from '../screens/quillPost';

const Routing = () => {
    const jwt = localStorage.getItem("token");
    if(jwt){
        console.log("jwt exists");
    }else{
        console.log("jwt does not exist");
    }
    return (
        <BrowserRouter>
            <Routes>
                {jwt && <Route path="/" element={<Logout/>}/>}
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/createPost" element={<CreatePost/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Routing