import styled from 'styled-components';
import {Button1} from './Container1Export';
import Ceo from "../assets/images/ceo.png";

const Container14Export = () => {
  return (
   <>
    <Container1>
        <Header>
          <Bg1>
            <BgText>Last call Baby! 🚀</BgText>
          </Bg1>
          <Text1>Ready to start?</Text1>
          <Para>
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.
          </Para>
          <Button1>Get started, it's free</Button1>

          <div style={{display: "flex", marginTop: "50px", marginLeft: "70px"}}>
           <div style={{width:"15%", marginTop: "50px" }}>
           <img src={Ceo} width={"80%"}/>
           </div>
           <div style={{background: "#FCE9CB", margin: "-10px -10px", width: "53%", borderRadius: "15px 15px 15px 5px", height:"110px"}}>
            <p style={{color:"black", padding: "0px 15px", textAlign: "left" }}>I never missed a call again, the AI-drivenfeature is a game changer for me! </p>
            <p style={{color:"#90909E", padding: "0px 15px", textAlign: "left" }}>Adam, Solo founder </p>
           </div>
          </div>
        </Header>
      </Container1>
   </>
  )
}

export default Container14Export
const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

const Header = styled.div`
  width: 52%;
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
  font-size: 55px;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  color: #2d2d2d;
`;

const Para = styled.p`
  color: #6b6b78;
  font-size: 20px;
  text-align: center;
  padding: 0px 60px;
  margin-top: 30px;
  line-height: 1.5;
`;