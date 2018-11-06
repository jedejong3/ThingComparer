export class Datamuse {

  // allows client to make a request without optional arguments
  request(means:string, relatedCode:string, related:string) {
    this.requestWithOptions(means, relatedCode, related, null, null, null, null, 15, false, false);
  }

  // request method with optional arguments
  requestWithOptions(means:string, relatedCode:string, related:string,
    vocab:string, topics:string[], leftContext:string, rightContext:string,
    maxResults:number, includePartsOfSpeech:boolean, includeFrequency:boolean) {

    // build endpoint URL
    var endpoint = "https://api.datamuse.com/words?";
    var suffix = '';
    if (means) {
      suffix += '&ml=' + means;
    }
    if (relatedCode && related) {
      // check that relatedCode is a valid code contained in the RelatedCode enum
      if ((<any>Object).values(Code.RelatedCode).includes(relatedCode)) {
        suffix += '&rel_' + relatedCode + '=' + related;
      }
    }
    // TODO add options to the endpoint URL

    // remove the first char of suffix so it doesn't have a leading &
    if (suffix.length > 1) {
      suffix = suffix.substr(1);
    }

    endpoint += suffix;
    console.log('endpoint', endpoint);

    var request = new XMLHttpRequest();
    request.open('GET', endpoint, true);
    request.onload = function () { // deleted data arg
      var data = JSON.parse(this.response);
      console.log('parsed data', data);
    }
    request.send();
  }


}

module Code {
  export enum RelatedCode {
    NounsModifiedBy = 'jja',
    AdjectivesThatModify = 'jjb',
    Synonyms = 'syn',
    StatisticallyAssociated = 'trg',
    Antonyms = 'ant',
    KindOf = 'spc',
    MoreGeneralThan = 'gen',
    Comprises = 'com',
    PartOf = 'par',
    FrequentFollowers = 'bga',
    FrequentPredecessors = 'bgb',
    Rhymes = 'rhy',
    AlmostRhymes = 'nry',
    Homophones = 'hom',
    ConsonantMatch = 'cns'
  }
}
