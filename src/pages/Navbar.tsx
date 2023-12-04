import styled from "styled-components";
import { TbTriangleFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <Fontwrapper>
          <TbTriangleFilled size="15px" />
        </Fontwrapper>
        <LogoText>Milton</LogoText>
      </Logo>
      <Navlist>
        <ul>
          <li>Features</li>
          <li>Testimonia</li>
          <li>Pricing</li>
          <li>FAQs</li>
          <li>Blog</li>
        </ul>
      </Navlist>
      <Buttonlist>
    <Button>Login</Button>
    <Button1>Get Started</Button1>

      </Buttonlist>
    </Wrapper>
  
  );
};

export default Navbar;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 13px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #FEF9F6

`;

const Logo = styled.div`
  display: flex;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
   }
`;

const LogoText = styled.div`
  color: #2e2e2e;
  font-weight: bold;
  margin-left: 5px;
`;

const Fontwrapper = styled.div`
  background: #f1f2f4;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Navlist = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;
    li {
      margin-right: 40px;
      color: #6b6b78;
      font-weight: 600;

      &:hover {
       text-decoration: underline;
       color: #2e2e2e;
       cursor: pointer;
      }
    }
  }
`;


const Buttonlist = styled.div``;

const Button = styled.button`
  background: #F1F2F4;
  color: black;
  font-size: 17px;
  font-weight: 400;
  padding: 0px 18px;
  height: 40px;
  border:none;
  border-radius: 15px;
  margin-top: 10px;
  margin-right: 7px;

  &:hover {
    font-size: 19px;
    cursor: pointer;
  }
`;

const Button1 = styled.button`
  background: #2E2E2E;
  color: white;
  padding: 0px 18px;
  font-size: 17px;
  font-weight: 400;
  height: 40px;
  border:none;
  border-radius: 15px;
  margin-top: 10px;

  &:hover {
    font-size: 19px;
    cursor: pointer;
  }
`;
