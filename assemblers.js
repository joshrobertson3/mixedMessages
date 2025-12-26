import dictionary from "./dictionary.js";

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
        if (Math.floor(Math.random() * 2) === 0) { 
            let adjObj = dictionary.getRandomAdjective();
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

//Returns the verb of a sentence either as a regular verb or as a modal verb combination. TODO: Add in first and second person (to allow for "to be" verb + future expansion for other constructions)
const assembleVerb = (person) => { 
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
        component = verbObj['thirdPerson']; 
    } else {
        component = verbObj['word'];
    }
    return component;
}

//console.log(assembleVerb('third'));


// If I'm going to add dependent clauses as an option, then I need a new class of conjunction words and build into the clause assembler function a way to generate dependent clauses randomly.

// Determines make up of a clause, calls relevant functions to get each component and assembles them into one string with punctuation marks.
const assembleClause = () => {
    let subjectObj = assembleNoun('subject');
    //console.log('subjectObj[component] = ' + subjectObj['component']);
    //console.log('subjectObj[person] = ' + subjectObj['person']);
    let verb = assembleVerb(subjectObj['person']);
    let objectObj = assembleNoun('object');
    let string = subjectObj['component'] + ' ' + verb + ' ' + objectObj['component'] + '.';
    let firstLetter = string.at(0);
    let clause = firstLetter.toUpperCase() + string.substring(1);
    return clause;
}


//console.log(assembleClause());

export default assembleClause;


