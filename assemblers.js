import { dictionary } from "./main.js";

// Returns the subject/object of a sentence with either a random adjective attached or not
const assembleNoun = sentenceComponent => {
    let component;
    let nounObj = dictionary.getRandomNoun();
    let person = nounObj['person'];
    if (nounObj['nounType'] === 'pronoun' && sentenceComponent === 'subject') {
        component = nounObj['nominative']
    } else if (nounObj['nounType'] === 'pronoun' && sentenceComponent === 'object') {
        component = nounObj['oblique']
    } else {
        if (Math.floor(Math.random() * 1) === 0) { 
            let adjObj = dictionary.getRandomAdjectvive();
            if (adjObj['startsWithVowel']) {
                component = `an ${adjObj['word']} ${nounObj['word']}`
            } else {
                component = `a ${adjObj['word']} ${nounObj['word']}`
            }
        } else {
            if (nounObj['startsWithVowel']) {
                component = `an ${nounObj['word']}`;
            } else {
                component = `a ${nounObj['word']}`;
            }
        }
    }
    return { component, person }
}

//Returns the verb of a sentence either as a regular verb or as a modal verb combination. NEED TO ADD IN DECLINED VERB FOR 3RD PERSON.
const assembleVerb = (person) => { // THIS NOW ACCEPTS AN ARGUMENT FOR PERSON. SEE COMMENT BELOW
    let component;
    let verbObj = dictionary.getRandomVerb();
    if (verbObj['verbType'] === 'modal') {
        let additionalVerb;
        do {
            additionalVerb = dictionary.getRandomVerb();
            //console.log('Additional Verb: ' + additionalVerb['word']);
        } while (additionalVerb['verbType'] === 'modal');
        component = verbObj['word'] + ' ' + additionalVerb['word'];
    } else if (person === 'third') {
        component = verbObj['thirdPerson']; // I'VE NOW ADDED THE THIRD PERSON AS AN OPTION
    } else {
        component = verbObj['word'];
    }
    return component;
}

//console.log(assembleVerb('third'));

// I'm going to create a new clause assembler function that calls the assembleNoun('subject') first and whatever is returned will say what person it's in. That 'person' will then be used as an argument to call the assembleVerb(person) function above. It must be done in that order. Then it will call the object and assemble the clause as a single stirng and capitalise the first letter.

// If I'm going to add dependent clauses as an option, then I need a new class of conjunction words and build into the clause assembler function a way to generate dependent clauses randomly.

//  TO DEPRECATE. This function unifies all functions above. But is also kinda pointless. Should create a function that assembles the clause + chooses whether there should be a dependent clause too (in which case I need conjunctions).
const assembleComponent = (sentenceComponent) => {
    let component;
    switch (sentenceComponent) {
        case 'subject':
            component = assembleNoun('subject');
            break;
        
        case 'object':
            component = assembleNoun('object');
            break;

        case 'verb':
            component = assembleVerb('third');
            break;

        default:
            throw new Error('sentenceComponent is invalid');
    }
    return component;
}

export default assembleComponent;

console.log(assembleComponent('subject'));
console.log(assembleComponent('verb'));
console.log(assembleComponent('object'));