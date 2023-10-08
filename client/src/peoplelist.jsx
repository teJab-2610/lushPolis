import React from 'react';
import './peoplelist.css';

const PersonCard = ({ dp, username, about }) => {
  const handleFollow = () => {
    // Add logic to handle follow action
    console.log(`Following ${username}`);
  };

  return (
    <div className="person-card">
      <div className="dp">
        <img src={dp} alt="User" />
      </div>
      <div className="info">
        <h4 className="headi">{username}</h4>
        <p className="para">{about}</p>
      </div>
      <button class = "b1 btn btn-secondary " onClick={handleFollow} style={{borderRadius:'5rem'}}>Follow</button>
    </div>
  );
};

const PeopleList = () => {
  const peopleData = [
    {
      dp: 'https://www.w3schools.com/howto/img_avatar.png',
      username: 'JohnDoe123',
      about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
    },
    {
      dp: 'https://www.w3schools.com/howto/img_avatar.png',
      username: 'JaneDoe456',
      about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
    },
    {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
      {
        dp: 'https://www.w3schools.com/howto/img_avatar.png',
        username: 'JohnDoe123',
        about: 'Some representative placeholder content for the three columns of text below the carousel. This is the first column'
      },
    // Add more people data as needed
  ];

  return (
    <div className="people-list">
      {peopleData.map((person, index) => (
        <PersonCard
          key={index}
          dp={person.dp}
          username={person.username}
          about={person.about}
        />
      ))}
    </div>
  );
};

export default PeopleList;
