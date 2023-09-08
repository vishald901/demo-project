import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <div class="footer">
        <div className="term-cnd" style={{ color: "white" }}>
          <div className="term-content">
            <h4>Term of Service | Privacy and Policy</h4>
            <br />
            <div className="icon">
              <InstagramIcon className="micon" sx={{ color: "Goldenrod" }} />
              <FacebookIcon className="micon" sx={{ color: "Goldenrod" }} />
              <LinkedInIcon className="micon" sx={{ color: "Goldenrod" }} />
              <TwitterIcon className="micon" sx={{ color: "Goldenrod" }} />
              <YouTubeIcon className="micon" sx={{ color: "Goldenrod" }} />
            </div>
          </div>
        </div>

        <div className="contact-us">
          <div className="contact-us-div">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              incidunt iure quisquam illum nobis hic voluptatem
            </p>
            <div className="office">
              <div>
                <NearMeIcon sx={{ color: "Goldenrod" }}></NearMeIcon>
                <Typography variant="h6" component="span">
                  Office 1
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                {/* <h4>+91 987456321</h4> */}
                <LocalPhoneIcon sx={{ color: "Goldenrod" }}></LocalPhoneIcon>
                <Typography variant="h6" component="span">
                  +91 987456321
                </Typography>
              </div>
              <div>
                <NearMeIcon sx={{ color: "Goldenrod" }}></NearMeIcon>
                <Typography variant="h6" component="span">
                  Office 2
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <MailIcon sx={{ color: "Goldenrod" }}></MailIcon>
                <Typography variant="h6" component="span">
                  mailid@gmail.com
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
