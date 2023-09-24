/*
import ReactQuill from "react-quill";

import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Creating Post");
    console.log(title, content);
    axios.post("http://localhost:3001/createPost", { title, content })
    .then(res => {console.log(res);
    navigate('/')
    })
    .catch(err => console.log(err.response))
  };

  return (
    // 
    // <div>
    //   <h1>Create a new post</h1>
    //   <input
    //     type="text"
    //     placeholder="Title"
    //     value={title}
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <ReactQuill
    //     value={content}
    //     onChange={(content) => setContent(content)}
    //   />
    //   <button type="submit" onClick={handleSubmit}>
    //     Submit
    //   </button>
    // </div>
    // 
    <div>
    <div class="editable"></div>
    <script>var editor = new MediumEditor('.editable');</script>
    </div>
  );
};

export default CreatePost;
*/


// import { useCallback, useEffect, useState } from "react"
// import Quill from "quill"
// import "quill/dist/quill.snow.css"
// import { io } from "socket.io-client"
// import { useParams } from "react-router-dom"

// const SAVE_INTERVAL_MS = 2000
// const TOOLBAR_OPTIONS = [
//   [{ header: [1, 2, 3, 4, 5, 6, false] }],
//   [{ font: [] }],
//   [{ list: "ordered" }, { list: "bullet" }],
//   ["bold", "italic", "underline"],
//   [{ color: [] }, { background: [] }],
//   [{ script: "sub" }, { script: "super" }],
//   [{ align: [] }],
//   ["image", "blockquote", "code-block"],
//   ["clean"],
// ]

// export default function CreatePost() {
//   const { id: documentId } = useParams()
//   const [socket, setSocket] = useState()
//   const [quill, setQuill] = useState()

//   useEffect(() => {
//     const s = io("http://localhost:3001")
//     setSocket(s)

//     return () => {
//       s.disconnect()
//     }
//   }, [])

//   useEffect(() => {
//     if (socket == null || quill == null) return

//     socket.once("load-document", document => {
//       quill.setContents(document)
//       quill.enable()
//     })

//     socket.emit("get-document", documentId)
//   }, [socket, quill, documentId])

//   useEffect(() => {
//     if (socket == null || quill == null) return

//     const interval = setInterval(() => {
//       socket.emit("save-document", quill.getContents())
//     }, SAVE_INTERVAL_MS)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [socket, quill])

//   useEffect(() => {
//     if (socket == null || quill == null) return

//     const handler = delta => {
//       quill.updateContents(delta)
//     }
//     socket.on("receive-changes", handler)

//     return () => {
//       socket.off("receive-changes", handler)
//     }
//   }, [socket, quill])

//   useEffect(() => {
//     if (socket == null || quill == null) return

//     const handler = (delta, oldDelta, source) => {
//       if (source !== "user") return
//       socket.emit("send-changes", delta)
//     }
//     quill.on("text-change", handler)

//     return () => {
//       quill.off("text-change", handler)
//     }
//   }, [socket, quill])

//   const wrapperRef = useCallback(wrapper => {
//     if (wrapper == null) return

//     wrapper.innerHTML = ""
//     const editor = document.createElement("div")
//     wrapper.append(editor)
//     const q = new Quill(editor, {
//       theme: "snow",
//       modules: { toolbar: TOOLBAR_OPTIONS },
//     })
//     q.disable()
//     q.setText("Loading...")
//     setQuill(q)
//   }, [])
//   return <div className="container" ref={wrapperRef}></div>
// }


import React, { useEffect, useState, useCallback, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./CreatePost.css"; // Import your CSS file for styling
import {Navigate} from "react-router-dom";
import Editor from "./editor";
import axios from "axios";
import {useNavigate} from 'react-router-dom';




const TOOLBAR_OPTIONS = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                  
];

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

// export default function CreatePost() {
//   const [title,setTitle] = useState('');
//   const [summary,setSummary] = useState('');
//   const [content,setContent] = useState('');
//   const [files, setFiles] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   async function createNewPost(ev) {
//     const data = new FormData();
//     data.set('title', title);
//     data.set('summary', summary);
//     data.set('content', content);
//     data.set('file', files[0]);
//     ev.preventDefault();
//     const response = await fetch('http://localhost:3001/createPost', {
//       method: 'POST',
//       body: data,
//       credentials: 'include',
//     });
//     if (response.ok) {
//       setRedirect(true);
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/'} />
//   }
//   return (
//     <form onSubmit={createNewPost}>
//       <input type="title"
//              placeholder={'Title'}
//              value={title}
//              onChange={ev => setTitle(ev.target.value)} />
//       <input type="summary"
//              placeholder={'Summary'}
//              value={summary}
//              onChange={ev => setSummary(ev.target.value)} />
//       <input type="file"
//              onChange={ev => setFiles(ev.target.files)} />
//       <Editor value={content} onChange={setContent} />
//       <button style={{marginTop:'5px'}}>Create post</button>
//     </form>
//   );
// }
