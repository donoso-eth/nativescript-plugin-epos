import { Common } from './epos-epson.common';
import { android  } from "tns-core-modules/application";
declare let com: any;
const Printer: any = com.epson.epos2.printer.Printer;



export class EposEpson  {

     printer:any;
     context: any;

      constructor(){
       
        this.context = android.context;

   

        this.printer = new Printer(Printer.TM_M30, Printer.MODEL_ANK, this.context );
      }

      disconnect(){
        this.printer.disconnect()
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

      beginTransaction() {
      this.printer.beginTransaction()
      }

      sendData()  {
        this.printer.sendData(Printer.PARAM_DEFAULT);
      }


      public greet() {
        return "Hello, pachin pachin pachin";
      }

  

}
