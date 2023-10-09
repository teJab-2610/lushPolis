import React from "react";
import "./explore.css";
import Navbar from "./Navbar.jsx";
import Head from "./top5blogs.jsx";

const Explore = () => {
    return(
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
        <div className="container marketing padno">
        <Head />
        <h1>Top Categories</h1><hr/>
    
    <h3 class="soil-title">Soil improvement</h3>
    <button type="button" class="btn btn-light see-more-btn">See More</button>        
    <hr />
    <section>
        <ul class="horizontal-media-scroller">
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
          <li>
            <a href="#">
              <figure>
                <picture>
                  <img class="section-img" alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26"/>
                </picture>
                <h6>BERLIN STATION</h6>
                <p>author</p>
              </figure>
            </a>
          </li>
        </ul>
      </section>
        </div>

        </body>
      </html>
        
        
        
   );
};

export default Explore;
