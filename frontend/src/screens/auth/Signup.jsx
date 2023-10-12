import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Signup() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user);
    const handleSubmit = async(e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {console.log(res)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        if (isLoggedIn) {
          alert('You are already logged in. Please logout to login from a different account.');
          window.location.href = '/';
        }
    }, [isLoggedIn]);

    if(isLoggedIn){
        return null;
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
            <div className='bg-light p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='firstName' className='form-label'>Name</label>
                        <input type='text' placeholder="Enter Name" autoComplete="off" name="email" className= "form-control rounded-0" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='text' placeholder="Enter Email" autoComplete="off" name="email" className= "form-control rounded-0" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>  
                        <input type='password' placeholder="Enter Password" autoComplete="off" name="password" className= "form-control rounded-0" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                    <p>Alreadt have an accout ?</p>
                    <a href='/login'>Login</a>
                </form>
            </div>
        </div>
    );
}

export default Signup;