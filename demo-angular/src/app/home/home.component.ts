import { Component, OnInit } from "@angular/core";
import { android  } from "tns-core-modules/application";
import { EposEpson } from 'nativescript-epos-epson';
// declare let com: any;
// declare let  EPOS_Exveption = com.epson.epos2.Epos2Exception;
// declare let  EPOS_this.Printer = com.epson.epos2.this.printer.this.Printer
// declare let  com.epson.epos2.Log;
// declare let  com.epson.epos2.discovery.DeviceInfo;
// declare let  com.epson.epos2.discovery.Discovery;
// declare let  com.epson.epos2.discovery.DiscoveryListener;
// declare let  com.epson.epos2.discovery.FilterOption;



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    context: any;
    printer: EposEpson;

    constructor() {
        this.context = android.context;

        this.printer = new EposEpson()
        // Use the component constructor to inject providers.
    }


    print() {

        console.log(35)
        try {




        // this.printer.addTextAlign(com.epson.epos2.this.printer.this.Printer.ALIGN_CENTER);
         this.printer.addText("Hello World   ya estoy qui");

        // console.log(8);



         this.printer.addTextAlign();
         this.printer.sendData();
         //this.printer.beginTransaction()
        // this.printer.disconnect();

        } catch (error) {
            console.log(error)

        }

    }


    connect(){

        this.printer.connect("TCP:192.168.0.16");
       // this.printer.sendData()
       // this.printer.sendData();
    }

    disconnect(){
        this.printer.printer.disconnect()
    }

        ngOnInit(): void {




        }
    mDiscoveryListener(){
        console.log('hola')
    }
}
