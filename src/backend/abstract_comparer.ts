import {Thing} from "./thing";

export abstract class AbstractComparer {
  private _winner: String;
  private _loser: String;

  compare(one: Thing, two: Thing): String {
    return "You should never see this";
  }

  get winner(): String {
    return this._winner;
  }

  set winner(value: String) {
    this._winner = value;
  }

  get loser(): String {
    return this._loser;
  }

  set loser(value: String) {
    this._loser = value;
  }
}
