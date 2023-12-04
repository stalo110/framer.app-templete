import styled from "styled-components";
import January from "../assets/images/january.svg";  
import May from "../assets/images/may.svg"; 
import Feb from "../assets/images/feb.svg"; 
import Graph1 from "../assets/images/graph1.png";
import Graph2 from "../assets/images/graph2.png";
import Graph3 from "../assets/images/graph3.png";

const Container9Export = () => {
  return (
  <>
  <Container style={{display: "flex"}}>
    <Section1>
    <Div1>
        <ImgDiv>
        <img src={January} width={"90%"} style={{marginLeft: "5%"}}/>
        </ImgDiv>
  
    </Div1>
           <Bg1 style={{ background: "#f1f2f4"}}>
            <BgText>Cross-Device Sync</BgText>
          </Bg1>

          <Para>
          Keep your schedule in sync across all your devices, 
          ensuring seamless access to your calendar, events, and tasks wherever you go.
          </Para>
    </Section1>
    <Section1>
    <Div1>
    <ImgDiv>
        <img src={May} width={"110%"}  />
        </ImgDiv>
    </Div1>
        <Bg1 style={{ background:"#FBE8CA"}}>
            <BgText>Auto Event Import</BgText>
          </Bg1>

          <Para>
          Automatically import events from emails, social media, and other sources, 
          so you never miss a beat or have to manually input details.
          </Para>
    </Section1>
    <Section1>
    <Div1>
  

    <ImgDiv>
        <img src={Feb} width={"130%"}  style={{marginLeft: "-10%"}}/>
        </ImgDiv>
    </Div1>

    <Bg1 style={{ background:"#CCEAFC"}}>
            <BgText>Task Delegation</BgText>
          </Bg1>

          <Para>
          Easily assign tasks to team members, family, or friends, promoting
           shared responsibility and seamless collaboration.


          </Para>
    </Section1>
  </Container>


  <Container style={{display: "flex", marginTop: "220px"}}>
    <Section1>
    <Div1>
        <ImgDiv>
        <img src={Graph1} width={"130%"} style={{marginLeft: "-15%"}}/>
        </ImgDiv>
  
    </Div1>
           <Bg1 style={{ background: "#DDF4E4", width: "70%"}}>
            <BgText>Voice Command Integration</BgText>
          </Bg1>

          <Para>
          Quickly create events, set reminders, or reschedule appointments with voice commands, 
          thanks to compatibility with popular virtual assistants.
          </Para>
    </Section1>
    <Section1>
    <Div1>
    <ImgDiv>
        <img src={Graph2} width={"90%"} style={{marginLeft: "5%"}} />
        </ImgDiv>
    </Div1>
        <Bg1 style={{ background:"#FADED6"}}>
            <BgText>Customizable Alerts </BgText>
          </Bg1>

          <Para>
          Personalize notification types and timings for events, tasks, and goals, 
          ensuring you stay on track and informed without feeling overwhelmed.
          </Para>
    </Section1>
    <Section1>
    <Div1>
  

    <ImgDiv>
        <img src={Graph3} width={"100%"}  style={{marginLeft: "0%"}}/>
        </ImgDiv>
    </Div1>

    <Bg1 style={{ background:"#C39CF6"}}>
            <BgText>Privacy Protection</BgText>
          </Bg1>

          <Para>
          Safeguard your personal information and event details with our robust security measures, 
          including end-to-end encryption and optional password protection.


          </Para>
    </Section1>
  </Container>
  </>
  )
}

export default Container9Export

const Container = styled.div`
dipslay: flex;
justify-content: space-evenly;
align-items: center;
margin: 40px 8%;
margin-right: 8%;
`
const Div1 = styled.div`
background-color: #F1F2F4;
height: 300px;
width: 100%;
border-radius: 20px;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
`

const ImgDiv = styled.div`
width: 50%;
`

export const Section1 = styled.section`
height: 300px;
width: 31%;
border-radius: 20px;
height: 250px;
`

const Bg1 = styled.div`
  border-radius: 20px;
  width: 50%;
  margin: 20px 0px;
`;

const BgText = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
  padding: 8px 10px;
  text-align: center;
`;

const Para = styled.p`
  color: #6b6b78;
  font-size: 16px;
  padding: 0px 0px;
  margin-top: -30px;
  line-height: 1.5;
  margin-top: 20px;
`;