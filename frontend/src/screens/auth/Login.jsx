import React, {useState, useEffect, useContext} from "react";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';
import { useLoginUserMutation } from '../services/appApi';
import {login} from '../../auth/auth';
import {useNavigate} from 'react-router-dom';
import {AppContext} from '../context/appContext';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {socket} = useContext(AppContext);
    const [loginUser,{isLoading,error}] = useLoginUserMutation();
    //const isLoggedIn = localStorage.getItem('token');
    const isLoggedIn = useSelector((state) => state.user);
    let validToken = false;
    const verifyToken = async() => {
        const token = localStorage.getItem('token');
        if(token){
            const res = await axios.post('http://localhost:3001/verifyToken', {token});
            if(res.data.error){
                console.log(res.data.message);
            }
            else{
                console.log(res.data.message);
                validToken = true;
            }
        }
    }

    useEffect(() => {
        verifyToken();
        if (isLoggedIn) {
          alert('You are already logged in. Please logout to login from a different account.');
          window.location.href = '/';
        }
    }, [isLoggedIn]);

    if(isLoggedIn){
        return null;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                socket.emit("new-user");
                navigate('/');
            }
        });
        axios.post('http://localhost:3001/login', {email, password})
        .then((res) => {
            console.log("Got user data from auth")
            const data = res.data;
            if(data.error){
                alert(data.message);
            }else{
                //localStorage.setItem('token', data._id);
                login();
            }
        })
        .catch(err => alert(err));
    }


    return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
        <div className='bg-light p-3 rounded w-25'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>  
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='text' placeholder="Enter Email" autoComplete="off" name="email" className= "form-control rounded-0" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>  
                    <input type='password' placeholder="Enter Password" autoComplete="off" name="password" className= "form-control rounded-0" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                <p>Don't have an accout ?</p>
                <a href='/signup'>Register</a>
            </form>
        </div>
    </div>
    )
}
export default Login;