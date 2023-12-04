"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var super_png_1 = require("../assets/images/super.png");
var Container1Export_1 = require("../components/Container1Export");
var Container5Export_1 = require("../components/Container5Export");
var Container4Export_1 = require("../components/Container4Export");
var Container6Export_1 = require("../components/Container6Export");
var Container7Export_1 = require("../components/Container7Export");
var Container8Export_1 = require("../components/Container8Export");
var Container9Export_1 = require("../components/Container9Export");
var Container10Export_1 = require("../components/Container10Export");
var Container11Export_1 = require("../components/Container11Export");
var Container12Export_1 = require("../components/Container12Export");
var Container13Export_1 = require("../components/Container13Export");
var Container14Export_1 = require("../components/Container14Export");
var Body = function () {
    return (<>
      <Container1Export_1.default />
      <Container2>
        <Super1>
          <img src={super_png_1.default} alt="Super" style={{ width: "100%", borderRadius: "20px" }}></img>
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

      <Container4Export_1.default />
      <Container5Export_1.default />
      <Container6Export_1.default />
      <Container7Export_1.default />
      <Container8Export_1.default />
      <Container9Export_1.default />
      <Container10Export_1.default />
      <Container11Export_1.default />
      <Container12Export_1.default />
      <Container13Export_1.default />
      <Container14Export_1.default />



    </>);
};
exports.default = Body;
var Container2 = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"])));
var Super1 = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px 5%;\n  width: 85%;\n  border: 2px solid #f1f2f4;\n  border-radius: 20px;\n"], ["\n  margin: 10px 5%;\n  width: 85%;\n  border: 2px solid #f1f2f4;\n  border-radius: 20px;\n"])));
var Container3 = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 200px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 200px;\n"])));
var Bg2 = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: #f1f2f4;\n  border-radius: 20px;\n  width: 15%;\n  height: 40px;\n"], ["\n  background-color: #f1f2f4;\n  border-radius: 20px;\n  width: 15%;\n  height: 40px;\n"])));
var BgText1 = styled_components_1.default.h1(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: 600;\n  color: #2e2e2e;\n  margin-top: 5px;\n  text-align: center;\n"], ["\n  font-size: 16px;\n  font-weight: 600;\n  color: #2e2e2e;\n  margin-top: 5px;\n  text-align: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
