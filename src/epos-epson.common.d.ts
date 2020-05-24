import { Observable } from 'tns-core-modules/data/observable';

export declare class Common extends Observable {
  public message: string;


  constructor() 
  
  public  connect(ip:string) 
  public  addText(text:string) 
  public  disconnect();


  public addTextAlign()
  public beginTransaction() 
  public sendData() 
  public clearCommandBuffer()
  public greet() 
}

export class Utils {
  public static SUCCESS_MSG(): string 
}
