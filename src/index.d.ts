import { PrinterCommon, KeyboardCommon } from "./epos-epson.common";


export declare class PrinterEpson extends PrinterCommon {
    printer;


    public  connect(ip:string)
    public  disconnect()
    public addTextAlign()
    public beginTransaction() 
    public sendData()
    public clearCommandBuffer() 
    public  addText(text:string)
  }

  
export declare class KeyboardEpson extends KeyboardCommon {
    keyboard;

  public  connect(ip:string)
  public  disconnect()
  public  startReading()
  }