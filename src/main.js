import { Cliente }  from "./cliente.js";
import { Impuestos } from "./impuestos.js";

let impuesto1 = new Impuestos(300000, 1000);
let cliente1 = new Cliente('claudio', impuesto1);


console.log(cliente1.calcularImpuesto());