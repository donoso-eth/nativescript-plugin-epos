

export class PrinterCommon {
  printer;


  public  connect(ip:string)
  public  disconnect()
  public addTextAlign()
  public beginTransaction() 
  public sendData()
  public clearCommandBuffer() 
  public  addText(text:string)

}


export class KeyboardCommon {
  keyboard;

  public  connect(ip:string)
  public  disconnect()
  public  startReading()
}