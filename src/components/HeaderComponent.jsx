import React from 'react';
import { Link } from 'react-router-dom';


const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark border-bottom border-body' data-bs-theme="dark">
          <div className="container-md">
            <a className="navbar-brand text-xl font-bold mb-1" href="/">Employee Management System</a> {/* Changed href to "/" for Home */}
            
            <div className="d-flex"> {/* Added a div to group the new buttons */}
              <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <img src='/house.svg' alt='Home Icon' className=".nav-icon" href="/"/>Home
                </Link> {/* Home button */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a> {/* About Us button */}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Us</a> {/* Contact button */}
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;

// import React from 'react'

// const HeaderComponent = () => {
//   return (
//     <div>
//         <header>
//             <nav className='navbar navbar-dark bg-primary'>
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="https://www.emsdash.net">Employee Managment System</a>
//                  </div>

//             </nav>
//         </header>
//     </div>
//   )
// }

// export default HeaderComponent