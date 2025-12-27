// Importing classes from wordRepository.js
import dictionary from "./dictionary.js"
import assembleClause from "./assemblers.js";
import { assembleNoun } from "./assemblers.js"

const book = dictionary.addNoun("book", false, "substantive", "book", "book", 'third');
const dog = dictionary.addNoun("dog", false, "substantive", "dog", "dog", 'third');
const apple = dictionary.addNoun("apple", true, "substantive", "apple", "apple", 'third');
const must = dictionary.addVerb('must', 'modal', 'must');
const eat = dictionary.addVerb('eat', 'regular', 'eats');
const should = dictionary.addVerb('should', 'modal', 'should');
const can = dictionary.addVerb('can', 'modal', 'can');
const supply = dictionary.addVerb('supply', 'regular', 'supplies');
const cook = dictionary.addVerb('cook', 'regular', 'cooks');
const open = dictionary.addVerb('open', 'regular', 'opens');
const sit = dictionary.addVerb('sit', 'regular', 'sits');
const he = dictionary.addNoun('he', false, 'pronoun', 'he', 'him', 'third');
const she = dictionary.addNoun('she', false, 'pronoun', 'she', 'her', 'third');
const I = dictionary.addNoun('I', true, 'pronoun', 'I', 'me', 'first');
const you = dictionary.addNoun('you', false, 'pronoun', 'you', 'you', 'second');
const we = dictionary.addNoun('we', false, 'pronoun', 'we', 'us', 'first');
const happy = dictionary.addAdjective('happy', false);
const sad = dictionary.addAdjective('sad', false);
const big = dictionary.addAdjective('big', false);
const awesome = dictionary.addAdjective('awesome', true);
const ugly = dictionary.addAdjective('ugly', true);
const good = dictionary.addAdjective('good', false);
const old = dictionary.addAdjective('old', true);

/*
console.log(dictionary);
console.log(dictionary.nouns);
console.log(dictionary.nouns[1]);
console.log(dictionary.nouns[0]['nounType']);
console.log(dictionary.nouns[3]['nominative']);
*/

//console.log(dictionary.getRandomNoun());
//console.log(dictionary.getRandomNoun().renderNoun('subject'));
console.log(assembleNoun('object'));
//console.log(we.renderNoun('object'));

//console.log(assembleClause());