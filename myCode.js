const sumZero = (arr) =>{
    for(i=0; i<arr.length; i++){
        for(J=0; J<arr.length; J++){
            if(arr[i] + arr[J] === 0){
                return true
            }
        }
    }
    return false
}

// runtime: O(n^2)
// space: O(n)
// forgive the slow runtime, i'm incredibly tired right now. I wrote a while loop the other day with two variables as pointers, if that 
// helps lol.

const uniqueChars = (str) =>{
    for(i = 0; i < str.length - 1; i++){
        if(str.includes(str[i], i + 1)) {
            return false
        }
        }
    return true
}

// runtime: O(n) we only have to loop through once.
// space: O(n) depends on how large the string is.

const isPangram = (str) => {

    let letters = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;

    let lowercase = str.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < letters.length; i++){
     if(lowercase.indexOf(letters[i]) === -1){
       return false
     }
    }
   
   return true
}

// runtime: O(n) only one loop needed.
// space: O(n)depends on how large the string is, again. And we're not creating additional variables from the input, though i do have 
// the two for letters and regex to trim white space throughout.

const longestWord = (arr) => {
    let longest = ''
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    
    return longest.length
}

// runtime: O(n)
// space O(n)

//problem 1
perf.start();
sumZero([2,2,2,-2]); //[2,2,2] for false
let sumZeroTime = perf.stop();
//problem 2
perf.start();         
uniqueChars('abbd'); //abcd for true
let uniqueCharsTime = perf.stop();
//problem 3 
perf.start();
isPangram('the quick brown fox jumped over the lazy dog');
let isPangramTime = perf.stop();
//problem 4
perf.start();
longestWord(['greetings', 'you', 'gremlin', 'thisisdefinitelythelongestword']);
let longestWordTime = perf.stop();

console.log(`Results:`)
console.log(`sumZero:`, sumZeroTime.preciseWords)
console.log(`uniqueChars:`, uniqueCharsTime.preciseWords)
console.log(`isPangram:`, isPangramTime.preciseWords)
console.log(`longestWord:`, longestWordTime.preciseWords)
