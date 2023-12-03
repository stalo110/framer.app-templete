import styled from 'styled-components'
import { TbTriangleFilled } from "react-icons/tb";
import Facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import Linkedin from "../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <>
    <Container>
        <div style={{width: "14%", marginTop: "30px"}}>
        <Logo>
        <Fontwrapper>
          <TbTriangleFilled size="15px" />
        </Fontwrapper>
        <LogoText>Milton</LogoText>
      </Logo>
      <p style={{color: "#6B6B78"}}>A short text explaining why my startup is so cool</p>
      <p style={{color: "#6B6B78"}}>© My super start-up</p>

      <div style={{display: "flex", justifyContent: "space-between", width: "80%", marginTop: "20px"}}>
    <img src={Twitter} alt="" />
     <img src={Facebook} alt="" />
     <img src={Linkedin} alt="" />

      </div>

        </div>

        <div style={{width: "7%", marginTop: "60px"}}>
            <h1 style={{fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600"}}>Products</h1>
            <Para2>Features</Para2>
            <Para2>Testimonials</Para2>
            <Para2>Pricing</Para2>
            <Para2>FAQs</Para2>
            
        </div>

        <div style={{width: "8%", marginTop: "60px"}}>
        <h1 style={{fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600"}}>Resources</h1>
            <Para2>Change log</Para2>
            <Para2>Help center</Para2>
            <Para2>Blog</Para2>
            <Para2>Contact</Para2>
        </div>
        
        <div style={{width: "6%", marginTop: "60px"}}>
        <h1 style={{fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600"}}>Others</h1>
            <Para2>Privacy</Para2>
            <Para2>Terms</Para2>
            <Para2>Affiliation</Para2>
            <Para2>Press</Para2> 
        </div>
        
        <div style={{width: "22%", marginTop: "60px"}}>
        <h1 style={{fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600"}}>From the blog</h1>
            <Para2>
Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</Para2>
            <Para2>Organizing Your Calendar for Enhanced Productivity and Focus</Para2>
            <Para2>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</Para2>
            <Para2>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</Para2> 
        </div>
        








    </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
display: flex;
justify-content: space-evenly;
background: #F1F2F4;
height: 450px;
width: 100%;
margin-top: 110px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
   }
`;

const LogoText = styled.div`
  color: #2D2D2D;
  font-weight: 600;
  margin-left: 5px;
  font-size: 25px;
`;
const Fontwrapper = styled.div`
  background: #ffffff;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Para2 = styled.p`
color: #6B6B78;

&:hover {

text-decoration: underline;
}

`
