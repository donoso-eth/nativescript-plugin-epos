import { Observable } from "rxjs";


export class PrinterCommon {
  printer;
  constructor() {
  }

  public  connect(ip:string) {}
  public  disconnect() {}
  public addTextAlign() { }
  public beginTransaction() { }
  public sendData() {  }
  public clearCommandBuffer() {   }
  public  addText(text:string) {}

}


export class KeyboardCommon {
  keyboard;
  constructor() {
  }
  public  connect(ip:string) {}
  public  disconnect() {}
  public  startReading() {}
}