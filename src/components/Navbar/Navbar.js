import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(<>
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary margin">
  <div class="container-fluid nav-css  nav-color">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#"> */}

       <h1 className="heading-main1"> <img className="img-logo" src="https://clipartcraft.com/images/car-logo-transparent-background-4.png" height="100px"/> GoStreet </h1>
       
    {/* </a> */}
  </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-nav" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav"  to="/Services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav"  to="/Review">Review</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav"  to="/Blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav"  to="/Adminlogin">Adminlogin</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-nav"  to="/Userlogin">Userlogin</Link>
        </li>

      </ul>

    </div>
  </div>
  </nav>

</div>
</>

    )
}