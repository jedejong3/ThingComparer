import {Thing} from "./thing";

export class Datamuse {

  // allows client to make a request without optional arguments
  request(means:string, relatedCode:string, related:string) {
    return this.requestWithOptions(means, relatedCode, related, null, null, null, null, 15, false, false);
  }

  // request method with optional arguments
  requestWithOptions(means:string, relatedCode:string, related:string,
    vocab:string, topics:string[], leftContext:string, rightContext:string,
    maxResults:number, includePartsOfSpeech:boolean, includeFrequency:boolean) {

      var context = this;

      return new Promise(function(resolve, reject) {
        var params = {
          means: means,
          relatedCode: relatedCode,
          related: related,
          vocab: vocab,
          topics: topics,
          leftContext: leftContext,
          rightContext: rightContext,
          maxResults: maxResults,
          includePartsOfSpeech: includePartsOfSpeech,
          includeFrequency: includeFrequency
        };

        var endpoint = "https://api.datamuse.com/words?" + context.createSuffix(params);
        console.log('endpoint', endpoint);

        var request = new XMLHttpRequest();
        request.open('GET', endpoint, true);
        request.onload = function () {
          var data = JSON.parse(this.response);
          console.log('parsed data', data);
          resolve(data);
        }
        request.send();
      });


  }

  createSuffix(params): string {
    var suffix = '';

    if (params.means) {
      suffix += '&ml=' + params.means;
    }
    if (params.relatedCode && params.related) {
      // check that relatedCode is a valid code contained in the RelatedCode enum
      if ((<any>Object).values(Code.RelatedCode).includes(params.relatedCode)) {
        suffix += '&rel_' + params.relatedCode + '=' + params.related;
      }
    }

    // TODO add options to the endpoint URL
    if ((<any>Object).values(Code.VocabCode).includes(params.vocab)) {
      suffix += '&v=' + params.vocab;
    }
    // topics - at most 5
    if (params.topics != null && params.topics.length >= 1 && params.topics.length <= 5) {
      suffix += '&topics=';
      params.topics.forEach(function(topic, index, array){
        suffix += topic + ',';
      });
      // remove trailing comma
      suffix = suffix.substr(0, suffix.length-1);
    }
    if (params.leftContext != null) {
      suffix += '&lc=' + params.leftContext;
    }
    if(params.rightContext != null) {
      suffix += '&rc=' + params.rightContext;
    }
    if (params.maxResults != null && params.maxResults >= 0) {
      suffix += '&max=' + params.maxResults;
    }
    var p = params.includePartsOfSpeech;
    var f = params.includeFrequency;
    if (p || f) {
      suffix += '&md=' + (p ? 'p' : '') + (f ? 'f' : '');
    }

    // remove the first char of suffix so it doesn't have a leading &
    if (suffix.length > 1) {
      suffix = suffix.substr(1);
    }

    return suffix;
  }

}

export module Code {
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
  export enum VocabCode {
    Espanol = 'es',
    EnglishWikipedia = 'enwiki'
  }
}
