export class Thing {

  private _attributes:Map<String,any>;
  private _name:string;
  private _count:number;
  private _qualIndex;

  constructor(name:string) {
    this._name = name;
    this._count = 0;
    this._qualIndex=name.charCodeAt(0)+name.length%10;
    if(name.includes('a')){
      this._qualIndex+=name.lastIndexOf('a');
    }
    if(name.includes('e')){
      this._qualIndex*=name.indexOf('e')%3;
    }
    if(name.includes('i')){
      this._qualIndex+=name.lastIndexOf('i')-5;
    }
    if(name.includes('o')){
      this._qualIndex-=name.indexOf('o')*2;
    }
    if(name.includes('s')){
      this._qualIndex+=name.indexOf('s')-4;
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

  iterateCount(): void{
    this._count ++;
  }
}
