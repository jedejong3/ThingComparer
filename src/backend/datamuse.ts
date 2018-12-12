import { Thing } from "./thing";
import { Utilities } from "./utilities";

// wraps the datamuse API to allow easier HTTP requests to datamuse
export class Datamuse {

  // allows making a request without specifying any optional arguments
  request(means: string, relatedCode: string, related: string) {
    return this.requestWithOptions(means, relatedCode, related, 'enwiki', null, null, null, 15, false, false);
  }

  // make a request with the optional arguments. see datamuse.com for more documentation.
  requestWithOptions(means: string, relatedCode: string, related: string,
    vocab: string, topics: string[], leftContext: string, rightContext: string,
    maxResults: number, includePartsOfSpeech: boolean, includeFrequency: boolean) {

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

      var context = this;
      var endpoint = "https://api.datamuse.com/words?" + this.createSuffix(params);

      var request = new XMLHttpRequest();
      request.open('GET', endpoint, true);

      request.onload = function() {
        var data = JSON.parse(this.response);
        // filter removes anything that returns FALSE, so this removes stopwords
        if (data.length > 0) {
          data = data.filter(context.entryIsNotStopWord);
          data = data.filter(context.entryIsNotBadWord);
        }
        resolve(data);
      };

      // handle failed http requests (for example, no internet) by returning an empty list,
      // which is also what datamuse returns if it can't find any results.
      request.onerror = function(error) {
        console.log(error);
        resolve([]);
      }

      request.send();
    });
  }

  // format any options passed in to be included in the http request endpoint.
  // see datamuse.com for more documentation on format and what the options mean
  createSuffix(params): string {
    var suffix = '';

    if (params.means) {
      suffix += '&ml=' + params.means;
    }
    if (params.relatedCode && params.related) {
      // check that relatedCode is a valid code contained in the RelatedCode enum, then add it.
      if ((<any>Object).values(Code.RelatedCode).includes(params.relatedCode)) {
        suffix += '&rel_' + params.relatedCode + '=' + params.related;
      }
    }

    // check that vocab option is a valid vocab code, then add it.
    if ((<any>Object).values(Code.VocabCode).includes(params.vocab)) {
      suffix += '&v=' + params.vocab;
    }

    // there can be at most 5 topics passed to datamuse
    if (params.topics != null && params.topics.length >= 1 && params.topics.length <= 5) {
      suffix += '&topics=';
      params.topics.forEach(function(topic, index, array) {
        suffix += topic + ',';
      });
      // remove trailing comma
      suffix = suffix.substr(0, suffix.length - 1);
    }
    if (params.leftContext != null) {
      suffix += '&lc=' + params.leftContext;
    }
    if (params.rightContext != null) {
      suffix += '&rc=' + params.rightContext;
    }
    if (params.maxResults != null && params.maxResults >= 0) {
      suffix += '&max=' + params.maxResults;
    }

    // if needed, add the metadata options as either &md=p, &md=f, or &md=pf
    var p = params.includePartsOfSpeech;
    var f = params.includeFrequency;
    if (p || f) {
      suffix += '&md=' + (p ? 'p' : '') + (f ? 'f' : '');
    }

    // remove the first char of the endpoint suffix so it doesn't have a leading &
    if (suffix.length > 1) {
      suffix = suffix.substr(1);
    }

    return suffix;
  }

  entryIsNotStopWord(element, index, array) {
    return Utilities.notStopWord(element.word);
  }
  entryIsNotBadWord(element, index, array) {
    return Utilities.notBadWord(element.word);
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
