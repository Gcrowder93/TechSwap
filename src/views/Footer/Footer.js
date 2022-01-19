import React from 'react';
import '../../App.css';
import { Box, Container, Row, Column, FooterLink, Heading } from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>
              <FooterLink href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUAAAD///+hoaGlpaWSkpLW1ta9vb3o6OiBgYG7u7s/Pz+EhIRERESAgIDq6urAwMA4ODhoaGgxMTE8PDxCQkJLS0uOjo5fX1/4+PjS0tKamporKytpaWl2dnba2tpRiQu7AAADXUlEQVR4nO2d7XLaMBAAY0ghJnwGkrS05f0fs0nbY4qxbEmWfCd3929mYu3MjuSzIXl4AAAAAAAAKJBX7QXkpq5q7SVkZb2sqmq51l5GPjbVHzbaC8nFrhJ22kvJwu9ChSmW+lTd8qS9oNQsqiYL7SUlZbW9E6yq7Up7Wel4bvH75Fl7Yam4L3Rape7bCr2Wutde3nCae2iT4vdUd6HTKPVl2Sv4cfq/aC8znr5Ciy+1v9CyS135FHottcDTf9OvdUNxE5V/oUJZpa5DChVKmqh899Amxeypu34XB2XM/lGFCiWU6pqUfDE/UYXvoU1s76nrrknJl63hUocWKpgttU4kWBl98n9MUaiwPWrr3BN7yrswd/qnK1SwVep+yCnvYmnoKVXopOSLmYkqfaGCjVKDZvlQLMz+uQoV1Esdfh/ah+596ilnocLypCeY+pR3oXb65y9U0Cm19a1nLjTepqaalHwZfaIar1Bh3FJHLVQYs9SxCxVGKzX+eehQxnmemmVS8mWMiUqrUCF7qePvoU3y7qlHzUKFZcanVGPdh/aR7T413ywfSp7Zf9A7pdTkeEeVe5YPJfnsr7+HNkm7p5oqVEhZqvYp7yLZ6W+vUCFNqSYLFVKUarVQYXCpdgsVhpWqMsuHMmT2t3bKu4g+/e3ch/YRd5/a+Rl7a8R85r+UQoXgUu3voU3C9lTVp02xhDylKq1QwbvU8goV/ErN+l4+Nz7v/UstVOgtVe+JfSq6n/yfSjrlXWw73vtbn5R8cU5U5RcqtJea5BPMVmj7JPVUChXuSp1OocJtqUXM8qH8O/tPrVDhWmq596F9LKZS6FfnTz5Lfb1cvjj4Vor7+W+M34/H4+HH4ef5fJ59UNf17tL9d6nO2kv3ZNZp0cVMe+meYIihfTDE0D4YYmgfDDG0D4YY2gdDDO2DIYb2wRBD+2CIoX0wxNA+GGJoHwwxtA+GGNoHQwztgyGG9sEQQ/tgiKF9MMQwnK3rGxw9xH6/Y3zDt8jrvRVj+Bh5vUcMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDDHEEEMMMcQQQwwxxBBDDP9zw3nkFc/9v7qV2P/FMI82PMzjeI+83nvk9Q7RhgAAAAAAAJ78AvSZcuU8ZeIKAAAAAElFTkSuQmCC"
                  className="homelogo"
                ></img>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="#">
                <img
                  src="https://cdn.bfldr.com/5H442O3W/at/pl55kl-dg5od4-28v85w/Slack_Monochrome_White.png?auto=webp&format=png"
                  className="logo"
                ></img>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="/add">
                <img
                  src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/plus-2-icon-18-256.png"
                  className="addlogo"
                ></img>
              </FooterLink>
            </Heading>
          </Column>
          <Column>
            <FooterLink className="aboutfoot" href="/profile">
              About Us
            </FooterLink>
          </Column>
          <Column>
            <Heading>
              <FooterLink href="/profile/:id">
                <img
                  src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
                  className="profilepic"
                ></img>
              </FooterLink>
              <FooterLink href="#"></FooterLink>
            </Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
