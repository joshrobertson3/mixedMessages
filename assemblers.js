import dictionary from "./dictionary.js";
import { pickRandom, randomBoolean } from "./helperFunctions.js";

// Returns the subject/object of a sentence with either a random adjective attached or not
export const assembleNoun = caseType => {
    let component;
    let nounObj = dictionary.getRandomNoun();
    //console.log(nounObj)
   //console.log(nounObj.person);
    let adjRequired = randomBoolean();
    let noun = nounObj.renderNoun(caseType, adjRequired);
    //console.log(adjRequired);
    if (adjRequired && nounObj.nounType !== 'pronoun') {
        let adjective = dictionary.getRandomAdjective();
        component = adjective.renderAdjective() + ' ' + noun;
    } else {
        component = noun;
    }
    /*
    console.log(
        `Action: assembleNoun(${caseType})`,
        `result: { component: ${component}, caseType: ${caseType}, nounObj:`, nounObj, ' }'
    );
    */
    return { 
        component,
        caseType,
        nounObj
    };
}



//Returns the verb of a sentence either as a regular verb or as a modal verb combination.
export const assembleVerb = obj => {
    let person = obj.nounObj.person;
    //console.log(person);
    let component;
    let componentType;
    let verbs = [];
    let verbObj = dictionary.getRandomVerb();
    verbs.push(verbObj);
    if (verbObj['verbType'] === 'modal') {
        componentType = 'modal';
        let auxVerbObj;
        do {
            auxVerbObj = dictionary.getRandomVerb();
            //console.log('auxVerbObj: ' + auxVerbObj['word']);
        } while (auxVerbObj['verbType'] === 'modal');
        verbs.push(auxVerbObj)
        component = verbObj.renderVerb('firstPerson') + ' ' + auxVerbObj.renderVerb('firstPerson');
    } else {
        componentType = 'notModal'
        component = verbObj.renderVerb(person);
    }
    /*
    console.log(
        `Action: assembleVerb(${obj})`,
        `result: { component: ${component}, componentType: ${componentType}, verbObj: `, verbObj, ' }'
    );
    */
    return {
        component,
        componentType,
        verbs,
    } 
}

//console.log(assembleVerb('third'));

// Takes the sentence as formed by the functions below, capitalises first letter and adds full-stop at end.
const formatSentence = sentence => {
    let firstLetter = sentence.at(0);
    let clause = firstLetter.toUpperCase() + sentence.substring(1) + '.';
    return clause;
}

// Determines make up of a clause, calls relevant functions to get each component and assembles them into one string with punctuation marks.
export const independentClause = () => {
    const subjectObj = assembleNoun('subject');
    //console.log('subjectObj: ', subjectObj);
    //console.log('subjectObj[component] = ' + subjectObj['component']);
    //console.log('subjectObj[person] = ' + subjectObj['person']);
    const verbObj = assembleVerb(subjectObj);
    const objectObj = assembleNoun('object');
    let string = subjectObj['component'] + ' ' + verbObj['component'] + ' ' + objectObj['component'];
    return {
        string,
        subjectObj,
        verbObj,
        objectObj,
    };
}

export const compoundSentence = () => {
    const clauseObj1 = independentClause();
    const clauseString1 = clauseObj1.string;
    const clauseObj2 = independentClause();
    const clauseString2 = clauseObj2.string;
    const conjunction = dictionary.getRandomConjunction('coordinating');
    let string = clauseString1 + ' ' + conjunction.renderConjunction() + ' ' + clauseString2; 
    return {
        string,
        clauseObj1,
        clauseObj2,
        conjunction
    };
}


export const dependentClause = obj => {
    let pronoun;
    let pronounObj;
    if (obj.nounObj.nounType  === 'pronoun' && obj.caseType === 'subject') {
        pronoun = obj.nounObj.nominative;
        pronounObj = obj;
    } else if (obj.nounObj.nounType === 'pronoun' && obj.caseType === 'object') {
        pronoun = obj.nounObj.oblique;
        pronounObj = obj;
    } else {
        pronounObj = dictionary.getSpecificWord('it', 'noun');
        pronoun = pronounObj.word;
    }
    const verb = assembleVerb(pronounObj);

    // TO DO - Finish building this function. To determine whether there should be multiple types of dependent clauses. Refer to https://en.wikipedia.org/wiki/Dependent_clause
    
    // Tossing between incorporating adverbial clauses here + other dependent clause types. Will this impact how I plan to add adverbs in? Might be good to have this plus inserting adverb in independent clause. Having it in a dependent clause gives emphasis.
}


const complexSentence = () => {
    const independentObj = independentClause();
    // Determines what dependentClause should depend on (i.e. whether the subject or the object of the independentClause)
    let focusObj;
    if (randomBoolean()) {
        focusObj = independentObj.subjectObj;
     } else {
        focusObj = independentObj.objectObj;
     } 
    const dependentObj = dependentClause(focusObj.nounObj);
    const conjunction = dictionary.getRandomConjunction('subordinating');
    console.log(
        `independentObj:  ${independentObj}`,
        `dependentObj: ${dependentObj}`,
        `conjunction: ${conjunction}`
    )
    
    // NEED to finish building this function. Need to finish building dependentClause() first before finishing this function.

}

const newParagraph = (theme, numberOfClauses, sentenceTypes = []) => { // Object factory
    let _clauses = [];
    for (let i = 0; i < numberOfClauses; i ++) {
        let obj;
        let clause;
        let string;
        switch (sentenceTypes[i]) {
            case 'simple': 
                obj = independentClause();
                string = obj.string;
                console.log('Action: newParagraph()',
                    `string:`, string);
                clause = formatSentence(string);
                _clauses.push(clause);
                break;
            case 'compound':
                obj = compoundSentence();
                string = obj.string;
                clause = formatSentence(string);
                _clauses.push(clause);
                break;
            /*
            case 'complex':
                obj = complexSentence();
                string = obj.string;
                _clauses.push(clause);
                break;
            case 'compoundComplex':
                obj = compoundComplexSentence();
                string = obj.string;
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


