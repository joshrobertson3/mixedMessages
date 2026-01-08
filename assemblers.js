import dictionary from "./dictionary.js";
import Element from "./element.js";


// Determines make up of a clause, calls relevant functions to get each string and assembles them into one string with punctuation marks.
export const independentClause = () => {
    //const subjectObj = assembleNoun('subject'); // to delete
    const subjectElement = new Element('nounSubject');
    //console.log('subjectElement: \n', subjectElement);
    //console.log('subjectElement.string = ' + subjectElement.string);
    //console.log(`subjectElement.elementObject.nounObj.person = `, subjectElement.elementObject.nounObj.person);
    //const verbObj = assembleVerb(subjectObj); // to delete
    const verbElement = new Element ('verb', subjectElement);
    //const objectObj = assembleNoun('object'); // to delete
    const objectElement = new Element('nounObject')
    let string = subjectElement.string + ' ' + verbElement.string + ' ' + objectElement.string;
    return {
        string,
        subjectElement,
        verbElement,
        objectElement,
    };
}

export const compoundSentence = () => {
    const clauseObj1 = independentClause();
    const clauseString1 = clauseObj1.string;
    const clauseObj2 = independentClause();
    const clauseString2 = clauseObj2.string;
    const conjunction = dictionary.getRandomConjunction('coordinating');
    let string = clauseString1 + ', ' + conjunction.renderConjunction() + ' ' + clauseString2; 
    return {
        string,
        clauseObj1,
        clauseObj2,
        conjunction
    };
}

/*
// TO DO - Finish building this function. To determine whether there should be multiple types of dependent clauses. Refer to https://en.wikipedia.org/wiki/Dependent_clause
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
    const verb = assembleVerb(pronounObj); // There should be more info passed into assembleVerb - eg type of dependent clause because that influences tense
    
    // Tossing between incorporating adverbial clauses here + other dependent clause types. Will this impact how I plan to add adverbs in? Might be good to have this plus inserting adverb in independent clause. Having it in a dependent clause gives emphasis.
}

const complexSentence = theme => {
    const independentObj = independentClause(theme);
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
*/

/*Deprecated
export const newSentence = sentenceType => { //This should be an obj factory to return to the paragraph method that creates a new instance of the sentence class.
    let clauseObject;
    let clauseString;
    let string;
    switch (sentenceType) {
            case 'simple': 
                clauseObject = independentClause();
                string = clauseObject.string;
                //console.log(`Action: newSentence(${sentenceType})`, `string:`, string);
                clauseString = formatSentence(string);
                //return clause; // TO DO: Should return an object - then feed it into a Sentence class
                break;
            case 'compound':
                clauseObject = compoundSentence();
                string = clauseObject.string;
                //console.log(`Action: newSentence(${sentenceType})`, `string:`, string);
                clauseString = formatSentence(string);
                //return clause; // TO DO: Should return an object
                break;
            /*
            case 'complex':
                clauseObject = complexSentence();
                clauseString = clauseObject.string;
                //return clause;
                break;
            case 'compoundComplex':
                clauseObject = compoundComplexSentence();
                clauseString = clauseObject.string;
                //return clause;
                break;
            
            default:
                throw new Error('Error! Something has gone wrong with newSentence().')
        }
    return { //Returning object now
        clauseString,
        clauseObject
    }
}
*/

/*Deprecated 
const newParagraph = (numberOfClauses, sentenceTypes = []) => { // Object factory
    let _clauses = [];
    let clause;
    for (let i = 0; i < numberOfClauses; i ++) {
        clause = newSentence(sentenceTypes[i]);
        _clauses.push(clause);
    }

    return {
        //_theme: theme,
        _numberOfClauses: numberOfClauses,
        _clauses,
    }
}


export default newParagraph;
*/
