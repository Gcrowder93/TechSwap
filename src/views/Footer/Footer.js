import React from 'react';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <FooterLink href="/">Home</FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="#">Slack DMS</FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="/add">Add Product</FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="/aboutUs">About Us</FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="/user">Profile</FooterLink>
            </Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
