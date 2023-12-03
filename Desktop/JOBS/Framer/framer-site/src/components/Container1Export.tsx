import styled from "styled-components";
import Image1 from "../assets/images/img1.png";
import Image2 from "../assets/images/img2.png";
import Image3 from "../assets/images/img3.png";
import Image4 from "../assets/images/img4.png";
import Image5 from "../assets/images/img5.png";
import { TiStar } from "react-icons/ti";

const Container1Export = () => {
  return (
    <>
    <Container1>
        <Header>
          <Bg1>
            <BgText>An other way to manage time️</BgText>
          </Bg1>

          <Text1>Your new favorite calendar 🗓️ app</Text1>
          <Para>
            Here you should explain how cool your app is. Remember, focus on the
            benefits for your users, not on the features.
          </Para>
          <Button1>Get started, it's free</Button1>
          <Para1>Free 14 days trials,no credit card needed</Para1>
          <ParentImage>
            <GroupImage>
              <img src={Image1} alt="Img1"></img>
              <img src={Image2} alt="Img1"></img>
              <img src={Image3} alt="Img1"></img>
              <img src={Image4} alt="Img1"></img>
              <img src={Image5} alt="Img1"></img>
            </GroupImage>
            <Group1>
              <GroupStar>
                <TiStar size="25px" color="#F9C84A" />
                <TiStar size="25px" color="#F9C84A" />
                <TiStar size="25px" color="#F9C84A" />
                <TiStar size="25px" color="#F9C84A" />
                <TiStar size="25px" color="#F9C84A" />
                <ParaStar>5.0</ParaStar>
              </GroupStar>
              <P1>From 200+ happy users</P1>
            </Group1>
          </ParentImage>
        </Header>
      </Container1>

    </>
  )
}

export default Container1Export

const Container1 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

const Header = styled.div`
  width: 50%;
  text-align: center;
`;

const Bg1 = styled.div`
  background-color: #f1f2f4;
  border-radius: 20px;
  width: 37%;
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
  font-size: 80px;
  margin-top: -20px;
  text-align: center;
`;

const Para = styled.p`
  color: #6b6b78;
  font-size: 20px;
  text-align: center;
  padding: 0px 60px;
  margin-top: -30px;
  line-height: 1.5;
`;

const Para1 = styled.p`
  color: #6b6b78;
  font-size: 12px;
  text-align: center;
  padding: 0px 60px;
  line-height: 1.5;
  margin-top: 8px;
`;

export const Button1 = styled.button`
  background: #2e2e2e;
  color: white;
  padding: 18px 30px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 15px;
  margin-top: 8px;

  &:hover {
    font-size: 19px;
    cursor: pointer;
  }
`;

const GroupImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    margin-left: -15px;
    z-index: 10;
    border: 3px solid white;
  }
`;

const ParentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ParaStar = styled.p`
  font-weight: 600;
  margin-left: 5px;
`;

const Group1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-left: -5px;
`;

const P1 = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #6b6b78;
  margin-left: 20px;
  margin-top: -10px;
`;