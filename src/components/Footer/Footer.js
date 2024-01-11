   import React from "react";
   import "./Footer.css";
   import GitHub from '../Footer/Images/github.png';
   import Linkedin from '../Footer/Images/linkedin1.png';
   import Facebook from '../Footer/Images/facebook1.png';
   import Twitter from '../Footer/Images/twitter.png';
   import Instagram from '../Footer/Images/instagram.png';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <div className="footer">
    
          <h4 className="text-line"> <img src="https://clipartcraft.com/images/car-logo-transparent-background-4.png" height="100px"/> GoStreet</h4>
         <div className= "footer section_padding">
          <div className="footer-links">
            <div  className="footer-links_div">
                <h4>Company</h4>
                <Link to="/about">
                  <p >About</p>
                </Link>
                <Link to="/services">
                  <p>Services</p>
                </Link>
                <Link to="/review">
                  <p>Review</p>
                </Link>
                <Link to="/blog">
                  <p>Blog</p>
                </Link>
                <Link to="/adminlogin">
                  <p>Adminlogin</p>
                </Link>
                <Link to="/userlogin">
                  <p>Userlogin</p>
                </Link>
              </div>

             <div className="footer-links_div">
                 <h4>Products</h4>
                 <Link to = "/ride"  >
                      <p>Ride</p>
                 </Link>
                 <Link to = "/drive">
                      <p>Drive</p>
                 </Link>
                 <Link to = "/deliver">
                      <p>Deliver</p>
                 </Link>
                 <Link to = "/uberforbusiness">
                      <p>Uber for Business</p>
                 </Link>
             </div>

             <div className="footer-links_div">
                <h4>Global citizenship</h4>
                <Link to= "/safety">
                   <p>Safety</p>
                </Link>
                <Link to = "/diversityandinclusion">
                   <p>Diversity and Inclusion</p>
                </Link>
                <Link to = "/sustainability">
                   <p>Sustainability</p>
                </Link>
             </div>

             <div className="footer-links_div">
                <h4>Travel</h4>
                <Link to="./reserve">
                    <p>reserve</p>
                </Link>
                <Link to="./airports">
                    <p>Airports</p>
                </Link>
                <Link to="./cities">
                    <p>Cities</p>
                </Link>
             </div>

             <div className="footer-links_div">
                <h4 className="text-name">Find Us On Social Media</h4> 
                 <div className="socialmedia"> 
                      <p><img src={GitHub} alt=""/></p>
                      <p><img src={Linkedin} alt=""/></p>
                      <p><img src={Facebook} alt=""/></p>  
                      <p><img src={Twitter} alt=""/></p>  
                      <p><img src={Instagram} alt=""/></p> 
                </div> 
            </div>
          </div>

          <hr></hr>

          <div className="footer-below">
            <div className="footer-copyright">
                <p className="footerbelow">
                    @{new Date().getFullYear()}Website Created By GoStreet Team.
                </ p>
           </div>
          </div>
          
         </div>
        </div>
     </>
    )
}; 