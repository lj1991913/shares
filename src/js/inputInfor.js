require('../css/index.less');
require("expose-loader?$!jquery"); 

let selectCity = require('./module/selectCity/selectCity.js'); //城市选择
let s = new selectCity.SelectCity();
