import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BiSolidMinusCircle } from 'react-icons/bi';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FaqContainer>
      <FaqHeader onClick={toggleAccordion}>
        {question}
        {isOpen ? <BiSolidMinusCircle  color={"#CACAD1"} size={"30px"} /> : <BsFillPlusCircleFill color={"#CACAD1"} size={"25px"} />}
      </FaqHeader>
      {isOpen && <FaqAnswer>{answer}</FaqAnswer>}
    </FaqContainer>
  );
};

const Container13Export: React.FC = () => {
  return (
    <>
      <Container1>
        <Header>
          <Bg1>
            <BgText>Relevant stuff, bla bla 📣</BgText>
          </Bg1>
          <Text1>Frequently asked questions</Text1>
        </Header>
      </Container1>

      <Container2>          
          <Faqs>
           <FaqItem
            question="Can I cancel my subscription?"
            answer="You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. 
            You won’t be locked out of any projects that have paid plans."
          />
          </Faqs>

          <Faqs>
           <FaqItem
            question="What happens when my trial ends?"
            answer="When your trial period ends, your account will automatically be downgraded to our free plan, 
            with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, 
            ensuring a seamless transition as you move forward with our SaaS platform."
          />
          </Faqs>

          <Faqs>
           <FaqItem
            question="What payment methods do you offer?"
            answer="We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, 
                     American Express, and Discover), PayPal, and bank transfers."
          />
          </Faqs>

          <Faqs>
           <FaqItem
            question="What is your refund policy?"
            answer="Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. 
            To initiate the refund process, please contact our support team through the 'Help' section in your account or email us at support@Milton.com, 
            and we'll be happy to assist you."
          />
          </Faqs>

          <Faqs>
           <FaqItem
            question="Do you offer discounts to educational institutions ?"
            answer="Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. 
            Please reach out to our sales team at sales@Milton.com with your institution's details, 
            and we will provide you with more information on our exclusive educational pricing options."
          />
          </Faqs>
            
      </Container2>
    </>
  );
};

export default Container13Export;

const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

const Header = styled.div`
  width: 70%;
  text-align: center;
`;

const Bg1 = styled.div`
  background-color: #f1f2f4;
  border-radius: 20px;
  width: 22%;
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

const Container2 = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15%;
  margin-top: 20px;
`;

const Faqs = styled.div`
  width: 95%;
  margin-left: 2.5%;
  border-radius: 15px;
  background-color: #f1f2f4;
  height: fit-content;
  margin-top: 40px;
  padding: 5px 20px;
  color: #6B6B78;
`;

const FaqContainer = styled.div`
  margin-bottom: 10px;
`;

const FaqHeader = styled.h1`
  font-size: 21px;
  font-weight: 600;
  color: #2d2d2d;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const FaqAnswer = styled.p`
  font-size: 16px;
  color: #2d2d2d;
`;
