const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const iAmThirsty = (num) => {
   //do stuff
   if(num < 21) {
       return "drink some water";
   }
   else if(num > 20 && num < 65) {
       return "have a beer";
   }
   else {
       return "take a nap";
   }
   //if under 21, drink some water
   //if over 21 and under 65 have a beer
   //over 65 take a nap
};

console.log(iAmThirsty(55));
console.log(iAmThirsty(3));
console.log(iAmThirsty(70));

//const printToDom = (statement) => {
   // document.write(statement);
//}
printToDom("thirsty", iAmThirsty(6));
printToDom("thirsty", iAmThirsty(55));

printToDom("thirsty", iAmThirsty(70));