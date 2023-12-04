"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var tb_1 = require("react-icons/tb");
var Navbar = function () {
    return (<Wrapper>
      <Logo>
        <Fontwrapper>
          <tb_1.TbTriangleFilled size="15px"/>
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
    </Wrapper>);
};
exports.default = Navbar;
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 13px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background: #FEF9F6\n\n"], ["\n  display: flex;\n  justify-content: space-around;\n  border-bottom: 1px solid #e5e5e5;\n  padding-bottom: 13px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  background: #FEF9F6\n\n"])));
var Logo = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n   }\n"], ["\n  display: flex;\n  margin-top: 20px;\n\n  &:hover {\n    cursor: pointer;\n   }\n"])));
var LogoText = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #2e2e2e;\n  font-weight: bold;\n  margin-left: 5px;\n"], ["\n  color: #2e2e2e;\n  font-weight: bold;\n  margin-left: 5px;\n"])));
var Fontwrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #f1f2f4;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"], ["\n  background: #f1f2f4;\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n"])));
var Navlist = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 20px;\n    li {\n      margin-right: 40px;\n      color: #6b6b78;\n      font-weight: 600;\n\n      &:hover {\n       text-decoration: underline;\n       color: #2e2e2e;\n       cursor: pointer;\n      }\n    }\n  }\n"], ["\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 20px;\n    li {\n      margin-right: 40px;\n      color: #6b6b78;\n      font-weight: 600;\n\n      &:hover {\n       text-decoration: underline;\n       color: #2e2e2e;\n       cursor: pointer;\n      }\n    }\n  }\n"])));
var Buttonlist = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
var Button = styled_components_1.default.button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: #F1F2F4;\n  color: black;\n  font-size: 17px;\n  font-weight: 400;\n  padding: 0px 18px;\n  height: 40px;\n  border:none;\n  border-radius: 15px;\n  margin-top: 10px;\n  margin-right: 7px;\n\n  &:hover {\n    font-size: 19px;\n    cursor: pointer;\n  }\n"], ["\n  background: #F1F2F4;\n  color: black;\n  font-size: 17px;\n  font-weight: 400;\n  padding: 0px 18px;\n  height: 40px;\n  border:none;\n  border-radius: 15px;\n  margin-top: 10px;\n  margin-right: 7px;\n\n  &:hover {\n    font-size: 19px;\n    cursor: pointer;\n  }\n"])));
var Button1 = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background: #2E2E2E;\n  color: white;\n  padding: 0px 18px;\n  font-size: 17px;\n  font-weight: 400;\n  height: 40px;\n  border:none;\n  border-radius: 15px;\n  margin-top: 10px;\n\n  &:hover {\n    font-size: 19px;\n    cursor: pointer;\n  }\n"], ["\n  background: #2E2E2E;\n  color: white;\n  padding: 0px 18px;\n  font-size: 17px;\n  font-weight: 400;\n  height: 40px;\n  border:none;\n  border-radius: 15px;\n  margin-top: 10px;\n\n  &:hover {\n    font-size: 19px;\n    cursor: pointer;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
