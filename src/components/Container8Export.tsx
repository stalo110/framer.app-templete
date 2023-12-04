import styled from "styled-components";

const Container8Export = () => {
  return (
    <>
    <Container1>
        <Header>
          <Bg1>
            <BgText>And so much more... 💼</BgText>
          </Bg1>

          <Text1>Our features to make your life easier</Text1>
        </Header>
      </Container1>

    </>
  )
}

export default Container8Export

const Container1 = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

const Header = styled.div`
  width: 70%;
  text-align: center;
`;

const Bg1 = styled.div`
  background-color: #f1f2f4;
  border-radius: 20px;
  width: 25%;
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

