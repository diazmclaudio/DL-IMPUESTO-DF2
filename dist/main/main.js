"use strict";

var _cliente = require("./cliente.js");

var _impuestos = require("./impuestos.js");

var impuesto1 = new _impuestos.Impuestos(300000, 1000);
var cliente1 = new _cliente.Cliente('claudio', impuesto1);
console.log(cliente1.calcularImpuesto());