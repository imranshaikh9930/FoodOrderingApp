import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../Styles/Footer.css";

function Footer() {
  return (
      <div className="footer">
          <div className="socialMedia">
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
          <p>Copy; 2023 Indianfood.com</p>
          </div>
    </div>
  )
}

export default Footer