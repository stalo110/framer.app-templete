"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var tb_1 = require("react-icons/tb");
var facebook_svg_1 = require("../assets/images/facebook.svg");
var twitter_svg_1 = require("../assets/images/twitter.svg");
var linkedin_svg_1 = require("../assets/images/linkedin.svg");
var Footer = function () {
    return (<>
    <Container>
        <div style={{ width: "14%", marginTop: "30px" }}>
        <Logo>
        <Fontwrapper>
          <tb_1.TbTriangleFilled size="15px"/>
        </Fontwrapper>
        <LogoText>Milton</LogoText>
      </Logo>
      <p style={{ color: "#6B6B78" }}>A short text explaining why my startup is so cool</p>
      <p style={{ color: "#6B6B78" }}>© My super start-up</p>

      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginTop: "20px" }}>
    <img src={twitter_svg_1.default} alt=""/>
     <img src={facebook_svg_1.default} alt=""/>
     <img src={linkedin_svg_1.default} alt=""/>

      </div>

        </div>

        <div style={{ width: "7%", marginTop: "60px" }}>
            <h1 style={{ fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600" }}>Products</h1>
            <Para2>Features</Para2>
            <Para2>Testimonials</Para2>
            <Para2>Pricing</Para2>
            <Para2>FAQs</Para2>
            
        </div>

        <div style={{ width: "8%", marginTop: "60px" }}>
        <h1 style={{ fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600" }}>Resources</h1>
            <Para2>Change log</Para2>
            <Para2>Help center</Para2>
            <Para2>Blog</Para2>
            <Para2>Contact</Para2>
        </div>
        
        <div style={{ width: "6%", marginTop: "60px" }}>
        <h1 style={{ fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600" }}>Others</h1>
            <Para2>Privacy</Para2>
            <Para2>Terms</Para2>
            <Para2>Affiliation</Para2>
            <Para2>Press</Para2> 
        </div>
        
        <div style={{ width: "22%", marginTop: "60px" }}>
        <h1 style={{ fontSize: "22px", marginTop: "0px", color: "#2D2D2D", fontWeight: "600" }}>From the blog</h1>
            <Para2>
Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</Para2>
            <Para2>Organizing Your Calendar for Enhanced Productivity and Focus</Para2>
            <Para2>The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</Para2>
            <Para2>Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</Para2> 
        </div>
        








    </Container>
    </>);
};
exports.default = Footer;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ndisplay: flex;\njustify-content: space-evenly;\nbackground: #F1F2F4;\nheight: 450px;\nwidth: 100%;\nmargin-top: 110px;\n"], ["\ndisplay: flex;\njustify-content: space-evenly;\nbackground: #F1F2F4;\nheight: 450px;\nwidth: 100%;\nmargin-top: 110px;\n"])));
var Logo = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n   }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n   }\n"])));
var LogoText = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #2D2D2D;\n  font-weight: 600;\n  margin-left: 5px;\n  font-size: 25px;\n"], ["\n  color: #2D2D2D;\n  font-weight: 600;\n  margin-left: 5px;\n  font-size: 25px;\n"])));
var Fontwrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #ffffff;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"], ["\n  background: #ffffff;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"])));
var Para2 = styled_components_1.default.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\ncolor: #6B6B78;\n\n&:hover {\n\ntext-decoration: underline;\n}\n\n"], ["\ncolor: #6B6B78;\n\n&:hover {\n\ntext-decoration: underline;\n}\n\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
