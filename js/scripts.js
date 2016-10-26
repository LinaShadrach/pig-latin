var pigLatin = function(userInput){
  debugger;
  var words = userInput.split(" ");
  var wordArr = [];
  var outputArr = [];
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n","p", "q", "r", "s", "t", "v", "w", "x", "z"];

  var changeWord = function(word){
    console.log(word);
    wordArr = word.slice();
    var punctBegin = false;
    var checkAlpha = /^[a-zA-Z]/;
    // if (wordArr[(wordArr.length)-1].match(/[^a-zA-Z]/))  {
    //   var punctuation = wordArr.splice(wordArr.length-1, 1);
    //   console.log(punctuation);
    //   punctBegin = true;
    // }
    wordArr.push("-");
    if(wordArr.length > 2){
      vowels.forEach(function(vowel)  {
        if(wordArr[0] === vowel){
          wordArr.push("w");
        }
      });
    }
    var checkFirst = function(word) {
      consonants.forEach(function(consonant){
        if (wordArr[0] === consonant) {
          wordArr.push(wordArr.splice(0, 1));
          checkFirst(wordArr);
        }
        if (wordArr[0] === ("q")) {
          var quArr = wordArr.splice(0,2);
          var qu = quArr.join("");
          wordArr.push(qu);
        }
      });
      return output;
    };
    checkFirst(wordArr);
    vowels.forEach(function(vowel)  {
      if (wordArr[0] === vowel)  {
        wordArr.push("ay");
      }
    });
    // if (punctBegin === true)  {
    //   wordArr.push(punctuation);
    // }
    return wordArr.join("");
  };

  words.forEach(function(word){
    var letters = word.split("");
    var pigLatinWord = changeWord(letters);
    outputArr.push(pigLatinWord);
  });
  var output = outputArr.join(" ");
  return output;
};

$(document).ready(function()  {
  $("form#sentence").submit(function(event){
    var sentenceInput = $("input#textbox").val();
    debugger;
    $(".output").text(pigLatin(sentenceInput));
    event.preventDefault();
  });
});
