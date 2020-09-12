export class Cliente {
     constructor(nombre , impuesto) {
          this._nombre = () => nombre;
          this._impuesto = () => impuesto;
     }

     get nombre() {
          return this._nombre;
     }

     get impuesto(){
          return this._impuesto;
     }

     set nombre(nuevo_nombre) {
          return (this._nombre = () => nuevo_nombre);
     }

     calcularImpuesto(){
          return ((this.impuesto().monto_bruto_anual() - this.impuesto().deducciones()) * 21) / 100;
     }
}

