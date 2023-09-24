import React, { useEffect, useState, useCallback, useRef } from "react";
import "quill/dist/quill.snow.css";
import "./CreatePost.css"; // Import your CSS file for styling
import {Navigate} from "react-router-dom";
import Editor from "./editor";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [quill, setQuill] = useState(null);
    const quillRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
      ev.preventDefault();
      console.log("Creating Post");
      axios.post("http://localhost:3001/createPost", { title, content })
      .then(res => {console.log(res);
      navigate('/');
      })
    };
    
  
    return(
      <form onSubmit={handleSubmit}>
        <input type="title" placeholder = {'Title'} value={title} onChange ={ev=>setTitle(ev.target.value)}/>
        <input type="summary" placeholder = {'Summary'} value={summary} onChange ={ev=>setSummary(ev.target.value)}/>
        <Editor value={content}  onChange={setContent}/>
        <button style={{marginTop:'5px'}}>Create post</button>
      </form>
    );  
  }