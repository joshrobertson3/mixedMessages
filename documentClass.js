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

    generateParagraph(theme, numberOfClauses, [sentenceTypes]) {
        // Calls newParagraph factory function in assemblers.js. 
        const paragraph = new Paragraph(theme); //change (theme) to object i.e. ({ theme, numberOfClauses })
        this.paragraphs.push(paragraph);
        return paragraph;
    }
}

class Paragraph {
    constructor(theme) {
        this.theme = theme;
        this.sentences = [];
    }

    addSentence(structure) {
        // Call the relevant sentence generator from assembly.js here passing structure as the argument - could work like a switch. Then feed the returned object as the arugment to create the sentence instance below.
        const sentence = new Sentence(structure); // change (structure) to an object i.e. ({ structure, tense, mood })
        this.sentences.push(sentence);
        return sentence;
    }
}

/*
class Sentence {
    constructor(structure) {
        this.structure = structure;
        this.sentence = '';
        this.elements = [];
    }

    generateSentence() //Hmm - i need to think of how this will work. How do you actually just generate a sentence. When entering 'addSentence(Structure)', does that then call the assembler for the relevant sentence, then feeds that in as the argument when creating the sentence instance - that way the class itself if just storing the data and the logic to build the next layer down.

    addElement(type) {
        const element = new Element(type);
        this.elements.push(element);
        return element;
    }
}

class Element {

}
*/