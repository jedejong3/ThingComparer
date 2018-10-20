export class Thing {

  private _attributes:Map<String,any>;
  private _name:String;
  private _count:number;

  constructor(name:String) {
    this._name = name;
    this._count = 0;
  }


  get attributes(): Map<String, any> {
    return this._attributes;
  }

  set attributes(value: Map<String, any>) {
    this._attributes = value;
  }


  get name(): String {
    return this._name;
  }
  get count(): number{
    return this._count;
  }

  iterateCount(): void{
    this._count ++;
  }
}
