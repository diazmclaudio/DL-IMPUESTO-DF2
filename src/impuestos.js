export class Impuestos {
     constructor(monto_bruto_anual, deducciones) {
          this._monto_bruto_anual = () => monto_bruto_anual;
          this._deducciones = () => deducciones;
     }

     get monto_bruto_anual() {
          return this._monto_bruto_anual;
     }

     get deducciones() {
          return this._deducciones;
     }

     set monto_bruto_anual(nvo_monto_bruto_anual) {
          return (this._monto_bruto_anual = () => nvo_monto_bruto_anual);
     }

     set deducciones(nvo_deducciones) {
          return (this._deducciones = () => nvo_deducciones);
     }

}