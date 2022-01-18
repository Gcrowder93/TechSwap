import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 5px;
  background: black;
  position: absolute;
  top: 1px;
  width: 100%;
  height: 10px;
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
  margin-left: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;
  margin-left: 15px;
  margin-right: 75px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const HeaderLink = styled.a`
  color: #fff;
  margin-bottom: 2px;
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
  margin-bottom: 5px;
  margin-top: -10px;
  font-weight: bold;
`;
