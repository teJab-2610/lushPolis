import React from 'react'
import './profilepage.css'
import Navbar from './Navbar.jsx';
import Ucard from './userdetailscard.jsx';
import Smallnav from './smallnav.jsx';
import FollowingList from './followinglist.jsx';
import BlogsList from './blogsdisplay.jsx';
import PeopleList from './peoplelist.jsx';
import MACA from './storylist.jsx';

const Container = () => {
  return (
    <div className="container marketing padno">
      <div className="row">
        <div className="col-md-8 leftsection">
        <Smallnav />
        {/* <BlogsList /> */}
        {/* <PeopleList /> */}
        <MACA />
        </div>

        <div className="col-lg-4 rightsection">
            <Ucard />
            <FollowingList />
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <html>
      <head>
        <title>Profilepage</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="viewport" content="width=device-width" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js" integrity="sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

      </head>
      <body>
        <Navbar />
        <Container />
      </body>
    </html>
  );
};

export default ProfilePage;

