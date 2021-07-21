const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const letterSum = (string) => {
    return (string + '')
        .trim()
        .toLowerCase()
        .split('')
        .map(c => c.charCodeAt(0) - 96)
        .reduce((a, b) => a + b, 0);
};

readline.question("Enter a string of characters: ", string => {
    console.log(`${string} letter sum is: ${letterSum(string)}`);
    readline.close();
});