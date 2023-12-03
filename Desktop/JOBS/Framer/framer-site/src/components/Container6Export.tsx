import styled from "styled-components";
import Calender3 from "../assets/images/cal3.png";
import Girl from "../assets/images/girl.png";


const Container6Export = () => {
  return (
 <>
      <Container4>
        <Part1 >
        <div
          style={{
            background: "#DDF4E4",
            borderRadius: "20px",
            height: "40px",
            width:"36%"
          }}
        >
          <h1 style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "500" }}>
            Seamless Scheduling
          </h1>
        </div>
        <h1 style={{fontSize: "40px", fontWeight: "600" }}>
        Focus on what matters most for you
          </h1>

          <p style={{fontSize: "21px", fontWeight: "400", color: "#71717E", padding: "45px 0px", lineHeight: "30px"}} >
          Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, 
          import events from emails, and add participants with just a few clicks.
          </p>

          <div style={{display: "flex"}}>
           <div style={{width:"15%", marginTop: "50px" }}>
           <img src={Girl} width={"100%"}/>
           </div>
           <div style={{background: "#2E2E2E", margin: "-10px 0px", width: "60%", borderRadius: "15px 15px 15px 5px", height:"150px"}}>
            <p style={{color:"#FEFEFE", padding: "0px 15px" }}>I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.</p>
            <p style={{color:"#90909E", padding: "0px 15px" }}>Annie, Designer </p>
           </div>
          </div>
        </Part1>
        <Part2 >
            <img src={Calender3} width={"100%"} />
        </Part2>
      </Container4>
 </>
  )
}

export default Container6Export


const Container4 = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Part1 = styled.div`
// background: red;
margin-left: 8%;
 width: 40%;
`;

const Part2 = styled.div`
// background: blue;
width: 40%;
margin-right: 8%;
`;