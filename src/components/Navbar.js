// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-capitalize active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/business">business</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/entertainment">entertainment</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/general">general</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/health">health</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/science">science</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/sports">sports</Link></li>
            <li className="nav-item">
              <Link className="nav-link text-capitalize" to="/technology">technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;




// // import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// export class Navbar extends Component {
// //   static propTypes = {};

//   render() {
//     return(
//             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Navbar</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize active" aria-current="page" to="/">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/business">business</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/entertainment">entertainment</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/general">general</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/health">health</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/science">science</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/sports">sports</Link></li>
//                     <li className="nav-item">
//                     <Link className="nav-link text-capitalize" to="/technology">technology</Link></li>
//                 </ul>
//                 </div>
//             </div>
//             </nav>
//     )
//   }
// }

// export default Navbar;
