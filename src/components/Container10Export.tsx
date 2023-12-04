import styled from "styled-components";

const Container10Export = () => {
  return (
    <>
    <Container1>
        <Header>
          <Bg1>
            <BgText>They already love our products 😍</BgText>
          </Bg1>

          <Text1>See what our users say about us</Text1>
        </Header>
      </Container1>

    </>
  )
}

export default Container10Export

const Container1 = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 350px;
`;

const Header = styled.div`
  width: 70%;
  text-align: center;
`;

const Bg1 = styled.div`
  background-color: #f1f2f4;
  border-radius: 20px;
  width: 30%;
  margin: 0 auto;
`;

const BgText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
  padding: 8px 10px;
  text-align: center;
`;

const Text1 = styled.h1`
  font-size: 60px;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  color: #2D2D2D;
`;

