// 'This is Segun.'

//this determine the number of chracters, length of space
function countStr(str) {  
  let i;
  let finalStrResult=''
  for(i=0; i<str.length; i++) //you can do 1<=str.length-1(for the condition) i is less than because its starting from 0
  {
    if (str[i]!== ' ') {        //to target index you use str[i]// it will ignore the space if it is.
      finalStrResult+=str[i]; 
    }
  }
  console.log(finalStrResult); //it has to be within the functions
  console.log(finalStrResult.length);
  
}

countStr('This is Segun.');


// this is to determine the number of words in the sentence

function stringCounter(str) { 
  let wordCount = 0;// this variable is intialized to count the number of words in a sentence
  let spaceCount = 0;// this variable is initialized to count the number of space in a sentence
  let i;// we use this to traverse the array
  let newStr = ''; 
  for (i=0;i<=str.length-1;i++) {
      if (str[i]!==' ') {//!== this is a condition that says if str[i](string index i) is not equal to an empty space then add that character to newStr while empty spaces will be ignored
          newStr += str[i];//this variable store all the characters in the sentence while ignoring the spaces in the sentence
      }
      else if (str[i]===' '){//this condition says if str[i] equal to a space in the string
          spaceCount++;//then and 1 to the variable SpaceCount if str[i] is equal to a space in the string
      }
  }
  wordCount = spaceCount +1;// the varible wordCount calculate the total number of word in a sentence. using the formula  of wordCount = spaceCount + 1
  console.log(`they are ${wordCount} words and ${newStr.length} characters in this sentence`);
}

stringCounter('This is Segun.');


//to check the number of vowel in a sentence
function vowelCheck(str) { 
  let i;//the variable used to traverse the array
  let count=0;// to count the number of vowels present in the array
  let char;// declaring the variable char
  let formattedStr = str.toLowerCase();//this to format the inputed sentence to lowercase and store in the variable of formattedStr
  for (i=0;i<=formattedStr.length-1;i++){
      char=formattedStr[i]// char is used to store the current value in the index of i in every iteration
      if (char==='a'||
      char ==='e'||
      char=== 'i'||
      char=== 'o'||
      char=== 'u') {// the condition is used is used to check if the value store in char is directly equal to any of the vowel characters
          count++// if there is a match, the count variable will increase by 1
      }
  }
  console.log('number of vowels = '+count);// this will ouput the number of vowels in the sentence
  console.log('length of sentence = '+str.length);// this will count the number of items in the string, with the spaces between words included
}

vowelCheck('SEGUN ISHOLA.');

