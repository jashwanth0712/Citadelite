import React from "react";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark justify-content-between">
  <a class="navbar-brand text-white" href="#">Citadelite</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon white"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-white" href="#">Project</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">About us</a>
      </li>
    </ul>
    
  </div>
</nav>
    )
}
export default Navbar