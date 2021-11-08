const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function newTitle(title){
  title = title.split(" ")

  function newTitleCaseWordFunc(word){
    if (typeof word == 'undefined'){
      return word;
    } else {
      word = word[0].toUpperCase() + word.slice(1);
      return word;
    }
  }
  let newTitleCasedWord = title.map(newTitleCaseWordFunc)

  // let newTitleCasedWord = newTitleCasedWord.join(" ");
  return newTitleCasedWord.join(" ");
}

function titleCased(){
  let newTitleCase = tutorials.map(newTitle)
  return newTitleCase;
}

console.log(titleCased());



