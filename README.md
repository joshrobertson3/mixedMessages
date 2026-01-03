# Mixed Messages

#### Summary
A JavaScript-based sentence generator that leverages object-oriented programming to create grammatically coherent, randomised sentences.

#### Purpose

The purpose of this project is to create a fully randomised but gramatically coherent sentence that consists of a subject, verb and object. The verb can either be regular or modal (i.e. modal + auxilliary) but it must agree gramatically with the subject.

It also randomly adds adjectives before nouns. Articles also need to agree with the adjective/noun that follows it.

I built this project based on the Mixed Messages portfolio project from Codecademy. The project brief was the following:

> For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

----------

#### Structure

This program is split into the following files:

##### Document
- A Document class that stores instances of documents which includes a title, the author's name, and an array of paragraphs which are themselves instances of the Paragraph class. It includes these methods:
    - getters and setters for the title and author,
    - generateParagraph() which calls on the newParagraph factory function in assemblers.js and returns a paragraph object which is then passed into the constructor for the Paragraph class to tag it as a paragraph instance. 
    - renderDocument() which loops through the document's paragraph, calls on the renderParagraph() method from the Paragraph class to join all sentences together, then joins the paragraphs together with a line break between them and adds the title and author's name at the top of the document.
- A Paragraph class which tags the metadata of the generated paragraph and inclues the following methods:
    - addSentence() which allows for additional sentences to be added to specific paragraphs, and
    - renderParagraph() which loops through the paragraph array and joins all sentences together to form a paragraph.

##### Word Repository
- A Root class that stores arrays of words for use in the program with methods that create instances of the subclasses below and methods to randomly select words,
- Subclasses for nouns, verbs and adjectives with methods to render them.

##### Assemblers
- A variety of functions that:
    - Assemble elements of sentences including the subject, verb and object of a sentence,
    - Combine elements into different types of sentences, and
    - Generate paragraph objects by iteratively calling functions that build sentences.

All of these functions return objects that can be used to build more complex text.

##### Helper Functions
- A variety of useful modular functions that can be used across the program including:
    - pickRandom(array) - randomly picks an element from an array,
    - randomBoolean() - randomly returns true or false,
    - filderByWord(object, word) - allows filtering of an array of objects inside another object/class by a specific property inside that object.
    - formatSentence(sentence) - capitalises the first letter of a sentence and adds a full-stop at the end of the sentence.

##### Dictionary
- Defines 'dictionary' as the only instance of the Root class and exports it to the relevant files.

##### Main
- Imports all relevant classes and functions,
- Allows the user to add words by using methods from the Root to create instances of the Nouns, Verbs and Adjectives subclasses, and 
- Orchestrates the entire program by calling assembleClause().

-------

#### Running the program

From main.js, you can:
- create new documents,
- add paragraphs to documents,
- add sentences to paragraphs,
- render paragraphs,
- render documents, and
- add words to the dictionary,

**Before you generate text, you'll need to create a document.**

##### Create new document
To create a new document, simply create a new instance of the Document class and save it to a const variable.

```const newDocument = new Document('Document Title', 'Name of Author');```

You can create as many documents as you'd like.

##### Add paragraphs to you document
After initialising your document, you'll then be able to add paragraphs to it.

Simply call the .generateParagraph(numberOfClauses, sentenceTypes = []) method on your document. This takes the number of sentences you want in the paragraph (numberOfClauses) and an array of sentence types (either 'simple' or 'compound' at the momnet) for each of your sentences (sentenceTypes).

```newDocument.generateParagraph(4, ['compound', 'compound', 'simple', 'compound']);```

##### Add sentences to paragraphs
If you want to add more sentences to a specific paragraph, you can use the addSentence(sentenceType) method on the specific paragraph and enter your preferred sentence type as the argument (either 'compound' or 'simple').

```newDocument.paragraph[index].addSentence('simple');```

##### Rendering paragraphs
If you'd like to return a specific paragraph rendered for readability, you can call the .renderParagraph() method on the specific paragraph. This returns a string of all the sentences of that paragraph joined together.

```newDocument.paragraph[index].renderParagraph();```

