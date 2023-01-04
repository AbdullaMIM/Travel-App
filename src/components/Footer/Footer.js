import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            
            <div className="top">
              
              <div>
                <h1>Travel Lanka</h1>
                <p>Choose your favouite destination in SriLanka</p>
              </div>
              
              <div>
                 <a href="/">
                  <i className="fa-brands fa-facebook-square"/>
                 </a>
                <a href="/">
                  <i className="fa-brands fa-instagram-square"/>
                </a>
                <a href="/">
                  <i className="fa-brands fa-behance-square"/>
                </a>
                <a href="/">
                  <i className="fa-brands fa-twitter-square"/>
                </a>
              </div>

            </div>


            <div className="bottom">
              <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All versions</a>
              </div>
              <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
              </div>
              <div>
                <h4>Help</h4>
                <a href="/">Support</a> 
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
              </div>
              <div>
                <h4>Others</h4>
                <a href="/">Terms of Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Licence</a>
              </div>
           </div>

        </div>
    )
}

export default Footer;