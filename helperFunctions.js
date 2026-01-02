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