import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function CreatePost(){
    const [title, setTitle] = useState('');
    const [text, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(
            "Creating Post"
        )
        console.log(title, text);
        axios.post('http://localhost:3001/createPost', {title, text})
        .then(res => {console.log(res);
        navigate('/')
        })
        .catch(err => console.log(err.response))
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 '>
            <div className='bg-light p-3 rounded w-25'>
                <h2>Create Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='title' className='form-label'>Title</label> 
                        <input type='text' placeholder="Enter Title" autoComplete="off" name="title" className= "form-control rounded-0" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='body' className='form-label'>Body</label>
                        <textarea type='text' placeholder="Enter Body" autoComplete="off" name="body" className= "form-control rounded-0" onChange={(e) => setBody(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Create Post</button>
                </form>
            </div>
        </div>
    )
}
export default CreatePost;