import { assembleNoun, assembleVerb } from "./assemblyHelpers.js";

class Element {
    constructor(elementType, subjectElement) {
        //I want to be able to call both assembleNoun and assembleVerb here.
        let elementObject;
        if (elementType === 'nounSubject') {
            elementObject = assembleNoun('subject');
        } else if (elementType === 'verb') {
            elementObject = assembleVerb(subjectElement);
        } else if (elementType === 'nounObject') {
            elementObject = assembleNoun('object');
        } else {
            throw new Error('elementType was unexpected')
        }

        this.string = elementObject.string;
        this.elementType = elementType;
        this.elementObject = elementObject;
    }
}

export default Element;