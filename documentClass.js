import newParagraph from "./assemblers.js";

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
        const generatedParagraph = newParagraph(numberOfClauses, sentenceTypes);
        const paragraph = new Paragraph(generatedParagraph); //change (theme) to object i.e. ({ theme, numberOfClauses })
        this.paragraphs.push(paragraph);
        return paragraph;
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
    constructor({ _numberOfClauses, _clauses = []}) {
        this.numberOfClauses = _numberOfClauses;
        this.sentences = _clauses;
    }

    addSentence(sentenceType) {
        const generatedSentence = newSentence(sentenceType);
        this.sentences.push(generatedSentence);
        return generatedSentence;
    }

    renderParagraph() {
        let renderedParagraph = this.sentences.join(' ');
        return renderedParagraph;
    }
}

export default Document;