export class Thing {

  private _attributes:Map<String,any>;
  private _name:String;

  constructor(name:String) {
    this._name = name;
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
}
