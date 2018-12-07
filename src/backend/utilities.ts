

export class Utilities {

  static getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static sanitize(s: string): string {
    // if s is a bad word, change it to ****
    if (this.badWords.indexOf(s.toLowerCase()) != -1) {
      s = "****";
    }
    // strip whitespace at beginning and end
    while (s.charAt(s.length-1)==' '){
      s=s.substring(0,s.length-2);
    }
    // remove HTML tags
    return s.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  private static _stopwords: string[] = ['. ', '.', 'a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always',
    'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be',
    'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by',
    'call', 'can', 'cannot', "can't", 'co', 'computer', 'con', 'could', "couldn't", 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg',
    'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find',
    'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', "hasn't", 'have',
    'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herse"', 'him', 'himse"', 'his', 'how', 'however', 'hundred', 'i', 'ie', 'if', 'in',
    'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', "it's", 'itse', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'like', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile',
    'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myse', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no',
    'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise',
    'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious',
    'several', 'shall', 'said', 'says', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system',
    'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thick', 'thin',
    'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under',
    'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein',
    'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your',
    'yours', 'yourself', 'yourselves'];

  // An array of bad words.
  private static badWords = ["arian", "aryan", "ass pirate", "ass-pirate", "asspirate", "assnigger", "asswipe", "asswipes", "bastard", "bastardo", "bastards", "batty boy", "beaner", "beaners", "bimbo", "bimbos", "bint", "boiolas", "brotherfucker", "buceta", "bugger", "bulldyke", "bum boy", "butt fuck", "buttfuck", "buttfucka", "buttfucker", "butt-pirate", "c.u.n.t", "c0cksucker", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chi-chi man", "chick with a dick", "child-fucker", "chinc", "chincs", "chink", "chinky", "choc ice", "circlejerk", "clit licker", "clit licker", "clitface", "clitfuck", "clover clamps", "cnut", "cock sucker", "cockbite", "cockfucker", "cockholster", "cockjockey", "cockknocker", "cockknoker", "cockmaster", "cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher", "cocksmoke", "cocksmoker", "cocksniffer", "cocksuck", "cocksuck", "cocksucked", "cocksucked", "cocksucker", "cock-sucker", "cocksuckers", "cocksucking", "cocksucks", "cocksucks", "cocksuka", "cocksukka", "cockwaffle", "cokmuncher", "coksucka", "coon", "coonnass", "coons", "corksucker", "corp whore", "corp whore", "crackwhore", "cretin", "cripple", "crotte", "cum chugger", "cum chugger", "cum dumpster", "cum dumpster", "cum freak", "cum freak", "cum guzzler", "cum guzzler", "cumbubble", "cumdump", "cumdump", "cumdumpster", "cumguzzler", "cumjockey", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie", "cunnilingus", "cunny", "cunt", "c-u-n-t", "cunt hair", "cunt hair", "cuntass", "cuntbag", "cuntbag", "cuntface", "cunthole", "cunthunter", "cuntlick", "cuntlick", "cuntlicker", "cuntlicker", "cuntlicking", "cuntlicking", "cuntrag", "cunts", "cuntsicle", "cuntsicle", "cuntslut", "cunt-struck", "cunt-struck", "cut rope", "cut rope", "dago", "darkie", "date rape", "daterape", "deggo", "dickfuck", "dickfucker", "dickmonger", "dicksipper", "dicksucker", "dicksucking", "dicktickler", "dike", "diligaf", "dimwit", "dink", "dinks", "dirsa", "dolcett", "dommes", "Doublelift", "douche-fag", "Dumbcunt", "dyke", "dykes", "ecchi", "fag", "fagbag", "fagfucker", "fagg", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggotcock", "faggots", "faggs", "fagot", "fagots", "fags", "fagtard", "faig", "faigt", "fannyfucker", "femdom", "flamer", "floozy", "frotting", "fuck puppet", "fuck trophy", "fuck-bitch", "fuckbutt", "fuckbutter", "fuckersucker", "fuckmeat", "fucktard", "fuck-tard", "fucktards", "fucktoy", "fuckwhit", "fuckwit", "fuckwitt", "fudge packer", "fudgepacker", "fudge-packer", "fukwhit", "fukwit", "futanari", "gae", "gai", "gayass", "gaybob", "gaydo", "gayfuck", "gayfuckist", "gaylord", "gaytard", "gaywad", "gender bender", "gey", "ghay", "ghey", "golliwog", "gook", "gooks", "goregasm", "gringo", "grope", "guido", "h0m0", "h0mo", "heeb", "heshe", "he-she", "ho", "hoar", "hoare", "hobag", "hoe", "hoer", "homodumbshit", "homoey", "honkey", "honky", "hoor", "hore", "hussy", "iap", "injun", "jail bait", "jailbait", "jap", "japs", "jigaboo", "jiggaboo", "jiggerboo", "jungle bunny", "junglebunny", "kafir", "kike", "kikes", "kinbaku", "klan", "knobjocky", "knobjokey", "kraut", "kunt", "kyke", "lardass", "mcfagget", "mick", "midget", "molest", "mong", "moolie", "n1gga", "n1gger", "nazi", "nazism", "negro", "neonazi", "nig nog", "nigaboo", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niggle", "niglet", "nig-nog", "nob jokey", "nobjocky", "nobjokey", "numbnuts", "old bag", "omorashi", "paki", "panooch", "penisbanger", "penisfucker", "penispuffer", "pigfucker", "pikey", "pillowbiter", "pinko", "piss pig", "pisspig", "polack", "pole smoker", "polesmoker", "ponyplay", "Poopuncher", "porch monkey", "porchmonkey", "prickteaser", "puto", "queerbait", "queerhole", "queero", "raghead", "rape", "raped", "raper", "rapey", "raping", "rapist", "reetard", "reich", "retard", "retarded", "ritard", "rtard", "r-tard", "rumprammer", "ruski", "sambo", "sand nigger", "sandnigger", "sausage queen", "sausage queen", "scag", "schizo", "scroat", "scrud", "shemale", "shirt lifter", "shitblimp", "shitbrains", "shitcunt", "shitdick", "shitfuck", "shota", "sissy", "skag", "skank", "slag", "slanteye", "sleaze", "sleazy", "slut", "slut bucket", "slut bucket", "slutbag", "slutdumper", "slutkiss", "sluts", "son of a whore", "spic", "spick", "spik", "spiks", "spread legs", "sultry women", "swastika", "taff", "taig", "tard", "thundercunt", "towelhead", "tramp", "tranny", "tub girl", "twink", "twunt", "twunter", "unclefucker", "w00se", "wench", "wetback", "wh0re", "wh0reface", "whoar", "whoralicious", "whore", "whorealicious", "whorebag", "whored", "whoreface", "whorehopper", "whorehouse", "whores", "whoring", "wigger", "window licker", "wog", "wop", "wrapping men", "yid", "yiffy", "zibbi", "zubb"];


  static get stopwords(): string[] {
    return this._stopwords;
  }

  static set stopwords(value: string[]) {
    this._stopwords = value;
  }

  static notStopWord(word: string): boolean {
    return (this._stopwords.indexOf(word) == -1);
  }

  static shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  static capitalize(str: string) {
    if (str.length < 1) {
      return str;
    }
    else if (str.length == 1) {
      return str.toUpperCase();
    }
    else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
}
