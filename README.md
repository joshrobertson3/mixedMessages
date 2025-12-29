# Mixed Messages

#### Summary
A JavaScript-based sentence generator that leverages object-oriented programming to create grammatically coherent, randomised sentences.

#### Purpose

The purpose of this project is to create a fully randomised by gramatically coherent sentence that consists of a subject, verb and object. The verb can either be regular or modal (i.e. modal + auxilliary) but it must agree gramatically with the subject.

It also randomly adds adjectives before nouns. Articles also need to agree with the adjective/noun that follows it.

I built this project based on the Mixed Messages portfolio project from Codecademy. The project brief was the following:

> For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

#### Structure

This program is split into the following files:

##### Word Repository
- A Root class that stores arrays of words for use in the program with methods that create instances of the subclasses below and methods to randomly select words,
- Subclasses for nouns, verbs and adjectives with methods to render them.

##### Assemblers
- 3 functions that each assemble:
    - The subject and object of a sentence returning both the component and the 'person' that the subject is in,
    - The verb of a sentence based on the subject's 'person', and 
    - The entire clause brining together each component to return the fully constructed sentence.

##### Dictionary
- Defines 'dictionary' as the only instance of the Root class and exports it to the relevant files.

##### Main
- Imports all relevant classes and functions,
- Allows the user to add words by using methods from the Root to create instances of the Nouns, Verbs and Adjectives subclasses, and 
- Orchestrates the entire program by calling assembleClause()/

-------

#### Ideas for Expansion
I will be extending this project to include the following:
- Add more complex sentence structures including dependent clauses, passive voice, tense, subjunctive, and imperative constructions,
- Add a function to join multiple sentences together to form paragraphs, and join multiple paragraphs to form essay-like text,
- Add adverbs - the clause randomiser will need to determine whether an adverb is required and then based on what adverb is returned from the dictionary, it will place it in the sentence based on its type, i.e.
    - if temporal, at the beginning with a comma (eg 'Yesterday, I went to the shop), or at the end of a sentence (eg 'I went to the shop yesterday),
    - if manner, near the verb (eg 'he turned left'), etc
- Add conjunctions and prepositions,
- Connect to an API to add words to the dictionary each day,
- Build a SQL database to store words used for easy retrival,
- Create a widget to display a random sentence at various times of the day.

This is my very first end-to-end project in JavaScript. I only started learning to code in May 2025 :smiley:

I'm keen to continue building on this project as I continue my journey!