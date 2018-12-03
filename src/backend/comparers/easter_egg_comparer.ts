import {AbstractComparer} from "../abstract_comparer";
import {Thing} from "../thing";

export class EasterEggComparer extends AbstractComparer {

  compare(ThingOne: Thing, ThingTwo: Thing): string {

    //Array of not good words.
    const badWords = ["arian", "aryan", "ass pirate", "ass-pirate", "asspirate", "assnigger", "asswipe", "asswipes", "bastard", "bastardo", "bastards", "batty boy", "beaner", "beaners", "bimbo", "bimbos", "bint", "boiolas", "brotherfucker", "buceta", "bugger", "bulldyke", "bum boy", "butt fuck", "buttfuck", "buttfucka", "buttfucker", "butt-pirate", "c.u.n.t", "c0cksucker", "camslut", "camwhore", "carpet muncher", "carpetmuncher", "chi-chi man", "chick with a dick", "child-fucker", "chinc", "chincs", "chink", "chinky", "choc ice", "circlejerk", "clit licker", "clit licker", "clitface", "clitfuck", "clover clamps", "cnut", "cock sucker", "cockbite", "cockfucker", "cockholster", "cockjockey", "cockknocker", "cockknoker", "cockmaster", "cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher", "cocksmoke", "cocksmoker", "cocksniffer", "cocksuck", "cocksuck", "cocksucked", "cocksucked", "cocksucker", "cock-sucker", "cocksuckers", "cocksucking", "cocksucks", "cocksucks", "cocksuka", "cocksukka", "cockwaffle", "cokmuncher", "coksucka", "coon", "coonnass", "coons", "corksucker", "corp whore", "corp whore", "crackwhore", "cretin", "cripple", "crotte", "cum chugger", "cum chugger", "cum dumpster", "cum dumpster", "cum freak", "cum freak", "cum guzzler", "cum guzzler", "cumbubble", "cumdump", "cumdump", "cumdumpster", "cumguzzler", "cumjockey", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie", "cunnilingus", "cunny", "cunt", "c-u-n-t", "cunt hair", "cunt hair", "cuntass", "cuntbag", "cuntbag", "cuntface", "cunthole", "cunthunter", "cuntlick", "cuntlick", "cuntlicker", "cuntlicker", "cuntlicking", "cuntlicking", "cuntrag", "cunts", "cuntsicle", "cuntsicle", "cuntslut", "cunt-struck", "cunt-struck", "cut rope", "cut rope", "dago", "darkie", "date rape", "daterape", "deggo", "dickfuck", "dickfucker", "dickmonger", "dicksipper", "dicksucker", "dicksucking", "dicktickler", "dike", "diligaf", "dimwit", "dink", "dinks", "dirsa", "dolcett", "dommes", "Doublelift", "douche-fag", "Dumbcunt", "dyke", "dykes", "ecchi", "fag", "fagbag", "fagfucker", "fagg", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggotcock", "faggots", "faggs", "fagot", "fagots", "fags", "fagtard", "faig", "faigt", "fannyfucker", "femdom", "flamer", "floozy", "frotting", "fuck puppet", "fuck trophy", "fuck-bitch", "fuckbutt", "fuckbutter", "fuckersucker", "fuckmeat", "fucktard", "fuck-tard", "fucktards", "fucktoy", "fuckwhit", "fuckwit", "fuckwitt", "fudge packer", "fudgepacker", "fudge-packer", "fukwhit", "fukwit", "futanari", "gae", "gai", "gayass", "gaybob", "gaydo", "gayfuck", "gayfuckist", "gaylord", "gaytard", "gaywad", "gender bender", "gey", "ghay", "ghey", "golliwog", "gook", "gooks", "goregasm", "gringo", "grope", "guido", "h0m0", "h0mo", "heeb", "heshe", "he-she", "ho", "hoar", "hoare", "hobag", "hoe", "hoer", "homodumbshit", "homoey", "honkey", "honky", "hoor", "hore", "hussy", "iap", "injun", "jail bait", "jailbait", "jap", "japs", "jigaboo", "jiggaboo", "jiggerboo", "jungle bunny", "junglebunny", "kafir", "kike", "kikes", "kinbaku", "klan", "knobjocky", "knobjokey", "kraut", "kunt", "kyke", "lardass", "mcfagget", "mick", "midget", "molest", "mong", "moolie", "n1gga", "n1gger", "nazi", "nazism", "negro", "neonazi", "nig nog", "nigaboo", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niggle", "niglet", "nig-nog", "nob jokey", "nobjocky", "nobjokey", "numbnuts", "old bag", "omorashi", "paki", "panooch", "penisbanger", "penisfucker", "penispuffer", "pigfucker", "pikey", "pillowbiter", "pinko", "piss pig", "pisspig", "polack", "pole smoker", "polesmoker", "ponyplay", "Poopuncher", "porch monkey", "porchmonkey", "prickteaser", "puto", "queerbait", "queerhole", "queero", "raghead", "rape", "raped", "raper", "rapey", "raping", "rapist", "reetard", "reich", "retard", "retarded", "ritard", "rtard", "r-tard", "rumprammer", "ruski", "sambo", "sand nigger", "sandnigger", "sausage queen", "sausage queen", "scag", "schizo", "scroat", "scrud", "shemale", "shirt lifter", "shitblimp", "shitbrains", "shitcunt", "shitdick", "shitfuck", "shota", "sissy", "skag", "skank", "slag", "slanteye", "sleaze", "sleazy", "slut", "slut bucket", "slut bucket", "slutbag", "slutdumper", "slutkiss", "sluts", "son of a whore", "spic", "spick", "spik", "spiks", "spread legs", "sultry women", "swastika", "taff", "taig", "tard", "thundercunt", "towelhead", "tramp", "tranny", "tub girl", "twink", "twunt", "twunter", "unclefucker", "w00se", "wench", "wetback", "wh0re", "wh0reface", "whoar", "whoralicious", "whore", "whorealicious", "whorebag", "whored", "whoreface", "whorehopper", "whorehouse", "whores", "whoring", "wigger", "window licker", "wog", "wop", "wrapping men", "yid", "yiffy", "zibbi", "zubb"];

    if (this.hasEasterEgg("me", ThingOne, ThingTwo)) {
      return 'Stop trying to compare yourself: you are valuable just as you are!!'
    }

    if (this.hasEasterEgg("shilad", ThingOne, ThingTwo)) {
      return "Shilad is the best!"
    }
    if(ThingOne.name.toLowerCase() == ThingTwo.name.toLowerCase()){
      return "Y'know, I'm feeling conflicted on this one...its almost like they're the same thing"
    }

    if(badWords.indexOf(ThingOne.name.toLowerCase()) != -1 || badWords.indexOf(ThingTwo.name.toLowerCase()) != -1) {
      return "Chill with the words, homie."
    }

    return null;
  }

  private hasEasterEgg(name, ThingOne: Thing, ThingTwo: Thing): boolean {
    if (ThingOne.name.toLowerCase() == name || ThingTwo.name.toLowerCase() == name) {
      return true;
    }
    return false;
  }
}
