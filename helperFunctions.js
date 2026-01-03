// Returns random object in array.
export const pickRandom = arr => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

// Returns a random boolean.
export const randomBoolean = () => {
    return (Math.random() < 0.5) ? true : false;
}

// Returns object filtered by its word.
export const filterByWord = (obj, word) => {
    return obj.filter(object => { return object.word === word });
}

// Takes the sentence as formed by the functions below, capitalises first letter and adds full-stop at end.
export const formatSentence = sentence => {
    let firstLetter = sentence.at(0);
    let clause = firstLetter.toUpperCase() + sentence.substring(1) + '.';
    return clause;
}

// Returns random number from range
export const randomNumber = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled +1)) + minCeiled;
}