##### Rendering your whole document
To render your whole document for readability, call the .renderDocument() method on the document itself and log it to the console. This adds the title and author at the top of your document, then joins all the paragraphs together separated with 2 line breaks each.

```console.log(newDocument.renderDocument());```


##### Adding words to the dictonary
To add words to the dictionary, declare a const variable by calling one of the following methods on 'dictionary':

###### addNoun(word, nounType, gender, nominative, oblique, person)
- This takes the following arguments:
    - word: this acts as the 'id' of the word - this should be the word itself (same as nominative),
    - nounType: either 'pronoun' or 'substantive'. Can extend to include other types, however function logic is based on these two types only (for now),
    - gender: either 'neutral', 'masculine', 'feminine'. This is grammatical gender which for all words in English (except pronouns and obvious words like 'woman' and 'man') is 'neutral'.
    - nominative: the word as its used when it's the subject of a sentence. Affects pronouns (mostly). Eg 'I', 'he', 'she', 'they'.
    - oblique: the word as its used when it's the object of a sentence. Affects pronouns (mostly). Eg 'me', 'him', 'her', 'them'.
    person: either 'first', 'second' or 'third'. Most substantive words will be 'third', pronouns can be any type. 

Example (pronoun):

```const he = dictionary.addNoun('he', 'pronoun', 'masculine', 'he', 'him', 'third);```

Example (substantive):

```const apple = dictionary.addNoun('apple', 'substantive', 'neutral', 'apple', 'apple', 'third');```
    
###### addVerb(word, verbType, thirdPerson)
- This takes the following arguments:
    - word: same as addNoun() above. Should be how the word is conjugated for first person. I will probably add both first and second person as additional arguments,
    - verbType: currently either 'regular' or 'modal'. I will probaby extend this to include other types.
    - thirdPerson: the word as conjugated for third person.
- I will eventually add things like past participle, continuous participle, etc.

Example (modal):

```const should = dictionary.addVerb('should', 'modal', 'should');```

Example (regular):

```const read = dictionary.addVerb('read', 'regular', 'reads');```

###### addAdjective(word)
- This takes 'word' as the argument which is the same as above.

Example:

```const happy = dictionary.addAdjective('happy');```

###### addConjunction(word, conjuncType)
- This takes the folllowing arguments:
    - word: as above,
    - conjuncType: either 'coordinating' or 'subordinating'. Coordinating conjunctions are used in compound sentences while subordinating conjunctions are used to create complex sentences.
- I will need to add more arguments here to indicate what conjunctions can be used for different types of complex sentences.

Example (coordinating):

```const and = dictionary.addConjunction('and', 'coordinating');```

Example (subordinating):

```const however = dictionary.addConjunction('however', 'subordinating');```


--------
#### Examples of returned results

**I entered the following text in main.js:**

![A screenshot of the text I entered] (./assets/inputCode.png)

**The first paragraph of my document originally returned:**

![A screenshot of the original version of the first paragraph's object] (assets/originalParagraph.png)

**The program then added this sentence to the first paragraph:**

![A screenshot of the text returned for the new sentence] (assets/addedSentence.png)

**The first paragraph then became:**

![A screenshot of the altered version of the first paragraph's object] (assets/alteredParagraph.png)

**And finally, the document was rendered as:**

![A screenshot of the entire document as rendered] (assets/renderedDocument.png)

--------

#### Ideas for Expansion
I will be extending this project to include the following:
- Add more complex sentence structures including dependent clauses, passive voice, tense, subjunctive, and imperative constructions,
- Add adverbs - the clause randomiser will need to determine whether an adverb is required and then based on what adverb is returned from the dictionary, it will place it in the sentence based on its type, i.e.
    - if temporal, at the beginning with a comma (eg 'Yesterday, I went to the shop), or at the end of a sentence (eg 'I went to the shop yesterday),
    - if manner, near the verb (eg 'he turned left'), etc
- Add prepositions,
- Connect to an API to add words to the dictionary each day,
- Build a SQL database to store words used for easy retrival,
- Create a widget to display a random sentence at various times of the day.

This is my very first end-to-end project in JavaScript. :smiley:

I'm keen to continue building on this project as I continue my journey!