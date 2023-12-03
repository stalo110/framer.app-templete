import styled from "styled-components";
import Calender2 from "../assets/images/cal2.png";
import Bald from "../assets/images/bald.png";



const Container5Export = () => {
  return (
 <>
      <Container4>
      <Part2 >
            <img src={Calender2} width={"100%"} />
        </Part2>

        <Part1 >
        <div
          style={{
            background: "#CCEAFC",
            borderRadius: "20px",
            height: "40px",
            width:"37%"
          }}
        >
          <h1 style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "500" }}>
          Smart Reminders & Task
          </h1>
        </div>
        <h1 style={{fontSize: "40px", fontWeight: "600" }}>
        Never miss an important deadline or event again
          </h1>

          <p style={{fontSize: "21px", fontWeight: "400", color: "#71717E", padding: "45px 0px", lineHeight: "30px"}} >
          Never miss an important deadline again with our AI-driven  notifications. Our app intelligently 
          analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.
          </p>

          <div style={{display: "flex", marginLeft: "25%", marginRight: "-170px", position: "relative", right: "0px"}}>
           <div style={{background: "#2E2E2E", margin: "-10px 0px", width: "70%", borderRadius: "15px 15px 5px 15px", height:"110px"}}>
            <p style={{color:"#FEFEFE", padding: "0px 15px" }}>I love how user-friendly this app is! It's so easy to add events and set reminders!</p>
            <p style={{color:"#90909E", padding: "0px 15px" }}>Adam, entrepreneur </p>
           </div>
           <div style={{width:"50%", marginTop: "50px" , marginRight: "0px" }}>
           <img src={Bald} width={"40%"}/>
           </div>
          </div>
        </Part1>
       
      </Container4>
 </>
  )
}

export default Container5Export

const Container4 = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 200px;
`;

const Part1 = styled.div`
// background: red;
 margin-right: 8%;
 width: 43%;
`;

const Part2 = styled.div`
// background: blue;
width: 40%;
margin-left: 8%;
`;
