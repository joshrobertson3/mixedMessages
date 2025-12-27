//This class acts as the entry point for all data - the root of all data nodes. All new instances are created using methods within this class.
class Root {
    constructor() {
        this.nouns = [];
        this.verbs = [];
        this.adjectives = [];
        //Create this.prepositions, this.conjunctions, this.adverbs.
    }

//The following methods create new instances of their respective subclasses and stores them in the arrays above.
    addNoun(word, startsWithVowel, nounType, nominative, oblique, person) {
        const noun = new Noun(word, startsWithVowel, nounType, nominative, oblique, person);
        this.nouns.push(noun);
        return noun;
    }

    addVerb(word, verbType, thirdPerson) { // add first and second person to allow for "to be" verbs and other constructions.
        const verb = new Verb(word, verbType, thirdPerson)
        this.verbs.push(verb);
        return verb;
    }
    
    addAdjective(word, startsWithVowel) {
        const adjective = new Adjective(word, startsWithVowel);
        this.adjectives.push(adjective);
        return adjective;
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

    getRandomAdjective() {
        let randomIndex = Math.floor(Math.random() * this.adjectives.length);
        return this.adjectives[randomIndex];
    }

    // The getRandomAdverb method will accept an argument for adverbType - that way it can select the appropriate adverb for its use case in a sentence.
}

//This parent class is shared for all words.
class Word {
    constructor(word) {
        this.word = word;
    }
}

//These child classes extend Word and are used for their respective word types.
class Noun extends Word {
    constructor(word, startsWithVowel, nounType, nominative, oblique, person) {
        super(word);
        this.startsWithVowel = startsWithVowel;
        this.nounType = nounType;
        this.nominative = nominative;
        this.oblique = oblique;
        this.person = person
    }

    renderNoun(caseType, adjRequired) { //Add articleType as arg to render with "an"/"a"/"the" - this returns two strings, one with the article and one without (for use with adjectives)
        if (this.nounType === 'pronoun' && caseType === 'subject') {
            return this.nominative;
        } else if (this.nounType === 'pronoun' && caseType === 'object') {
            return this.oblique;
        } else if (!adjRequired) {
            if (this.startsWithVowel) {
                return `an ${this.word}`;
            } else {
                return `a ${this.word}`
            }
        } else {
            return this.word; //returns unconcat word for concat with adj by assembleNoun()
        }
    }
}


class Verb extends Word {
    constructor(word, verbType, thirdPerson) { // add first and second person forms.
        super(word);
        this.verbType = verbType;
        this.thirdPerson = thirdPerson;
    }
}

class Adjective extends Word {
    constructor(word, startsWithVowel) {
        super(word);
        this.startsWithVowel = startsWithVowel;
    }

    renderAdjective() {
        if (this.startsWithVowel) {
            return `an ${this.word}`;
        } else {
            return `a ${this.word}`;
        }
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