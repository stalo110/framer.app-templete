"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Body_1 = require("./pages/Body");
var Footer_1 = require("./pages/Footer");
var Navbar_1 = require("./pages/Navbar");
function App() {
    return (<>
      <Navbar_1.default />
      <Body_1.default />
      <Footer_1.default />
    </>);
}
exports.default = App;
