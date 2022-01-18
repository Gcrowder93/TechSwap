import styled from 'styled-components';

export const Box = styled.div`
  padding: 50px 0px;
  background: black;
  position: absolute;
  bottom: -22px;
  width: 100%;
  height: 20px;
  @media (max-width: 1000px) {
    padding: 50px 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  // margin-left: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 30px;
  margin-left: 165px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 7px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: royalBlue;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: -15px;
  font-weight: bold;
`;
