//This class acts as the entry point for all data - the root of all data nodes. All new instances are created using methods within this class.
class Root {
    constructor() {
        this.nouns = [];
        this.verbs = [];
        this.adjectives = [];
        this.adverbs = [];
    }

//The following methods create new instances of their respective subclasses and stores them in the arrays above.
    addNoun(word, startsWithVowel, nounType) {
        const noun = new Noun(word, startsWithVowel, nounType);
        this.nouns.push(noun);
        return noun;
    }

    addVerb(word, verbType) {
        const verb = new Verb(word, verbType)
        this.verbs.push(verb);
        return verb;
    }
    
    addAdjective(word) {
        const adjective = new Adjective(word);
        this.adjectives.push(adjective);
        return adjective;
    }

    addAdverb(word) {
        const adverb = new Adverb(word)
        this.adverbs.push(adverb);
        return adverb;
    }

// The following methods returns a random object from their respective arrays from this class.
    getRandomNoun() {
        let randomIndex = Math.floor(Math.random() * this.nouns.length);
        return this.nouns[randomIndex];
    }

    getRandomVerb() {
        let randomIndex = Math.floor(Math.random() * this.verbs.length);
        return this.verbs[randomIndex];
    }

    getRandomAdjectvive() {
        let randomIndex = Math.floor(Math.random() * this.adjectives.length);
        return this.adjectives[randomIndex];
    }

    getRandomAdverb() {
        let randomIndex = Math.floor(Math.random() * this.adverbs.length);
        return this.adverbs[randomIndex];
    }
}

//This parent class is shared for all words.
class Word {
    constructor(word) {
        this.word = word;
    }
}

//These child classes extend Word and are used for their respective word types.
class Noun extends Word {
    constructor(word, startsWithVowel, nounType) {
        super(word);
        this.startsWithVowel = startsWithVowel;
        this.nounType = nounType;
    }
}


class Verb extends Word {
    constructor(word, verbType) {
        super(word);
        this.verbType = verbType;
    }
}

class Adjective extends Word {
    constructor(word) {
        super(word);
    }
}

class Adverb extends Word {
    constructor(word) {
        super(word);
    }
}

export default Root;

/*
const dictionary = new Root();

const book = dictionary.addNoun("book", false, "substantive");
const dog = dictionary.addNoun("dog", false, "substantive");

console.log(dictionary);
console.log(dictionary.nouns[0]);
console.log(dictionary.nouns[1]);

console.log(dictionary.nouns[0]['nounType']);
*/