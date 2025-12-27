// Importing classes from wordRepository.js
import dictionary from "./dictionary.js"
import assembleClause from "./assemblers.js";

const book = dictionary.addNoun("book", "substantive", "book", "book", 'third');
const dog = dictionary.addNoun("dog", "substantive", "dog", "dog", 'third');
const apple = dictionary.addNoun("apple", "substantive", "apple", "apple", 'third');
const he = dictionary.addNoun('he', 'pronoun', 'he', 'him', 'third');
const she = dictionary.addNoun('she', 'pronoun', 'she', 'her', 'third');
const I = dictionary.addNoun('I', 'pronoun', 'I', 'me', 'first');
const you = dictionary.addNoun('you', 'pronoun', 'you', 'you', 'second');
const we = dictionary.addNoun('we', 'pronoun', 'we', 'us', 'first');
const they = dictionary.addNoun('they', 'pronoun', 'they', 'them', 'plural');
const man = dictionary.addNoun('man', 'substantive', 'man', 'man', 'third');
const woman = dictionary.addNoun("woman", "substantive", "woman", "woman", 'third');
const cat = dictionary.addNoun("cat", "substantive", "cat", "cat", 'third');
const chef = dictionary.addNoun("chef", "substantive", "chef", "chef", 'third');
const fox = dictionary.addNoun("fox", "substantive", "fox", "fox", 'third');
const child = dictionary.addNoun("child", "substantive", "child", "child", 'third');
const peacock = dictionary.addNoun('peacock', 'substantive', 'peacock', 'peacock', 'third');
const lion = dictionary.addNoun('lion', 'substantive', 'lion', 'lion', 'third');
const potato = dictionary.addNoun('potato', 'substantive', 'potato', 'potato', 'third');
const turkey = dictionary.addNoun('turkey', 'substantive', 'turkey', 'turkey', 'third');
const pigeon = dictionary.addNoun('pigeon', 'substantive', 'pigeon', 'pigeon', 'third');
const player = dictionary.addNoun('player', 'substantive', 'player', 'player', 'third');
const donkey = dictionary.addNoun('donkey', 'substantive', 'donkey', 'donkey', 'third');
const mouse = dictionary.addNoun('mouse', 'substantive', 'mouse', 'mouse', 'third');
const onion = dictionary.addNoun('onion', 'substantive', 'onion', 'onion', 'third');
const goat = dictionary.addNoun('goat', 'substantive', 'goat', 'goat', 'third');
const cow = dictionary.addNoun('cow', 'substantive', 'cow', 'cow', 'third');


const must = dictionary.addVerb('must', 'modal', 'must');
const eat = dictionary.addVerb('eat', 'regular', 'eats');
const should = dictionary.addVerb('should', 'modal', 'should');
const can = dictionary.addVerb('can', 'modal', 'can');
const supply = dictionary.addVerb('supply', 'regular', 'supplies');
const cook = dictionary.addVerb('cook', 'regular', 'cooks');
const open = dictionary.addVerb('open', 'regular', 'opens');
//const sit = dictionary.addVerb('sit', 'regular', 'sits');
const read = dictionary.addVerb('read', 'regular', 'reads');
const clean = dictionary.addVerb('clean', 'regular', 'cleans');
const might = dictionary.addVerb('must', 'modal', 'might');
const may = dictionary.addVerb('may', 'modal', 'may');
const could = dictionary.addVerb('could', 'modal', 'could');
const call = dictionary.addVerb('call', 'regular', 'calls');
const chase = dictionary.addVerb('chase', 'regular', 'chases');
const cheer = dictionary.addVerb('cheer', 'regular', 'cheers');
const become = dictionary.addVerb('become', 'regular', 'becomes');
const punch = dictionary.addVerb('punch', 'regular', 'punches');
const carry = dictionary.addVerb('carry', 'regular', 'carries');
const advise = dictionary.addVerb('advise', 'regular', 'advises');
const welcome = dictionary.addVerb('welcome', 'regular', 'welcomes');
const love = dictionary.addVerb('love', 'regular', 'loves');

const happy = dictionary.addAdjective('happy', false);
const sad = dictionary.addAdjective('sad', false);
const big = dictionary.addAdjective('big', false);
const awesome = dictionary.addAdjective('awesome', true);
const ugly = dictionary.addAdjective('ugly', true);
const good = dictionary.addAdjective('good', false);
const old = dictionary.addAdjective('old', true);
const tall = dictionary.addAdjective('tall', false);
const short = dictionary.addAdjective('short', false);
const spiteful = dictionary.addAdjective('spiteful', false);
const cynical = dictionary.addAdjective('cynical', false);
const depressed = dictionary.addAdjective('depressed', false);
const tepid = dictionary.addAdjective('tepid', false);
const useful = dictionary.addAdjective('useful', true);
const warmhearted = dictionary.addAdjective('warmhearted', false);
const loving = dictionary.addAdjective('loving', false);
const mighty = dictionary.addAdjective('mighty', false);
const overlooked = dictionary.addAdjective('overlooked', true);
const sincere = dictionary.addAdjective('sincere', false);
const nice = dictionary.addAdjective('nice', false);
const humongous = dictionary.addAdjective('humongous', false);
const whimsical = dictionary.addAdjective('whimsical', false);

/*
console.log(dictionary);
console.log(dictionary.nouns);
console.log(dictionary.nouns[1]);
console.log(dictionary.nouns[0]['nounType']);
console.log(dictionary.nouns[3]['nominative']);
*/

//console.log(dictionary.getRandomNoun());
//console.log(dictionary.getRandomNoun().renderNoun('subject'));
//console.log(assembleNoun('object'));
//console.log(we.renderNoun('object'));

//console.log(eat.renderVerb('firstPerson'));
//console.log(assembleVerb('thirdPerson'));
console.log(assembleClause());