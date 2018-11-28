import {getLocaleDateFormat} from "@angular/common";

export class Thing {

  private _attributes:Map<String,any>;
  private _name:string;
  private _count:number;
  private _qualIndex;
  private _datamuseRelated;
  private _datemuseModified;
  private _datemuseModifies;


  constructor(name:string) {
    this._name = name;
    this._count = 0;

    this.setQualIndex();
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

    //allows for testing against guarantted wins and losses
    if(this._name=="plzwin"){
      this._qualIndex=562;
    }
    if(this._name=="plzlose"){
      this._qualIndex=-10000;
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

  get datamuseRelated() {
    return this._datamuseRelated;
  }
  set datamuseRelated(value) {
    this._datamuseRelated = value;
  }
  get datamuseModified(){
    return this._datemuseModified
  }
  set datamuseModified(value){
    this._datemuseModified=value;
  }
  get datamuseModifies(){
    return this._datemuseModifies
  }
  set datamuseModifies(value){
    this._datemuseModifies=value;
  }
  iterateCount(): void{
    this._count ++;
  }
}
