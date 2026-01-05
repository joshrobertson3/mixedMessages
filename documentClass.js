//import newParagraph from "./assemblers.js";
import { newSentence } from "./assemblers.js";
import { randomNumber, randomBoolean } from "./helperFunctions.js"

class Document {
    constructor(title, author) {
        this._title = title;
        this._author = author;
        this.paragraphs = [];
    }

    get author() {
        return this._author;
    }

    get title() {
        return this._title;
    }

    set author(newAuth) {
        if (typeof newAuth === 'string') {
            this._author = newAuth;
            return this._author;
        } else {
            throw new Error('Author must be a string.')
        }
    }

    set title(newTitle) {
        if (typeof newTitle === 'string') {
            this._title = newTitle;
            return this._title;
        } else {
            throw new Error('Title must be a string.')
        }
    }

    generateParagraph(numberOfClauses, sentenceTypes = []) {
        // Calls newParagraph factory function in assemblers.js. 
        //const generatedParagraph = newParagraph(numberOfClauses, sentenceTypes);
        const paragraph = new Paragraph(numberOfClauses, sentenceTypes = []);
        this.paragraphs.push(paragraph);
        return paragraph;
    }

    generateRandomDocument() {
        let paragraphCount = randomNumber(1, 10);
        let clauseCount;
        for (let i = 0; i < paragraphCount; i ++) {
            clauseCount = randomNumber(1,8);
            let sentenceType;
            let sentenceTypes = [];
            for (let j = 0; j < clauseCount; j ++) {
                if (randomBoolean()) {
                    sentenceType = 'simple'
                } else {
                    sentenceType = 'compound'
                }
                sentenceTypes.push(sentenceType);
            }
            //let generatedParagraph = newParagraph(clauseCount, sentenceTypes);
            let paragraph = new Paragraph(clauseCount, sentenceTypes);
            this.paragraphs.push(paragraph);
        }
        //console.log(this.document.renderDocument());
        return this.paragraphs;
    }

    renderDocument() {
        let renderedParagraph;
        let arrayLength = this.paragraphs.length;
        let paragraphs = [];
        let header = this._title + '\n' + `by ${this._author}`
        paragraphs.push(header);
        //console.log(arrayLength);
        for (let i = 0; i < arrayLength; i ++) {
            //console.log(`paragraph to render:`, this.paragraphs[i]);
            renderedParagraph = this.paragraphs[i].renderParagraph();
            paragraphs.push(renderedParagraph);
        }
        //console.log(paragraphs);
        return paragraphs.join('\n\n');
    }
}

class Paragraph {
    constructor(numberOfClauses, sentenceTypes = []) {//{ _numberOfClauses, _clauses = []}) {
        let clauses = [];
        let clause;
        for (let i = 0; i < numberOfClauses; i ++) {
            clause = newSentence(sentenceTypes[i]);
            clauses.push(clause);
        }
        this.numberOfClauses = numberOfClauses;
        this.sentences = clauses;
    }

    addSentence(sentenceType) {
        const generatedSentence = newSentence(sentenceType);
        this.sentences.push(generatedSentence);
        this.numberOfClauses ++;
        return generatedSentence;
    }

    renderParagraph() {
        //console.log(this.sentences[0]);
        let clause;
        let sentences = [];
        for (let i = 0; i < this.sentences.length; i ++) {
            clause = this.sentences[i].clauseString;
            sentences.push(clause);
        }
        let renderedParagraph = sentences.join(' ');
        return renderedParagraph;
    }
}


class Sentence {
    constructor({ clauseString, clauseObject }) {
        this.sentence = clauseString;
        this.clauseObject = clauseObject;
    }

    get

    //changeClauseElement()?
}


export default Document;