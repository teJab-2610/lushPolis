import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "quill/dist/quill.snow.css";
import "./CreatePost.css";
import {Navigate} from "react-router-dom";
import Editor from "./editor";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './quillpost.css';
import './profilepage.css';
import labe from '../../assets/images/label.png';
import conicon from '../../assets/images/gui_content_icon_158492.svg';
import Navbar from "../components/Navbar.jsx";

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [quill, setQuill] = useState(null);
    const quillRef = useRef(null);
    const navigate = useNavigate();
    const isPrivate = false;
    const user = useSelector((state) => state.user);
    const author = user.name;
    const [selectedTags, setSelectedTags] = useState([]);
    const availableTags = ['Gardening', 'Plant Care', 'Organic', 'Indoor Gardening'];

    const handleTagChange = (tag) => {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    };

    const handleSubmit = async (ev) => {
      ev.preventDefault();
      // const quillEditor = quillRef.current.getEditor();
      // const deltas = quillEditor.getDeltas();
      // console.log("Creating Post");
      // for (const delta of deltas) {
      //   if (delta.type === 'image') {
      //     const imageUrl = delta.src;
      //     const cloudinaryUrl = await uploadImageToCloudinary(imageUrl);
      //     quillEditor.insertEmbed(delta.index, 'image', cloudinaryUrl);
      //   }
      // }
      //const content = quillEditor.getContents();
      axios.post("http://localhost:3001/createPost", {
        title,
        summary,
        content,
        tags: selectedTags,
        isPrivate: false,
        author,
        userId: user._id
      })
        .then(res => {
          console.log(res);
          navigate('/');
        })
        .catch(err => {
          console.error(err);
          alert("Error creating post please try again");
        });
    };

    const [textarea1Height, setTextarea1Height] = useState('70px');
    const [textarea2Height, setTextarea2Height] = useState('50px');
  
    const handleTextarea1Input = (event) => {
      event.preventDefault();
      const { scrollHeight } = event.target;
      setTextarea1Height(scrollHeight + 'px');
    };
  
    const handleTextarea2Input = (event) => {
      event.preventDefault();
      const { scrollHeight } = event.target;
      setTextarea2Height(scrollHeight + 'px');
    };

    return(
      <>
      <Navbar/>
      <div className="gg">
      <div className="container marketing2">
      <form onSubmit={handleSubmit}>
        
      <div class="row" style={{paddingBottom: '3rem'}}>
            <div class="col-md-2 icon-container">
                <img src={labe} alt="titlepng" class="icon"/>
            </div>
            <div style={{width: '80rem'}}>
            <textarea id="t1" style={{height:textarea1Height}} onInput={handleTextarea1Input} className="title-input" type="title" placeholder = {'Title'} value={title} onChange ={ev=>setTitle(ev.target.value)}/>
            </div>
        </div>
        <div class="row" style={{paddingBottom: '2rem'}}  >
            <div class="col-md-2 icon-container">
                <img src={conicon} alt="titlepng" class="icon2"/>
            </div>
            <div style={{width: '80rem'}}>
            <textarea id="t2" style={{height:textarea2Height}} onInput={handleTextarea2Input} className="title-input2" type="summary" placeholder = {'Summary'} value={summary} onChange ={ev=>setSummary(ev.target.value)}/>
            </div>
        </div>
        <div style={{paddingBottom: '1rem'}}>
        {availableTags.map((tag) => (
          <label key={tag} style={{fontFamily:'Times New Roman',fontSize:'18px'}}>
            <input
              type="checkbox"
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            {tag}
          </label>
        ))}
        </div>
        {/* <input type="title" placeholder = {'Title'} value={title} onChange ={ev=>setTitle(ev.target.value)}/>
        <input type="summary" placeholder = {'Summary'} value={summary} onChange ={ev=>setSummary(ev.target.value)}/> */}
        <Editor value={content}  onChange={setContent} ref={quillRef}/>
        <div>
        
      </div>
        <button style={{marginTop:'5px'}}>Create post</button>
      </form>
      </div>
      </div>
      </>
    );  
  }

