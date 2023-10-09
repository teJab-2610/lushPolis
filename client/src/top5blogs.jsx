import React from 'react';
import './explore.css';
import sampledp from './assets/introageimage.jpg';

const TopBlogs = () => {
        return (
            <>
            <h1>Top Blogs</h1>
    <hr />
    <div >
    <div class="row">
        <div className="col-md-6">
            <img src="https://media.istockphoto.com/id/482987325/photo/patio.jpg?s=612x612&w=0&k=20&c=9O4GNPGOz_Pqttc_n4BwEyE0iAUBf2h0jrtVYG4izuY=" alt="Blog Image" className="img-fluid" />
            <p className="blog-title"><strong>That Time My Kid Googled Me and I Was No Longer “Dad”</strong></p>
            <p className="blog-summary">The repercussions of your online presence as a parent</p>
            <div className="author-info">
                <img src={sampledp} alt="Author's Profile Picture" className="profile-pic rounded-circle" />
                <div className="author-details">
                    <div className="user-info">
                        <a className="author-link" href="/@claytonmoulynox?source=post_page-----c6ee368114f7--------------------------------">Clayton Moulynox</a>
                        <span className="separator">·</span>
                        <a className="follow-link" href="#">Follow</a>
                    </div>
                    <div className="author-meta">
                        <span className="published-in">Published in</span>
                        <a className="publication-link" href="" rel="noopener follow">ILLUMINATION</a>
                        <span className="separator">·</span>
                        <span className="read-time" data-testid="storyReadTime">8 min read</span>
                        <span className="separator">·</span>
                        <span className="publish-date" data-testid="storyPublishDate">Sep 20</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row mb-3">
                <div className="col-md-6">
                    <img src="https://media.istockphoto.com/id/539829042/photo/proud-gardener.jpg?s=612x612&w=0&k=20&c=WrhKK9tgxLds1ikZYabVsHSGxay65NpMO8ICz-5uwRo=" alt="Image 1" className="img-fluid section-img" />
                    <h4 className='new'>That Time My Kid Googled Me and I Was No Longer “Dad”</h4>
                </div>
                <div className="col-md-6">
                    <img src="https://img.freepik.com/free-photo/plants-pot-with-watering-can_23-2148905231.jpg" alt="Image 2" className="img-fluid section-img" />
                    <h4 className='new'>That Time My Kid Googled Me and I Was No Longer “Dad”</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://images.finegardening.com/app/uploads/2018/08/01143325/6.jpg" alt="Image 3" className="img-fluid section-img" />
                    <h4 className='new'>That Time My Kid Googled Me and I Was No Longer “Dad”</h4>
                </div>
                <div className="col-md-6">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/perennial-flowers-and-plants-1674072475.jpeg" alt="Image 4" className="img-fluid section-img" />
                    <h4 className='new'>That Time My Kid Googled Me and I Was No Longer “Dad”</h4>
                </div>
            </div>
        </div>
        </div>
        <hr/>
    </div>

    
</>
        );
};

export default TopBlogs;
