import React,{useEffect, useContext,useState} from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../screens/auth/Signup';
import SinglePost from '../screens/posts/blogview';
import Login from '../screens/auth/Login';
import Logout from '../screens/auth/Logout';
import CreatePost from '../screens/posts/quillPost';
import Chat from '../screens/chatpage/Chat';
import { AppContext,socket } from '../screens/context/appContext';
import FileUpload from '../screens/plants/FileUpload';
import Plants from '../screens/plants/Plants';
import SearchPlant from '../screens/plants/PlantSearch';


const Routing = () => {

    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
    const jwt = localStorage.getItem("token");
    if(jwt){
        console.log("JWT exists");
    }else{
        console.log("JWT does not exist");
    }
    return (
        <AppContext.Provider value={{rooms,socket, setRooms, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, newMessages, setNewMessages}}>
        <BrowserRouter>
            <Routes>
                {user && <Route path="/" element={<Logout/>}/>}
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/createPost" element={<CreatePost/>}/> 
                <Route path='/getSinglePost/:id' element={<SinglePost/>}/>
                <Route path='/plants'  element={<Plants/>}/>
                <Route path='/plants/identification'  element={<FileUpload/>}/>
                <Route path='/plants/search'  element={<SearchPlant/>}/>
            </Routes>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Routing;