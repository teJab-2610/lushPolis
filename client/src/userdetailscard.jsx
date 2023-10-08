import React from 'react'
import ReactDOM from 'react-dom/client'
import msgn from './assets/messengericon.png'

const x= "56M"

const userDetailscard = () => {
  return (<div>
            <img className="rounded-circle" src="https://www.w3schools.com/howto/img_avatar.png" alt="Generic placeholder image" width="140" height="140" />
            <h3> Aditya Andaluri</h3>
            <p>{x} Followers</p>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="#" style={{ borderRadius : '5rem'}} >Follow</a>
            <a href="#" style={{ borderRadius : '50%' , marginLeft : '1rem'}} ><img src={msgn} style={{width : '1.5rem'}}></img></a>
            </p>
            </div>
  );
};


export default userDetailscard;

