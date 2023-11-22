import "./Footer.css";


const Footer = () => {
  return (
    <div >
      <div className="footer">
        <div className="container mx-auto max-w-screen-lg">
          <img className="footer-img" src="/footer-logo.png"></img>
          
        <div class="grid grid-cols-3 gap-7">
          <div>
            <p class="footer-subsection-text mb-3">Address</p>
            <div class="footer-desc">
                <p>Store & Office</p>
                <p>Jl. Setrasari Kulon III, No. 10-12,</p>
                <p>Sukarasa, Sukasari, Bandung, </p>
                <p>Jawa Barat, Indonesia 40152</p>
            </div>

            <p class="footer-subsection-text mb-3">Office Hour</p>
            <div class="footer-desc">
              <p>Monday - Sunday</p>
              <p>10.00 - 18.00</p>
            </div>
          </div>

          <div className="pl-9">
            <p class="footer-heading-text">Get In Touch</p>
            <div class="footer-line"></div>
            <div class="footer-desc-1">
              <p>Phone</p>
              <p>Service Center</p>
              <p>Customer Service</p>
            </div>
                    
            <div class="footer-desc-2">
              <p>022-20277564</p>
              <p>0811-233-8899</p>
              <p>0811-235-9988</p>
              
           </div>

            <div class="grid grid-cols-4 footer-social">
              <img src="/Facebook.png" alt="Facebook"></img>
              <img src="/Instagram.png" alt="Instagram"></img>
              <img src="/Youtube.png" alt="Youtube"></img>
              <img src="/Twitter.png" alt="Twitter"></img>
            </div>
          </div>

          <div className="pl-20">
            <p class="footer-heading-text">Work With Us</p>
            <div class="footer-line"></div>
            <div class="footer-desc-1">
              <p>Authors</p>
              <p>Advertise</p>
              <p>API</p>
            </div>
          </div>


        </div>
          


        </div>
        
      </div>
    </div>
  );
};

export default Footer;
