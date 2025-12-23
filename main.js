// Importing classes from wordRepository.js
import Root from "./wordRepository.js";

const dictionary = new Root();

const book = dictionary.addNoun("book", false, "substantive");
const dog = dictionary.addNoun("dog", false, "substantive");
const apple = dictionary.addNoun("apple", true, "substantive");
const must = dictionary.addVerb('must', 'modal');
const eat = dictionary.addVerb('eat', 'regular');

console.log(dictionary);
console.log(dictionary.nouns[0]);
console.log(dictionary.nouns[1]);

console.log(dictionary.nouns[0]['nounType']);

// This function generates a random number which then selects a random word from the respective array in the dictionary.
const assembleComponent = (wordType) => {
    let word;
    let component;
    switch (wordType) {
        case 'noun':
            word = dictionary.getRandomNoun();
            if (word['startsWithVowel']) {
                component = `an ${word['word']}`;
            } else {
                component = `a ${word['word']}`;
            }
            break;
        case 'verb':
            word = dictionary.getRandomVerb();
            if (word['verbType'] === 'modal') {
                let additionalVerb;
                do {
                    additionalVerb = dictionary.getRandomVerb();
                    console.log('Additional Verb: ' + additionalVerb['word']);
                } while (additionalVerb['verbType'] === 'modal');
                component = word['word'] + ' ' + additionalVerb['word'];
            } else {
                component = word['word'];
            }
            break;
        case 'adjective':
            word = dictionary.getRandomAdjective();
            component = word['word'];
            break;
        case 'adverb':
            word = dictionary.getRandomAdverb();
            component = word['word'];
            break;
        default:
            throw new Error('wordType is invalid');
    }
    return component;
}

console.log(assembleComponent('noun'));
console.log(assembleComponent('verb'));