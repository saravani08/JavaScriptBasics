
// Function to translate English to Pig Latin
function translateToPigLatin(text) {
    return text.split(' ').map(word => {
        const firstLetter = word[0];
        const restOfWord = word.slice(1);
        const isUpperCase = firstLetter === firstLetter.toUpperCase();
        const translatedWord = restOfWord.toLowerCase() + firstLetter.toLowerCase() + 'ay';
        return isUpperCase ? translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1) : translatedWord;
    }).join(' ');
}



const englishText = "The quick brown fox";
const pigLatinText = translateToPigLatin(englishText);
console.log("English to Pig Latin:", pigLatinText);


