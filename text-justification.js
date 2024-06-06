/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

    // Initialize variables
    let output = []; // The array to store the justified text
    let line = []; // The array to store the words in the current line

    // Iterate through the words
    for (let i = 0; i < words.length; i++) {
        // Check if the current word can be added to the current line
        if (line.length === 0 || (line.length + line.reduce((t, x) => t + x.length, 0) + words[i].length) <= maxWidth) {
            // add it to the current line
            line.push(words[i]);
        } else {
            let outputLine = ""; // for storing the justified text for the current line
            // let check the length of the current line
            if (line.length === 1) {
                outputLine = line[0] + " ".repeat(maxWidth - line.reduce((t, x) => t + x.length, 0));
            } else {
                // let the current line be justified
                let gaps = line.length - 1;
                let lineLength = line.reduce((t, x) => t + x.length, 0);
                let spaces = maxWidth - lineLength;
                let isSpaceEvenNumber = (spaces % 2) === 0 ? true : false;
                let spacePerWord = Math.floor((spaces + (!isSpaceEvenNumber && spaces !== gaps ? 1 : 0)) / (gaps));
                // let add space between the words
                for (let j = 0; j < gaps; j++) {
                    outputLine += line[j] + " ".repeat(spacePerWord - (j === gaps - 1 && !isSpaceEvenNumber && spaces !== gaps ? 1 : 0));
                    if (j === gaps - 1) {
                        // last word
                        outputLine += line[j + 1];
                    }
                }
            }
            // add the current line to the output - justified
            output.push(outputLine);
            // start a new line with the current word
            line = [words[i]];
        }

        if (i === words.length - 1) {
            // add the last line to the output - left aligned
            output.push(line.join(" ") + " ".repeat(maxWidth - (line.reduce((t, x) => t + x.length, 0) + line.length - 1)));
        }
    }

    // log line and length - for testing
    // output.forEach((x, i) => console.log("Line: ", x, "Length: ", x.length));

    return output;
};


let words1 = ["This", "is", "an", "example", "of", "text", "justification."],
    maxWidth1 = 16;

console.log("Input: ", words1, maxWidth1);
console.log("Output: ", fullJustify(words1, maxWidth1));

let words2 = ["What","must","be","acknowledgment","shall","be"], 
    maxWidth2 = 16;

console.log("Input: ", words2, maxWidth2);
console.log("Output: ", fullJustify(words2, maxWidth2));

let words3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 
    maxWidth3 = 20;

console.log("Input: ", words3, maxWidth3);
console.log("Output: ", fullJustify(words3, maxWidth3));
