function printRectangularFrame(words) {
    if (!Array.isArray(words) || words.length === 0) {
      console.log("Please provide a non-empty list of strings.");
      return;
    }
  
    const maxLength = Math.max(...words.map(word => word.length));
  
   
    console.log("*".repeat(maxLength + 4));
  
   
    words.forEach(word => {
      const padding = maxLength - word.length;
      console.log(`* ${word}${" ".repeat(padding)} *`);
    });
  
 
    console.log("*".repeat(maxLength + 4));
  }
  
 
  const wordList = ["Hello", "World", "in", "a", "frame"];
  printRectangularFrame(wordList);