import dictionary from "./dictionary.js";

// Returns the subject/object of a sentence with either a random adjective attached or not
const assembleNoun = caseType => {
    //console.log("with new method: " + dictionary.getRandomNoun().renderNoun('object'));
    let component;
    let nounObj = dictionary.getRandomNoun();
    //return nounObj;
    //return nounObj.renderNoun(caseType);
    let person = nounObj['person'];
    let adjRequired = (Math.random() < 0.5) ? true : false;
    let noun = nounObj.renderNoun(caseType, adjRequired);
    //console.log(adjRequired);
    if (adjRequired && nounObj['nounType'] !== 'pronoun') {
        let adjective = dictionary.getRandomAdjective();
        component = adjective.renderAdjective() + ' ' + noun;
    } else {
        component = noun;
    }
    console.log(
        `[${new Date().toISOString()}]`,
        `Action: assembleNoun(${caseType})`,
        `result: { component: ${component}, person: ${person} }`
    );
    return { component, person };
}

//Returns the verb of a sentence either as a regular verb or as a modal verb combination. TODO: Add in first and second person (to allow for "to be" verb + future expansion for other constructions)
const assembleVerb = person => { 
    let component;
    let verbObj = dictionary.getRandomVerb();
    if (verbObj['verbType'] === 'modal') {
        let additionalVerb;
        do {
            additionalVerb = dictionary.getRandomVerb();
            //console.log('Additional Verb: ' + additionalVerb['word']);
        } while (additionalVerb['verbType'] === 'modal');
        component = verbObj.renderVerb('firstPerson') + ' ' + additionalVerb.renderVerb('firstPerson');
    } else {
        component = verbObj.renderVerb(person);
    }
    console.log(
        `[${new Date().toISOString()}]`,
        `Action: assembleVerb(${person})`,
        `result: component = ${component}`
    );
    return component;
}

//console.log(assembleVerb('third'));

// If I'm going to add dependent clauses as an option, then I need a new class of conjunction words and build into the clause assembler function a way to generate dependent clauses randomly.

// Determines make up of a clause, calls relevant functions to get each component and assembles them into one string with punctuation marks.
const simpleSentence = () => {
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

const newParagraph = (theme, numberOfClauses, sentenceTypes = []) => { // Object factory
    let _clauses = [];
    for (let i = 0; i < numberOfClauses; i ++) {
        let clause;
        switch (sentenceTypes[i]) {
            case 'simple': 
                clause = simpleSentence();
                _clauses.push(clause);
                break;
            /*
            case 'compound':
                clause = compoundSentence(); // need to make this function
                _clauses.push(clause);
                break;
            case 'complex':
                clause = complexSentence();
                _clauses.push(clause);
                break;
            case 'compoundComplex':
                clause = compoundComplexSentence();
                _clauses.push(clause);
                break;
            */
            default:
                throw new Error('Error! Something has gone wrong with newParagraph().')
        }
    }

    return {
        _theme: theme,
        _numberOfClauses: numberOfClauses,
        _clauses,
    }
}



//console.log(simpleSentence());

// I think I need a new class independent from the dictionary that holds data for the sentence being formed - that way, you can query it to form sentences based on that data. i.e. i could form sentences like "A mighty book must eat a loving onion, because it makes the book cry."



export default newParagraph;


