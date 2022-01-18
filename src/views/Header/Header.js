import React from 'react';
import { Box, Container, Row, Column, HeaderLink, Heading } from './HeaderStyles';
import { getUser, logout } from '../../services/users';
import { useState } from 'react';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <HeaderLink href="/">Home</HeaderLink>
              <button onClick={logoutUser}>Log Out</button>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <HeaderLink href="/AboutUs">About Us</HeaderLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <HeaderLink href="#">Profile</HeaderLink>
            </Heading>
          </Column>
          <Column>
            {' '}
            <Heading>
              {/* <HeaderLink href="#">Search</HeaderLink> */}
              <input placeholder="Search"></input>
              <button className="searchbtn">Search</button>
            </Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Header;
