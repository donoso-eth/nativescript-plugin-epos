import { Component, OnInit } from "@angular/core";
import { android  } from "tns-core-modules/application";
import { PrinterEpson,KeyboardEpson} from 'nativescript-epos-epson';



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    printer: PrinterEpson;
    keyboard: KeyboardEpson

    constructor() {

        this.keyboard = new KeyboardEpson()
        this.printer = new PrinterEpson()
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

        this.printer.connect("TCP:192.168.0.157");
       // this.printer.sendData()
       // this.printer.sendData();
    }

    disconnect(){
        this.printer.printer.disconnect()
    }



    connectKeyboard(){
        this.keyboard.connect("TCP:192.168.0.157[HID2]")

    }

    startListening() {
    let barcode = ""
     this.keyboard.result$.subscribe(x=> {
        if (x['code'] == 13 ) {
            console.log(barcode)
            barcode = ""
            return
        }

        barcode = barcode + x['text'];

     })
    }


    disconnectKeyboard() {
        this.keyboard.disconnect()
    }

    ngOnInit(): void {




        }
    }
