/*Using the JavaScript language, have the function SnakeCase(str) take the str parameter being passed and return it in proper snake case format where each word is lowercased and separated from adjacent words via an underscore. The string will only contain letters and some combination of delimiter punctuation characters separating each word. 

For example: if str is "BOB loves-coding" then your program should return the string bob_loves_coding. 
Sample Test Cases
Input:"cats AND*Dogs-are Awesome"
Output:"cats_and_dogs_are_awesome"

Input:"a b c d-e-f%g"
Output:"a_b_c_d_e_f_g"
*/
function SnakeCase(str){
  var regex= /\W/;
  return str.split(regex).join("_").toLowerCase();
}
SnakeCase("cats AND*Dogs-are Awesome");

/*Using the JavaScript language, have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number. 
Sample Test Cases
Input:2222220222
Output:"true"

Input:20864*/
function isEven(num){
  return(Number.parseInt(num)%2 ===0);
}
 function SimpleEvens(num){
   return  num.toString().split("").every(isEven);
 
 }
 
 SimpleEvens(2222220222);
 
/*
Using the JavaScript language, have the function ASCIIConversion(str) take the str parameter being passed and return a new string where every character, aside from the space character, is replaced with its corresponding decimal character code. For example: if str is "dog" then your program should return the string 100111103 because d = 100, o = 111, g = 103.
Sample Test Cases
Input:"hello world"
Output:"104101108108111 119111114108100"

Input:"abc **"
Output:"979899 4242"
*/
function ASCIIConversion(str){
  var result=str.split(" ");
 return  result.map(function(word){
    return word.split("").map(function(letter){
      return letter.charCodeAt(0);
    }).join("");
  }).join(" ");
  
}

ASCIIConversion("abc **");

/*Using the JavaScript language, have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 
Sample Test Cases
Input:"aa6?9"
Output:"false"

Input:"acc?7??sss?3rr1??????5"
Output:"true"*/

function QuestionsMarks(str){
  var regex= /\d/g;
  var result =false;
  str.match(regex).reduce(function(acc,curr,index){
    acc = Number.parseInt(acc);
    curr= Number.parseInt(curr)
    if( acc+curr ===10){
      console.log(
      str.split(/\d/)[index].match(/[?]/g).length ===3);
      result = true;
    }
    return acc;
  })
 return result
}
QuestionsMarks("aaaaaaarrrrr??????")
