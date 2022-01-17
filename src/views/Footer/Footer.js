// import React from 'react';

// export default function Footer() {
//   return <div></div>;
// }

import React from 'react';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: 'green', textAlign: 'center', marginTop: '-50px' }}>
        Alchemy Code Lab - Tech Swap
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">1</FooterLink>
            <FooterLink href="#">2</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">1</FooterLink>
            <FooterLink href="#">2</FooterLink>
            <FooterLink href="#">3</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Brett</FooterLink>
            <FooterLink href="#">James</FooterLink>
            <FooterLink href="#">Mark</FooterLink>
            <FooterLink href="#">Chase</FooterLink>
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
