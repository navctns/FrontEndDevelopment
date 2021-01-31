import React from 'react';

export default(props) => {

  return(
    <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container">
        <a href="index.html" class="navbar-brand">Watch Store</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="NavbarCollapse" className="collapse navbar-collapse justify-content-between">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link px-3">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3">Shop</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-3">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
