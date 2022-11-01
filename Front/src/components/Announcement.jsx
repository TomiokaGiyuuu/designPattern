import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #a8802d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! 50% Discount</Container>;
};

export default Announcement;
