
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./footer.css"

export const Footer = () => {
  return (
    <footer>
      <section className='footer-container'>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
        </div>
  
    <div class="footerBottom">
      <p>Email: hk5584748@gmail.com</p>
        <p>Copyright &copy;2024; Designed by <span class="designer">Hashim khan</span></p>
    </div>
    </div>

      </section>
    </footer>
  );
};


