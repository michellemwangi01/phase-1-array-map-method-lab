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

// const titleCased = () => {
//   tutorials.forEach((sentence)=>{
//     const words = sentence.split(' ');
//     console.log(words);
//     // tutorials.push(words.map((word)=>{
//     //   word.charAt(0).toUpperCase + word.slice(1);
//     // })); 
//   })
//   //return tutorials
// }

// // console.log(titleCased);



function titleCased(){
  let i = 0;
  tutorials.forEach((sentence)=>{
    const words = sentence.split(' ');
    //console.log(words);
    let newSentenceArray = words.map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1); 
    })
    //console.log(newSentenceArray)
    const newtitleCasedSentence = newSentenceArray.join(' ');
    //console.log(newtitleCasedSentence)
    tutorials[i] = newtitleCasedSentence;
    i++;
})

return tutorials;

}

console.log(titleCased());

