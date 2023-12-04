import styled from "styled-components";
import Super from "../assets/images/super.png";
import Container1Export from "../components/Container1Export";
import Container5Export from "../components/Container5Export";
import Container4Export from "../components/Container4Export";
import Container6Export from "../components/Container6Export";
import Container7Export from "../components/Container7Export";
import Container8Export from "../components/Container8Export";
import Container9Export from "../components/Container9Export";
import Container10Export from "../components/Container10Export";
import Container11Export from "../components/Container11Export";
import Container12Export from "../components/Container12Export";
import Container13Export from "../components/Container13Export";
import Container14Export from "../components/Container14Export";


const Body = () => {
  return (
    <>
      <Container1Export/>
      <Container2>
        <Super1>
          <img
            src={Super}
            alt="Super"
            style={{ width: "100%", borderRadius: "20px" }}
          ></img>
        </Super1>
      </Container2>

      <Container3>
        <Bg2>
          <BgText1>Our main features 🦸🏼</BgText1>
        </Bg2>

        <h1 style={{ fontSize: "55px", fontWeight: "600", marginTop: "10px" }}>
          Discover your new superpowers
        </h1>
      </Container3>

      <Container4Export />
      <Container5Export />
      <Container6Export/>
      <Container7Export/>
      <Container8Export/>
      <Container9Export/>
      <Container10Export/>
      <Container11Export/>
      <Container12Export/>
      <Container13Export/>
      <Container14Export/>



    </>
  );
};

export default Body;



const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Super1 = styled.div`
  margin: 10px 5%;
  width: 85%;
  border: 2px solid #f1f2f4;
  border-radius: 20px;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Bg2 = styled.div`
  background-color: #f1f2f4;
  border-radius: 20px;
  width: 15%;
  height: 40px;
`;

const BgText1 = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
  margin-top: 5px;
  text-align: center;
`;
