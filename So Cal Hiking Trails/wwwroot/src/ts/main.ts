/* entry point for the application */

import "../style/reset.scss";
import "../style/style.scss";

import esriConfig = require("esri/config");
esriConfig.request.useIdentity = false;

console.log('hello')