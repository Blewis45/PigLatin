// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/


const testVowelWords = {
  eat: "eat-yay",
  omelet: "omelet-yay",
  are: "are-yay",
  egg: "egg-yay",
  explain: "explain-yay",
  always: "always-yay",
  ends: "ends-yay",
  every: "every-yay",
  another: "another-yay",
  under: "under-yay",
  island: "island-yay",
  elegant: "elegant-yay",
};

const testSimpleConsonantWords = {
  latin: "atin-lay",
  banana: "anana-bay",
  happy: "appy-hay",
  duck: "uck-day",
  dopest: "opest-day",
  me: "e-may",
  too: "oo-tay",
  will: "ill-way",
  moist: "oist-may",
  wet: "et-way",
  real: "eal-ray",
  simple: "imple-say",
  say: "ay-say",
  bagel: "agel-bay",
  you: "ou-yay",
};

const testClusteredConsonantWords = {
  cheers: "eers-chay",
  shesh: "esh-shay",
  smile: "ile-smay",
  string: "ing-stray",
  thanks: "anks-thay",
  trash: "ash-tray",
  stupid: "upid-stay",
  glove: "ove-glay",
};

const testVowelsConsonants = {

  all: "all-yay",
  are: "are-yay",
  stupid: "upid-stay",
  shesh: "esh-shay",
  moist: "oist-may",
  ends: "ends-yay",
  bagel: "agel-bay"
};

const textSentence = {
  "Its wings are too small to get its fat little body off the ground!": 
  "Its-yay ings-way are-yay oo-tay all-smay o-tay et-gay its-yay at-fay ittle-lay ody-bay off-yay e-thay ound-gray!",

  "Jack and Jill went up a hill to fetch a pail of water.":"ack-jay and-yay ill-jay ent-way up-yay a-yay ill-hay o-tay etch-fay a-yay ail-pay of-yay ater-way."
};

function capitalizeWord(name) {
  return name[0].toUpperCase() + name.slice(1);
}

function encodeVowelWord(word) {

  let firstletter = word[0].toLowerCase();

  if
    (firstletter === "a" || 
    firstletter === "e" || 
    firstletter === "i" || 
    firstletter === "o" ||  
    firstletter === "u" || 
    firstletter === "y")
    {

      word = word + "-yay"
      return word;
  }

  

  return word // replace this!
}

// Write your unit tests here

/* let test = encodeVowelWord("-all");

console.log(test);
console.assert(test === "All-yay", JSON.stringify({

  test:"encodeVowelWord(All)",
  "expected": "All-yay",
  "result": test

  

}));

 console.assert(test === "Ball", JSON.stringify({

  "test":"encodeVowelWord(Ball)",
  "expected": "Ball",
  "result": test

  

})); 


console.assert(test === "-all", JSON.stringify({

  "test":"encodeVowelWord(-all)",
  "expected": "-all",
  "result": test

  

})); */ 

let vowelKeys = Object.keys(testVowelWords);

for(key of vowelKeys){
  let currentValue = testVowelWords[key];
  let results = encodeVowelWord(key);
  console.log(results);
  console.assert( results === currentValue,JSON.stringify({
    "test":"encodedVowelWord()",
    "expected": currentValue,
    "results": results



  }));
  
}
/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/

function encodeConsonantWord(word) {

 
  word = word.toLowerCase();
  let firstletter = word[0];
  let cons_phrase = "-";
  

    while
    (firstletter !== "a" || 
    firstletter !== "e" || 
    firstletter !== "i" || 
    firstletter !== "o" ||  
    firstletter !== "u" || 
    firstletter !== "y")
    {
      
      cons_phrase += word[0];
      word = word.slice(1);
      firstletter = word[0];
     

      if(firstletter == "a" || 
      firstletter == "e" || 
      firstletter == "i" || 
      firstletter == "o" ||  
      firstletter == "u" || 
      firstletter == "y"){

      return word + cons_phrase + "ay";


      }

    
  }

  return word; // replace this!
}




// Write your unit tests here




console.log("Start of Simple consonant tests");
let simpleconsonantKeys = Object.keys(testSimpleConsonantWords);

for(key of simpleconsonantKeys){
  let currentValue = testSimpleConsonantWords[key];

  console.log("Expected " + currentValue);
  
  let results = encodeConsonantWord(key);
  
  console.log("Results " + results);
  console.assert( results === currentValue,JSON.stringify({
    "test":"encodedConsonatWord(key)",
    "expected": currentValue,
    "results": results

  }));
  
}

console.log("Start of Complex consonant tests");
let complexConsonantKeys = Object.keys(testClusteredConsonantWords);

for(key of complexConsonantKeys){
  let currentValue = testClusteredConsonantWords[key];

  console.log("Expected " + currentValue);
  
  let results = encodeConsonantWord(key);
  console.log("Results " + results);
  
  console.assert( results === currentValue,JSON.stringify({
    "test":"encodedConsonatWord(key)",
    "expected": currentValue,
    "results": results



  }));
  
}




/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {

  if (word[0].toLowerCase() === "a" ||
      word[0].toLowerCase() === "e" ||
      word[0].toLowerCase() === "i" ||
      word[0].toLowerCase() === "o" ||
      word[0].toLowerCase() === "u" ||
      word[0].toLowerCase() === "y")
    {
      return encodeVowelWord(word);
        
    }
    return encodeConsonantWord(word); // replace this!
}



// Write your unit tests here

console.log("Simple and Consonants test");

let testVowConst = Object.keys(testVowelsConsonants);

for(key of testVowConst){
  let currentValue = testVowelsConsonants[key];

  console.log("Expected " + currentValue);
  
  let results = encodeWord(key);
  console.log("Results " + results);
  
  console.assert( results === currentValue,JSON.stringify({
    "test":"encodedConsonatWord(key)",
    "expected": currentValue,
    "results": results



  }));

}

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {

  let split_text = text.split(" ")
  let newText = "";

  for(word of split_text){
    if(word.endsWith("."))
      {

        console.log("In period");
        let no_punc = word.slice(0,-1);
        newText += no_punc = encodeWord(no_punc) + "."; 

      }

    else if(word.endsWith("?")){
      
        console.log("In question mark");
        let no_punc = word.slice(0,-1);
        newText += no_punc = encodeWord(no_punc) + "?"; 
    }

    else if(word.endsWith("!")){
      
      console.log("In exclamation mark");
      let no_punc = word.slice(0,-1);
      newText += no_punc = encodeWord(no_punc) + "!"; 
  }

    
  else{
      
      newText += newText = encodeWord(word) + " ";
    }  
    
  }

  return newText; // replace this!
}


console.log(encodeText("Jack and Jill went up a hill to fetch a pail of water"));


console.log("Senntence Text");

let testSentencesPig = Object.keys(textSentence);

for(key of testSentencesPig){
  let currentValue = textSentence[key];

  console.log("Expected " + currentValue);
  
  let results = encodeText(key);
  console.log("Results " + results);
  
  console.assert( results === currentValue,JSON.stringify({
    "test":"encodedConsonatWord(key)",
    "expected": currentValue,
    "results": results



  }));

}

// Write your unit tests here




//My button event

let button = document.querySelector("#Submit");

button.addEventListener("click",function(event){
  
  let myMessage = document.querySelector("#message");
  let latinTag = document.querySelector(".pigLatin");
  latinTag.innerHTML = "";

  console.log(myMessage.value)


  let pigLatin = encodeText(myMessage.value);

  latinTag.textContent = pigLatin;

})