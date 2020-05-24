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

      connect( IP:string ){
          //"TCP:192.168.0.16"
        this.printer.connect(IP, Printer.PARAM_DEFAULT);
      }

     addTextAlign(){
        this.printer.addTextAlign(Printer.ALIGN_CENTER)
      }

      addText(text){
          this.printer.addText(text)
      }


      public greet() {
        return "Hello, pachin pachin pachin";
      }

  

}
