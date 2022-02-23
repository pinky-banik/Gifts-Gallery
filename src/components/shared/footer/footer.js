import React from 'react';
import ssl from "../../../images/ssl.webp" ;
import img from "../../../images/surprise.png"

const Footer = () => {
    return (
        <div style={{overflowX:"hidden"}}>

<footer>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-start  w-75 mx-auto">
    <ul className='col' style={{listStyle: "none"}}>
     <h5> Gifts Gallary</h5>
     <li> House: 65, Level-2, Road: 03, Block: B, Niketon, </li>
     <li>Gulshan-1, Dhaka</li>
     <li>Phone: +880 1971 971 520</li>
     <li> Email: contact.stygen@gmail.com</li>
     <li> Sat - Fri / 9:00 AM - 10:00 PM</li>
     <li> 
       <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Enter your email here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <span class="input-group-text bg-primary" id="basic-addon2">Subscribe</span>
      </div>
    </li>
    </ul>
    <ul className='col' style={{listStyle: "none"}}>
     <h5> MAIN FEATURES</h5>
     <li> Cake</li>
     <li>Flowers</li>
     <li>Watches</li>
     <li> Plushies</li>
     <li> Books</li>
     <li>Chocolate</li>
     <li>Home Decor</li>
     <li>Lifestyle</li>
    </ul>
    <ul className='col' style={{listStyle: "none"}}>
     <h5>USEFUL LINKS</h5>
     <li>About Us</li>
     <li>Blog</li>
     <li>Privacy Policy</li>
     <li> Terms & Conditions</li>
     <li> Return And Refund Policy</li>
     <li>Warranty Guide</li>
     <li>Contact Us</li>
     <li>Become a Seller</li>
    </ul>
    <ul className='mx-auto text-center' style={{listStyle:"none"}}>
      <li>
        <img className='img-fluid w-50' src={img} alt="" />
      </li>
    </ul>
  </div>
  <div>
    <img className="w-75 img-fluid" src={ssl} alt="" />
  </div>

  <div class="bg-dark text-center p-3  text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:gifts gallery
  </div>
</footer>
        </div>
    );
};

export default Footer;