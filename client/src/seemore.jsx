import React from "react";
import "./explore.css";
import Navbar from "./Navbar.jsx";
import Head from "./top5blogs.jsx"; 

const BlogCard = () => {
    return (
        <>
            <div className="card" style={{ border: 'none' }}>
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer" style={{ border: 'none' }}>
                            <button className="icon-button" style={{border:'none'}}><i className="far fa-bookmark"></i></button>
                            <button className="icon-button" style={{border:'none'}}><i className="fas fa-thumbtack"></i></button>
                            <button className="icon-button"style={{border:'none'}}><i className="far fa-comment"></i></button>
                            <button className="icon-button" style={{border:'none'}}><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img src="https://miro.medium.com/v2/resize:fill:140:140/0*L0iGmiKIeXiyN3Vn" className="card-img bimg" alt="Cat" />
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    );
};


const Seemore = () => {
    return(
        <>
        <html><head>
        <title>Explorepage</title>
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
        <div className="container marketing padno">
        <Head />
        <div className="row">
        <div className="col-md-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
        <div className="col-md-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
        </div>
        </div>
        </body></html>
        </>
   );
};

export default Seemore;
