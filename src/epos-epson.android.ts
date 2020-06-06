import {  } from "./epos-epson.common";
import { android } from "tns-core-modules/application";
import { Subject } from 'rxjs';
import { PrinterCommon,KeyboardCommon } from "./epos-epson.common";
declare let com: any;
const Printer: any = com.epson.epos2.printer.Printer;
const Keyboard:any = com.epson.epos2.keyboard.Keyboard;

export class PrinterEpson implements PrinterCommon {
  printer: com.epson.epos2.printer.Printer;
  context: any;
  connectionListener: any;




  constructor() {
    this.context = android.context;
    
    const myListener = new com.epson.epos2.printer.ReceiveListener({
      onPtrReceive: (param0, parm1, param2, param3) => {
        const info: com.epson.epos2.printer.PrinterStatusInfo = param2;

      },
    });

    const statusListener = new com.epson.epos2.printer.StatusChangeListener({
      onPtrStatusChange: (param0, param1) => {
        console.log("status: " + param1);

      },
    });

    this.connectionListener = new com.epson.epos2.ConnectionListener({
      onConnection: (param0, param1) => {
        console.log("connection: " + param1);
      },
    });

    



    this.printer = new Printer(Printer.TM_M30, Printer.MODEL_ANK, this.context);
    this.printer.setReceiveEventListener(myListener);
    this.printer.setConnectionEventListener(
      new com.epson.epos2.ConnectionListener({
        onConnection: (param0, param1) => {
          console.log("connection: " + param1);
        },
      })
    );

    this.printer.setStatusChangeEventListener(statusListener);
  }

  disconnect() {
    this.printer.stopMonitor();
    this.printer.disconnect();
  }

  connect(IP: string) {
    //"TCP:192.168.0.16"

    if (this.printer.getStatus().getOnline() !== -3) {
      console.log("already connected");
      return;
    }

    try {
      this.printer.connect(IP, Printer.PARAM_DEFAULT);
      const bb: com.epson.epos2.printer.PrinterStatusInfo = this.printer.getStatus();

      console.log(bb.getOnline());

      this.printer.setInterval(1000);
      this.printer.startMonitor();
    } catch (error) {
      const myError: com.epson.epos2.Epos2Exception = error;
      console.log(myError);
    }
  }

  addTextAlign() {
    this.printer.addTextAlign(Printer.ALIGN_CENTER);
  }

  addText(text) {
    this.printer.addText(text);
  }

  beginTransaction() {
    this.printer.beginTransaction();
  }

  sendData() {
    this.printer.sendData(Printer.PARAM_DEFAULT);
  }

  clearCommandBuffer() {
    this.printer.clearCommandBuffer();
  }


}


export class KeyboardEpson implements KeyboardCommon {
  keyboardListener: any;
  keyboard: com.epson.epos2.keyboard.Keyboard;
  context: any;
  result$ = new Subject()//<{ code: string, text:string};
 
  constructor() {

    this.context = android.context;
    
    this.keyboard = new Keyboard(this.context)
   // this.result$.subscribe(x=> console.log(x))
   
    this.keyboardListener = new com.epson.epos2.keyboard.KeyPressListener({
      onKbdKeyPress: (param0, param1, param2 ) => {
          //console.log(param1)
      //     console.log(this.barcode.length)
      //     console.log(this.barcode)
      //  this.barcode = this.barcode + param2
      //     console.log(param1);
      //     console.log(param1.length)
     //   console.log(param2,param1)
          this.result$.next({code:param1, text:param2})
          // if (param1 == 13){
          //   console.log('finish')
       
          //   this.barcode =""
          // }
        
      }
  
    })
    
    this.keyboard.setKeyPressEventListener(this.keyboardListener)


  }
  

  startReading() {
    return this.result$
  }

  disconnect() {
    this.keyboard.setKeyPressEventListener(null);
    this.keyboard.disconnect();

  }

  connect(IP:string){
    const IPT =  "TCP:192.168.0.157[HID2]"
    this.keyboard.connect(IP, Keyboard.PARAM_DEFAULT);
}




}