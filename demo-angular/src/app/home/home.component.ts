import { Component, OnInit } from "@angular/core";
import { android  } from "tns-core-modules/application";

declare let com: any;


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

        const printerold = new epsonPrinter();

        const printer = new com.epson.epos2.printer.Printer(com.epson.epos2.printer.Printer.TM_T88, com.epson.epos2.printer.Printer.MODEL_ANK, this.context );
       console.log('5)')
        console.log(printer)
        // Init your component properties here.
    }
}
