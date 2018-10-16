import {Utilities} from './utilities';

export class Reader {

  private _fileName:string;

  constructor(fileName:string) {
    this.fileName = fileName;
  }

  getText(winner:String, loser:String): string {
    let filePath = '../../assets/text' + this.fileName;
    let line = "";

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filePath, true);
    rawFile.onreadystatechange = function() {

      console.log("------------------------> request readyState changed", arguments);


      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        var lines = allText.split('\n');
        if (lines.length == 0) {
          return "Sorry, there was an error. A flavor text file is empty.";
        }
        else {
          line = lines[Utilities.getRandomInt(lines.length)];
          console.log(line);
        }
      }
    }
    rawFile.send();

    return line;
  }

  get fileName(): String {
    return this._fileName;
  }
  set fileName(fileName:String) {
    this._fileName = fileName;
  }
}
