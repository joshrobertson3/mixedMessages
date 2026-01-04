import { pickRandom, randomBoolean, filterByWord } from "./helperFunctions.js";

const vowels = ['A', 'E', 'I', 'O', 'U'];

//This class acts as the entry point for all data - the root of all data nodes. All new instances are created using methods within this class.
class Root {
    constructor() {
        this.nouns = [];
        this.verbs = [];
        this.adjectives = [];
        this.conjunctions = []; // New subclass for subordinate clauses.
        //this.articleTypes = ['definite', 'indefinite']?
        //Create this.prepositions, this.conjunctions, this.adverbs.
    }

//The following methods create new instances of their respective subclasses and stores them in the arrays above.
    addNoun(word, nounType, gender, nominative, oblique, person) {
        const noun = new Noun(word, nounType, gender, nominative, oblique, person);
        this.nouns.push(noun);
        return noun;
    }

    addVerb(word, verbType, thirdPerson) { // add first and second person to allow for "to be" verbs and other constructions.
        const verb = new Verb(word, verbType, thirdPerson)
        this.verbs.push(verb);
        return verb;
    }
    
    addAdjective(word) {
        const adjective = new Adjective(word);
        this.adjectives.push(adjective);
        return adjective;
    }

    addConjunction(word, conjuncType) {
        const conjunction = new Conjunction(word, conjuncType);
        this.conjunctions.push(conjunction);
        return conjunction;
    }

    getSpecificWord(word, wordType) {
        console.log(wordType);
        switch(wordType) {
            case 'noun':
                return filterByWord(this.nouns, word);
                break;
            case 'verb':
                return filterByWord(this.verbs, word);
                break;
            case 'adjectives':
                return filterByWord(this.adjectives, word);
                break;
            case 'conjunctions':
                return filterByWord(this.conjunctions, word);
                break;
            default:
                throw new Error('Error! There is an issue with getSpeficicWord()');
        }
    };

// The following methods returns a random object from their respective arrays from this class.
    getRandomNoun() {
        return pickRandom(this.nouns);
    }

    getRandomVerb() {
        return pickRandom(this.verbs);
    }

    getRandomAdjective() {
        return pickRandom(this.adjectives);
    }

    getRandomConjunction(type) {
        const filtered = this.conjunctions.filter(conj => {
            return conj.conjuncType === type
    });
        return pickRandom(filtered);
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
    constructor(word, nounType, gender, nominative, oblique, person) {
        super(word);
        this.nounType = nounType;
        this.gender = gender;
        this.nominative = nominative;
        this.oblique = oblique;
        this.person = person
        if (vowels.includes(this.word.at(0).toUpperCase())) {
            this.startsWithVowel = true;
        } else {
            this.startsWithVowel = false;
        }
    }

    renderNoun(caseType, adjRequired, articleType) { //Add articleType as arg to render with the correct indefinite article or definite article - this returns either a string with the article or one without (for use with adjectives)
        if (this.nounType === 'pronoun' && caseType === 'subject') {
            return this.nominative;
        } else if (this.nounType === 'pronoun' && caseType === 'object') {
            return this.oblique;
        } else if (!adjRequired) {
            if (articleType === 'indefinite') {
                if (this.startsWithVowel) {
                    return `an ${this.word}`;
                } else {
                    return `a ${this.word}`
                }
            } else {
                return `the ${this.word}`
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

    renderVerb(person) {
        if (person === 'third') {
            return this.thirdPerson;
        } else {
            return this.word;
        }
    }
}

class Adjective extends Word {
    constructor(word) {
        super(word);
        if (vowels.includes(this.word.at(0).toUpperCase())) {
            this.startsWithVowel = true;
        } else {
            this.startsWithVowel = false;
        }
    }

    renderAdjective(articleType) { // Similar to renderNoun() - add articleType to add indefinite vs definite articles.
        if (articleType === 'indefinite') {
            if (this.startsWithVowel) {
                return `an ${this.word}`;
            } else {
                return `a ${this.word}`;
            }
        } else {
            return `the ${this.word}`;
        }
    }
}

class Conjunction extends Word {
    constructor(word, conjuncType) {
        super(word);
        this.conjuncType = conjuncType;
    }

    renderConjunction() {
        return this.word; // Anything else?
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