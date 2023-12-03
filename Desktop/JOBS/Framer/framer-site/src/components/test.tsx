import styled, { keyframes } from 'styled-components';
import Image1 from "../assets/images/img1.png";
import { TiStar } from "react-icons/ti";
// import Image2 from "../assets/images/img2.png";
// import Image3 from "../assets/images/img3.png";
// import Image4 from "../assets/images/img4.png";
// import Image5 from "../assets/images/img5.png";

const Container11Export = () => {
  return (
    <Container1>
      <h1>3764732g3fvewfewyfgjghvhjvh,jvnn,jjjferegbevb</h1>  
{/* <Box>
<Top>
<div style={{display: "flex", background: "red", width: "60%"}} >
<img  src={Image1}/> 
<h1 style={{fontSize: "15px"}}>“The best time manager app”</h1>
</div>
<GroupStar>
    <h1>Hello</h1>
  </GroupStar>

</Top>
</Box>


<Box>
Container11Export 
</Box>

<Box>
Container11Export
</Box> */}


    </Container1>


  )
}

export default Container11Export

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Container1 = styled.div`
   display: flex;
  background: red;
  width: 200px;
//   animation: ${moveRight} 20s linear infinite;
`;

const Box = styled.div`
background: white;
width: 30%;
height 300px;
margin-left: 10px
`

const Top = styled.div`
display flex;
flex-direction: row;
justify-content: space-evenly;
background: blue;
`

const GroupStar = styled.div`
background: yellow;
width: 20%;
display: flex;
margin: 30px 0px 0px 0px;
position: relative;
right: 5px;
  
`;