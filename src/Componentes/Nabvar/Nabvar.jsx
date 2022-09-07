import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Nabvar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
           <a className="navbar-brand" href="#navbar">
             CARNES AG
           </a>
           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">

              <Link to="/">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">Home</a>                                    
                </li>
              </Link>
              <Link to="/categoria/Corte Sin Hueso">
                <li className="nav-item">
                  <a className="nav-link" href="#features">Corte Sin Hueso</a>
                </li>
              </Link>
              <Link to="/categoria/Corte Con Hueso">
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">Corte Con Hueso</a>
                </li>
              </Link>
              
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Contacto
                </a>
              </li>  
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Nabvar;






















// import "./Nabvar.css";


// function Nabvar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#navbar">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarColor01"
//             aria-controls="navbarColor01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarColor01">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#home">
//                   Home
//                   <span className="visually-hidden">(current)</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#features">
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#pricing">
//                   Pricing
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">
//                   About
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nabvar;
