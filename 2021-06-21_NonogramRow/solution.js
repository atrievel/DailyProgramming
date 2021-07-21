const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const nonogramRow = (string) => {
    let solution = [];
    let currentCount = 0;

    String(string).split('')
        .forEach((c, i) => {
            if(c === '1') {
                currentCount++;
            }

            if(c === '0' && currentCount > 0) {
                solution.push(currentCount);
                currentCount = 0;
            }
        });

    if(currentCount > 1) {
        solution.push(currentCount);
    }

    return JSON.stringify(solution);
}

readline.question("Enter a string of of 1s and 0s: ", string => {
    console.log(`${string} nonogram rows are: ${nonogramRow(string)}`);
    readline.close();
});