// Code your solutions in this file


function writeCards (names, event){
  const messages = [];
  
  for (let i = 0 ; i < names.length ; i++){
    messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift.`;
  }
  
  
  return messages;
}


 function countdown(number){
  number < 0 ? number *= -1 : number;
  while (number >= 0 ){
    console.log(number);
    number--;
  }
}