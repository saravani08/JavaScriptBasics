function longestToken(inputString) {
    let currentToken = "";
    let longestToken = "";

    for (let char of inputString) {
        if (char !== 'a' && char !== 'b') {
          
            currentToken += char;
        } else {
           
            if (currentToken.length > longestToken.length) {
                longestToken = currentToken;
            }
           
            currentToken = "";
        }
    }

   
    if (currentToken.length > longestToken.length) {
        longestToken = currentToken;
    }

    return longestToken;
}


console.log(longestToken("ababcdababefgababhiab")); 
console.log(longestToken("aba")); 
