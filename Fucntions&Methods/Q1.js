/*Create A fucntion using the "function" Keyword that takes a 
strings as an argument & return the numebr of vowels in the string*/

function countVowels(str){
    let count = 0 ; 
    for(const char of str ){
      if(char ==="a " || char ==="e" || char ==="i" || char==="o" || char==="u"){
        count++;
      }
      return count++ ;
    }
    console.log(count);
}