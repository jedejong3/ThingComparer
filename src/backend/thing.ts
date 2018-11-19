import {getLocaleDateFormat} from "@angular/common";
import {Datamuse, Code} from "./datamuse";

export class Thing {

  private _attributes:Map<String,any>;
  private _name:string;
  private _count:number;
  private _qualIndex;
  private _datamuseResponse;

  constructor(name:string) {
    this._name = name;
    this._count = 0;

    this.setQualIndex();

    // store data from datamuse API
    var datamuse = new Datamuse();
    var context = this;
    async function callDatamuse() {
      const response = await datamuse.request(context.name, null, null);
      context.datamuseResponse = response;
      console.log(('datamuseResponse for ' + context.name), context.datamuseResponse);
    }

    callDatamuse().catch(function notOk(err) {
      console.error(err);
    });

  }

  setQualIndex():void{
    var day= new Date().getDay();

    this._qualIndex=this._name.charCodeAt(0)+this._name.length%10;
    console.log(day);
    if(day%2==0){
      this._qualIndex -= 3*this._name.charCodeAt(0)/2;
    }
    if(this._name.includes('a')){
      this._qualIndex+=this._name.lastIndexOf('a');
    }
    if(this._name.includes('e')){
      this._qualIndex*=this._name.indexOf('e')%3;
    }
    if(this._name.includes('i')){
      this._qualIndex+=this._name.lastIndexOf('i')-5;
    }
    if(this._name.includes('o')){
      this._qualIndex-=this._name.indexOf('o')*2;
    }
    if(this._name.includes('s')){
      this._qualIndex+=this._name.indexOf('s')-4;
    }
  }

  get attributes(): Map<String, any> {
    return this._attributes;
  }

  set attributes(value: Map<String, any>) {
    this._attributes = value;
  }

  get name(): string {
    return this._name;
  }
  get count(): number{
    return this._count;
  }
  get qualIndex():number{
    return this._qualIndex;
  }

  get datamuseResponse() {
    return this._datamuseResponse;
  }
  set datamuseResponse(value) {
    this._datamuseResponse = value;
  }

  iterateCount(): void{
    this._count ++;
  }
}
