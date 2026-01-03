// Importing classes from wordRepository.js
import dictionary from "./dictionary.js";
import Document from "./documentClass.js";
import newParagraph from "./assemblers.js";
import { assembleNoun, assembleVerb, independentClause, compoundSentence } from "./assemblers.js";

const book = dictionary.addNoun('book', 'substantive', 'neutral', 'book', 'book', 'third');
const dog = dictionary.addNoun('dog', 'substantive', 'neutral', 'dog', 'dog', 'third');
const apple = dictionary.addNoun('apple', 'substantive', 'neutral', 'apple', 'apple', 'third');
const he = dictionary.addNoun('he', 'pronoun', 'masculine', 'he', 'him', 'third');
const she = dictionary.addNoun('she', 'pronoun', 'feminine', 'she', 'her', 'third');
const it = dictionary.addNoun('it', 'pronoun', 'neutral', 'it', 'it', 'third')
const I = dictionary.addNoun('I', 'pronoun', 'neutral', 'I', 'me', 'first');
const you = dictionary.addNoun('you', 'pronoun', 'neutral', 'you', 'you', 'second');
const we = dictionary.addNoun('we', 'pronoun', 'neutral', 'we', 'us', 'first');
const they = dictionary.addNoun('they', 'pronoun', 'neutral', 'they', 'them', 'plural');
const man = dictionary.addNoun('man', 'substantive', 'masculine', 'man', 'man', 'third');
const woman = dictionary.addNoun('woman', 'substantive', 'feminine', 'woman', 'woman', 'third');
const cat = dictionary.addNoun('cat', 'substantive', 'neutral', 'cat', 'cat', 'third');
const chef = dictionary.addNoun('chef', 'substantive', 'neutral', 'chef', 'chef', 'third');
const fox = dictionary.addNoun('fox', 'substantive', 'neutral', 'fox', 'fox', 'third');
const child = dictionary.addNoun('child', 'substantive', 'neutral', 'child', 'child', 'third');
const peacock = dictionary.addNoun('peacock', 'substantive', 'neutral', 'peacock', 'peacock', 'third');
const lion = dictionary.addNoun('lion', 'substantive', 'neutral', 'lion', 'lion', 'third');
const potato = dictionary.addNoun('potato', 'substantive', 'neutral', 'potato', 'potato', 'third');
const turkey = dictionary.addNoun('turkey', 'substantive', 'neutral', 'turkey', 'turkey', 'third');
const pigeon = dictionary.addNoun('pigeon', 'substantive', 'neutral', 'pigeon', 'pigeon', 'third');
const player = dictionary.addNoun('player', 'substantive', 'neutral', 'player', 'player', 'third');
const donkey = dictionary.addNoun('donkey', 'substantive', 'neutral', 'donkey', 'donkey', 'third');
const mouse = dictionary.addNoun('mouse', 'substantive', 'neutral', 'mouse', 'mouse', 'third');
const onion = dictionary.addNoun('onion', 'substantive', 'neutral', 'onion', 'onion', 'third');
const goat = dictionary.addNoun('goat', 'substantive', 'neutral', 'goat', 'goat', 'third');
const cow = dictionary.addNoun('cow', 'substantive', 'neutral', 'cow', 'cow', 'third');


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

const happy = dictionary.addAdjective('happy');
const sad = dictionary.addAdjective('sad');
const big = dictionary.addAdjective('big');
const awesome = dictionary.addAdjective('awesome');
const ugly = dictionary.addAdjective('ugly');
const good = dictionary.addAdjective('good');
const old = dictionary.addAdjective('old');
const tall = dictionary.addAdjective('tall');
const short = dictionary.addAdjective('short');
const spiteful = dictionary.addAdjective('spiteful');
const cynical = dictionary.addAdjective('cynical');
const depressed = dictionary.addAdjective('depressed');
const tepid = dictionary.addAdjective('tepid');
const useful = dictionary.addAdjective('useful');
const warmhearted = dictionary.addAdjective('warmhearted');
const loving = dictionary.addAdjective('loving');
const mighty = dictionary.addAdjective('mighty');
const overlooked = dictionary.addAdjective('overlooked');
const sincere = dictionary.addAdjective('sincere');
const nice = dictionary.addAdjective('nice');
const humongous = dictionary.addAdjective('humongous');
const whimsical = dictionary.addAdjective('whimsical');

const and = dictionary.addConjunction('and', 'coordinating');
const forWord = dictionary.addConjunction('for', 'coordinating');
const norWord = dictionary.addConjunction('nor', 'coordinating');
const but = dictionary.addConjunction('but', 'coordinating');
const orWord = dictionary.addConjunction('or', 'coordinating')
const yet = dictionary.addConjunction('yet', 'coordinating')
const so = dictionary.addConjunction('so', 'coordinating')

const however = dictionary.addConjunction('however', 'subordinating');
const therefore = dictionary.addConjunction('therefore', 'subordinating');
const because = dictionary.addConjunction('because', 'subordinating');
const although = dictionary.addConjunction('although', 'subordinating');
const when = dictionary.addConjunction('when', 'subordinating');
const since = dictionary.addConjunction('since', 'subordinating');
const ifWord = dictionary.addConjunction('if', 'subordinating');

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
//console.log(standardClause());


//Tests - 2 Jan 10pm
//console.log(dictionary.getRandomConjunction('coordinating'));
//console.log(newParagraph('random', 4, ['compound', 'simple', 'simple', 'compound']));
//console.log(simpleSentence());
//console.log(dictionary.getRandomNoun());
//console.log(complexSentence());

//console.log(independentClause());

//console.log(dictionary.getSpecificWord('cat', 'noun'));
//console.log(dependentClause());

/*
let testNoun = assembleNoun('subject');
//console.log(testNoun);
//console.log(testNoun.nounObj.person);

let testVerb = assembleVerb(testNoun);
console.log('testing action - assembleVerb(testNoun)',
    testVerb
);
*/

const newDocument = new Document('This is a test', 'Joshua Robertson');


newDocument.generateParagraph(4, ['compound', 'compound', 'simple', 'compound']);
newDocument.generateParagraph(5, ['simple', 'compound', 'simple', 'compound', 'simple']);
newDocument.generateParagraph(3, ['compound', 'simple', 'simple']);
newDocument.generateParagraph(6, ['compound', 'compound', 'simple', 'compound', 'simple', 'simple']);

console.log(
    'paragraph[0] before adding sentence:',
    newDocument.paragraphs[0]
);

console.log(
    'new sentence being added to paragrpah:',
    newDocument.paragraphs[0].addSentence('simple')
);

console.log(
    'paragraph[0] after new sentence added:',
    newDocument.paragraphs[0]
);

console.log(newDocument.renderDocument());