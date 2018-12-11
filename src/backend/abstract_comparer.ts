import {Thing} from "./thing";
import {isPlural} from 'pluralize'

export abstract class AbstractComparer {
  private _winner: string;
  private _loser: string;

  compare(one: Thing, two: Thing): string {
    return "";
  }

  // A helper method for improving the grammar of a comparer's response strings
  conjugate(singular: string, plural: string, word: string = this.winner): string {
    if (isPlural(word)) {
      return plural;
    }
    return singular;
  }

  get winner(): string {
    return this._winner;
  }

  set winner(value: string) {
    this._winner = value;
  }

  get loser(): string {
    return this._loser;
  }

  set loser(value: string) {
    this._loser = value;
  }
}
