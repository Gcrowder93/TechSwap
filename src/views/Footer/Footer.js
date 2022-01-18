// import React from 'react';

// export default function Footer() {
//   return <div></div>;
// }

import React from 'react';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <h2 style={{ color: 'royalBlue', textAlign: 'center', marginTop: '-50px' }}>
        Alchemy Code Lab - Tech Swap
      </h2>
      <Container>
        <Row>
          {/* <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">1</FooterLink>
            <FooterLink href="#">2</FooterLink>
            <FooterLink href="#">3</FooterLink>
          </Column> */}
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Shopping Cart</FooterLink>
            <FooterLink href="#">Profile Page</FooterLink>
            <FooterLink href="#">Categories</FooterLink>
            <FooterLink href="./aboutus">About Us</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/brett-seifried/" target="_blank">
              Brett
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/james-demiraiakian/" target="_blank">
              James
            </FooterLink>

            <FooterLink href="https://www.linkedin.com/in/mark-voltaire-4907091bb/" target="_blank">
              Mark
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/gregory-crowder/" target="_blank">
              Chase
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/phoenix-nicholson/" target="_blank">
              Phoenix
            </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-slack">
                <span style={{ marginLeft: '10px' }}>Slack</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: '10px' }}>LinkedIn</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
