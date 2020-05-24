import { Component, OnInit } from "@angular/core";
import { android  } from "tns-core-modules/application";

declare let com: any;
// declare let  EPOS_Exveption = com.epson.epos2.Epos2Exception;
// declare let  EPOS_Printer = com.epson.epos2.printer.Printer
// declare let  com.epson.epos2.Log;
// declare let  com.epson.epos2.discovery.DeviceInfo;
// declare let  com.epson.epos2.discovery.Discovery;
// declare let  com.epson.epos2.discovery.DiscoveryListener;
// declare let  com.epson.epos2.discovery.FilterOption;

export class epsonPrinter {}

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    context: any;

    constructor() {
        this.context = android.context;
        // Use the component constructor to inject providers.
    }




    ngOnInit(): void {

        let listen = new com.epson.epos2.discovery.DiscoveryListener( (device)=> {
            console.log(device)
        })
        console.log(35)
        try {

        const printer = new com.epson.epos2.printer.Printer(com.epson.epos2.printer.Printer.TM_M30, com.epson.epos2.printer.Printer.MODEL_ANK, this.context );
       console.log('5)')
        console.log(printer)
        console.log(6);

       printer.setReceiveEventListener(this.context);
        //   printer.setStatusChangeEventListener(this.context);
            console.log(7);
        //     printer.setInterval(3000);
        //     printer.startMonitor();




            printer.addTextAlign(com.epson.epos2.printer.Printer.ALIGN_CENTER);
           printer.addText("Hello World");
           console.log(8);

           printer.connect("TCP:192.168.0.16", com.epson.epos2.printer.Printer.PARAM_DEFAULT);

           printer.addTextAlign(com.epson.epos2.printer.Printer.ALIGN_CENTER);
           printer.addText("Hello World");
           printer.beginTransaction();
           printer.addText("Hello World!\n");
           printer.sendData(com.epson.epos2.printer.Printer.PARAM_DEFAULT);

        } catch (error) {
            console.log(error)
            const b = error



       console.log(error)


        }


    }
    mDiscoveryListener(){
        console.log('hola')
    }
}
