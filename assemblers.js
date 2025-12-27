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
export const assembleVerb = person => { 
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


