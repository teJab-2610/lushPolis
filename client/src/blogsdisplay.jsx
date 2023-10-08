import React from 'react'
import ReactDOM from 'react-dom/client'
import './blogsdisplay.css'

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

const BlogsList = () => {
  return (
    <>
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />    
    </>
  );
};


export default BlogsList;

