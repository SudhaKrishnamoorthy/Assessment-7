function addToZero(myArray) {
    let arrCondition = false
    for(let i = 0; i < myArray.length; i++){
        for(let j = i + 1; j < myArray.length; j++){
     if(myArray[i] + myArray[j] === 0)
            arrCondition = true
            //console.log(i, j)
        }
    }
    console.log(arrCondition)
}
addToZero([1, -10, 5])


function hasUniqueChars(myString) {
    let uniqueCharsCond = true
    const myArray = [];
    for(let i = 0; i < myString.length; i++){
        myArray[i] = myString.charAt(i)
    
    }
        
    for(let i = 0; i < myArray.length; i++){
        for(let j = i + 1; j < myArray.length; j++){
     if(myArray[i] === myArray[j])
        uniqueCharsCond = false
            //console.log(i, j)
        }
    }
    console.log(uniqueCharsCond);
}
let str = 'abd'
hasUniqueChars(str)

function isPangram(myString) {
    let strArr = myString.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    
    }
     return true;   
    
    }
    console.log(isPangram('The quick brown fox jumps over the lazy dog'))
    //isPangram('abce')

    function findLongestWord(myList) {
        let longestWord = 0;
        for(let i = 0; i < myList.length; i++){
        if(myList[i].length > longestWord){ // If strSplit[i].length is greater than the word it is compared with...
        longestWord = myList[i].length; // ...then longestWord takes this new value
         }
         
      }
      console.log(longestWord)
    }
      
      findLongestWord(['The', 'brown', 'fox'])