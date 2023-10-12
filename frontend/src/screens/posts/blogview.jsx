import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./blogviewstyle.css";
import sampledp from '../../assets/images/introageimage.jpg';
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import dp from '../../assets/images/dp.jpg'
const SinglePost = ()=> {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();
    var count = 0;
    useEffect(() => {
        setIsLoading(true);
        console.log(id);
        const fetchPosts = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/getSinglePost/${id}`);
            setPosts(res.data.post);    
            setIsLoading(false);
          }
          catch(err) {
            console.log(err);
          }
          finally {
            
            setIsLoading(false);
          }
        }
        fetchPosts();   
        console.log(posts)
    }, []);

    useEffect(() => {
        console.log(posts); // Log the updated posts state
      }, [posts]);

    return(
        
<html>
{isLoading ? <head><title>Loading...</title></head> :
<>    
<head>
	<title>BlogView</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="blogviewstyle.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js" integrity="sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

</head>


<body>
    <Navbar />
<div className="container marketing">

<div className="container mt-4">
    <div className="row">
        <div className="col-lg-8">
            <h1 className="blog-title"><strong >{posts.title}</strong></h1>
            <p className="blog-summary">{posts.summary}
            </p>
            <div className="author-info">
              <img src={dp} alt="Author's Profile Picture" className="profile-pic rounded-circle"/>
              <div className="author-details">
                  <div className="user-info">
                      <a className="author-link" href="/@claytonmoulynox?source=post_page-----c6ee368114f7--------------------------------">{posts.author}</a>
                      
                  
                  </div>
                  <div className="author-meta"> 
                    <span className="publish-date" data-testid="storyPublishDate">{posts.createdAt}</span>
                  </div>
              </div>
          </div>
          <hr/> 
<div className="blog-actions">
    <button class="btn btn-light see-more-btn">
    <i className="fas fa-bookmark"></i> Bookmark</button>
    <button class="btn btn-light see-more-btn">
    <i className="fas fa-heart"></i> Like</button>
    
</div>       
            <img src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" alt="Blog Image" className="img-fluid mt-3" width={'900vh'} height={'900vh'} />
            <div className="blog-content">
            <div dangerouslySetInnerHTML={{ __html: posts.content }} />
            </div>
        </div>
{/* 
        <div className="col-lg-4">
          <div className="hashtags mb-4">
              <h3>Hashtags</h3>
              <ul>
                  <li>#Technology</li>
                  <li>#Science</li>
                  <li>#Programming</li>
              </ul>
          </div>

          <div className="more-blogs">
              <h3>More Blogs</h3>
              <div className="more-blogs-container">
              <div className="scrollable-blogs">
              <div className="card">
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src="blog-image-1.jpg" className="img-fluid" alt="Blog 1 Image"/>
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">Blog Title 1 (50 words max)</h5>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
              <div className="row g-0">
                  <div className="col-md-4">
                      <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
                  </div>
                  <div className="col-md-8">
                      <div className="card-body">
                          <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                      </div>
                  </div>
              </div>
          </div>
          <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
          <div className="row g-0">
              <div className="col-md-4">
                  <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
              </div>
              <div className="col-md-8">
                  <div className="card-body">
                      <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                  </div>
              </div>
          </div>
      </div>
      <div className="card">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Blog Title 2 (50 words max)</h5>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
      <div className="row g-0">
          <div className="col-md-4">
              <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
          </div>
          <div className="col-md-8">
              <div className="card-body">
                  <h5 className="card-title">Blog Title 2 (50 words max)</h5>
              </div>
          </div>
      </div>
  </div>
  <div className="card">
    <div className="row g-0">
        <div className="col-md-4">
            <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Blog Title 2 (50 words max)</h5>
            </div>
        </div>
    </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image"/>
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
<div className="card">
  <div className="row g-0">
      <div className="col-md-4">
          <img src="blog-image-2.jpg" className="img-fluid" alt="Blog 2 Image" />
      </div>
      <div className="col-md-8">
          <div className="card-body">
              <h5 className="card-title">Blog Title 2 (50 words max)</h5>
          </div>
      </div>
  </div>
</div>
            </div>
          </div>
          </div>
      </div> */}
    </div>
</div>
    
</div>
</body>
</>
}
</html>
    )
}
export default SinglePost;