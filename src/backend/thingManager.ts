import {Thing} from "./thing";

export class thingManager {

  private _things:Array<Thing>;
  private _count:number;

  constructor() {
    this._things=new Array<Thing>();
  }


  add(thing:Thing) {
    this._things.push(thing);
    this._count ++;
  }


   inThings(name:String): Thing {
    var found =0;
    this._things.forEach(function(Thing){
      if(Thing.name.toLowerCase()===name.toLowerCase()){
        console.log("i found a match!");
        found =1;
        return (Thing); //this is definitively the problem--it never returns thing
      }

     });
      return null;

  }

  iterateCount(): void{
    this._count ++;
  }
  get count(): number{
    return this._count;
  }

  printall():void{
    this._things.forEach(function(Thing){
      //console.log(Thing.name);
    });
  }
}
