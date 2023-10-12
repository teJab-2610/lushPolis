import FileUpload from './FileUpload';
import PlantSearch from './PlantSearch';
import './plantscss.css';
import Navbar from '../components/Navbar.jsx';
import { BrowserRouter as Router, Route, useNavigate, Link } from 'react-router-dom';


function Plants() {
    return(
        <div className='bgofapi'>
        <Navbar />
        <div className="PlantApp" style={{padding:'6rem'}}>
        <header className="Plantheader">
          <h1>Plant Identification and Search</h1>
        </header>

        <nav className="Plantnav">
          <ul className="Plantnav-links">
            <li>
            <Link to="/plants/identification" className="Plantnav-button">
                Plant Identification
            </Link>
            </li>
            <br />
            <li>
              <Link to="/plants/search" className="Plantnav-button">
                Plant Search
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      </div>
    );
}

export default Plants;
