const input = "a3b2c4a1";

let decompressed = "";

for (let i = 0; i < input.length; i += 2) {
    const letter = input[i];
    const count = Number (input[i + 1]);
decompressed += letter.repeat(count);
}

let counts = {};

for (let i = 0; i < decompressed.length; i++) {
    let letter = decompressed[i];
    if (counts[letter]) {
        counts[letter] = counts[letter] + 1;
    } else {
        counts[letter] = 1;
    }
}

let mostFrequent = "";
let maxCount = 0;

for (let letter in counts) {
    if (counts[letter] > maxCount) {
        maxCount = counts[letter];
        mostFrequent = letter;
    }
}

let uniqueLetters = 0;

for (let letter in counts) {
    uniqueLetters++;
}

let result = {
    decompressed,
    mostFrequent,
    uniqueLetters
};

console.log(result);

 
