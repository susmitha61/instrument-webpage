import React from "react";
import './Footer.css'
import {
  Box,
  Container,
  Row,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <div className="footer">

    <Box>  
      <Container>
        <Row>  
            <FooterLink href="https://www.facebook.com/groups/BuyandSellMusicalInstruments/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/explore/tags/instruments/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/musicgoround86?lang=en">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/watch?v=a8lZQnQZg_A&pp=ygULaW5zdHJ1bWVudHM%3D">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          
        </Row>
      </Container>
    </Box>
    </div>
  );
};
export default Footer;