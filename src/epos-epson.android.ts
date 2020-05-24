import { Common } from './epos-epson.common';
import { android  } from "tns-core-modules/application";
declare let com: any;
const Printer: any = com.epson.epos2.printer.Printer;



export class EposEpson extends Common {

     printer:any;
    context: any;

      constructor(){
        super();
        this.context = android.context;
        this.printer = new Printer(Printer.TM_M30, Printer.MODEL_ANK, this.context );
      }

      private connect(){

      }

      addText(){
          
      }


      public greet() {
        return "Hello, pachin pachin pachin";
      }

  

}
