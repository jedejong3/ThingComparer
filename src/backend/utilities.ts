

export class Utilities {

  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static sanitize(s: string):string {
    return s.replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
}

}
