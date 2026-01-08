import dictionary from "./dictionary.js";
import { randomBoolean } from "./helperFunctions.js";

// Returns the subject/object of a sentence with either a random adjective attached or not
export const assembleNoun = caseType => {
    let string;
    let nounObj = dictionary.getRandomNoun();
    let articleType;
    if (randomBoolean()) {
        articleType = 'definite';
    } else {
        articleType = 'indefinite';
    }
    let adjRequired = randomBoolean();
    let noun = nounObj.renderNoun(caseType, adjRequired, articleType);
    //console.log(adjRequired);
    if (adjRequired && nounObj.nounType !== 'pronoun') {
        let adjective = dictionary.getRandomAdjective();
        string = adjective.renderAdjective(articleType) + ' ' + noun;
    } else {
        string = noun;
    }
    /*
    console.log(
        `Action: assembleNoun(${caseType})`,
        `result: { string: ${string}, caseType: ${caseType}, nounObj:`, nounObj, ' }'
    );
    */
    return { 
        string,
        caseType,
        nounObj
    };
}



//Returns the verb of a sentence either as a regular verb or as a modal verb combination.
export const assembleVerb = subjectObj => {
    let person = subjectObj.elementObject.nounObj.person;
    //console.log(person);
    let string;
    //let componentType; // querying whether needed
    let verbs = [];
    let verbObj = dictionary.getRandomVerb();
    verbs.push(verbObj);
    //console.log(`assembleVerb: verbs[0].verbType = `, verbs[0].verbType);
    let verbType = verbs[0].verbType;
    if (verbObj.verbType === 'modal') {
        //componentType = 'modal';
        let auxVerbObj;
        do {
            auxVerbObj = dictionary.getRandomVerb();
            //console.log('auxVerbObj: ' + auxVerbObj['word']);
        } while (auxVerbObj['verbType'] === 'modal');
        verbs.push(auxVerbObj)
        string = verbObj.renderVerb('firstPerson') + ' ' + auxVerbObj.renderVerb('firstPerson');
    } else {
        //componentType = 'notModal'
        string = verbObj.renderVerb(person);
    }
    /*
    console.log(
        `Action: assembleVerb(${obj})`,
        `result: { string: ${string}, componentType: ${componentType}, verbObj: `, verbObj, ' }'
    );
    */
    return {
        string,
        //componentType,
        verbType,
        verbs,
    } 
}