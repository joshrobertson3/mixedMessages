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