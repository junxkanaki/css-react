import styled from "styled-components";

export const StyledComponets = () => {
  return (
    <Container>
      <Title>- Styled Components</Title>
      <Button>FIGHT!!</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #00fff0;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: #abedd8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
