import {Thing} from "./thing";

/*
The thingManager class stores all of the Thing objects and provides functions to search for Things of a given name
within the array.
 */
export class thingManager {

  private _things: Array<Thing>;
  private _count: number;

  constructor() {
    this._things = new Array<Thing>();
  }

//adds a Thing object to the array of Things
  add(thing: Thing) {
    this._things.push(thing);
    this._count++;
  }

//searches the array for a Thing by its name, and returns the Thing if it exists, else returns null
  inThings(name: String): Thing {
    var found = null;
    this._things.forEach(function (Thing, index, array) {
      if (Thing.name.toLowerCase() === name.toLowerCase()) {
        found = Thing;
        return (found);

      }

    });
    return found;

  }

  //iterates the count of how many Things are in the array
  iterateCount(): void {
    this._count++;
  }

  //returns how many Things are in the array
  get count(): number {
    return this._count;
  }

//prints all Things in the array for debugging purposes
  printall(): void {
    this._things.forEach(function (Thing) {
    });
  }
}
