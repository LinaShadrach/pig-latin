var userInput = ("strength");
var output = (userInput);
var words = userInput.split(" ");
var outPutArr = [];
words.forEach(function(word){
  word.split("");
  checkWord(word);
  //set checkword equal to var that can be pushed into output string
})


var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n","p", "q", "r", "s", "t", "v", "w", "x", "z"];
var
console.log(userInputArr);

var checkWord = function(userInputArr)  {
  userInputArr.push("-");
  if(userInputArr.length > 1){
    vowels.forEach(function(vowel)  {
      if (userInputArr[0] === vowel && ) {
        userInputArr.push("w");
      }
    });
  }
  var checkFirst = function() {
    consonants.forEach(function(consonant){
      if (userInputArr[0] === consonant) {
        userInputArr.push(userInputArr.splice(0, 1));
        checkFirst();
      }
      if (userInputArr[0] === ("q")) {
        var quArr = userInputArr.splice(0,2);
        var qu = quArr.join("");
        userInputArr.push(qu);
      }
    });
    return output;
  };
  checkFirst();
  vowels.forEach(function(vowel)  {
    if (userInputArr[0] === vowel)  {
      userInputArr.push("ay");
    }
  });
  output = userInputArr.join("");

}



console.log(output);


$(document).ready(function()  {

});
