This project is the Mixed Messages portfolio project from Codecademy.

The purpose of this project is to create a fully randomised but gramatically coherent sentence that consists of a subject, verb and object. The verb can either be regular or modal (i.e. modal + auxilliary) but it must agree gramatically with the subject.

It also randomly adds adjectives before nouns. Articles also need to gramatically agree with the adjective/noun that follows it.

This project is split into:
    - Word Repository
        - 1 parent class (Word), and these child classes:
            - Nouns (including pronouns),
            - Verbs, and
            - Adjectives.

    - Assemblers
        - 3 functions that each assemble:
            - The subject and object of a sentence,
            - The verb of a sentence, and 
            - The entire clause bringing together each component to return the fully constructed sentence. 

    - Main
        - Imports relevant classes and functions,
        - Allows the user to add words by creating instances of relevant classes,
        - Runs the entire program by calling assembleClause();

This project can be extended in the future to include prepositions, conjunctions and more complicated sentence structures.

Ideas for expansion:
- connect to Word of the Day API - add the word of the day to dictionary every day,
- connect to widget to display a sentence each day,
- add conjunctions, adverbs,
- add turn assembleClause function into a switch to create different types of clauses (for things like passive, subjunctive, tense)
- abstract the method of creating clauses into their own functions for each type. The current assembleClause function can be a new standardClause function, then add dependentClause, passiveClause, subjunctiveClause,
- create functions to randomise how many clauses required and if each clause should include a dependent clause, then create functions to assemble clauses into paragraphs, then randomise number of paragraphs, and assemble paragraphs.
- adding adverb functionality - clause randomiser needs to randomise whether an adverb is required, gets adverb from dictionary as obj including a property stating its type, signalling to the assemble clause function where to insert it in the sentence
    - ie:
        - if temporal, at the beginning with a comma (eg "Yesterday, I went...), or at the end of a sentence (eg "I went to the shop yesterday.") - this is dependent on tense, therefore there should be another variable that holds the state of tense.
        - if manner, near the verb (eg he turned left),
        - etc