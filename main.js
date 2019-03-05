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

const catName = () => {
    return 'killer';
}

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
 };

 //dot notation
 console.log(bucketOCats.cat2);

 //bracket notation
 console.log(bucketOCats['cat2']);

 console.log(bucketOCats.cat4.water);

 let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life); //42

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
  }

  //console log "Our company's lawyer is Jeff Winger" using dot notation

  console.log(`our company's lawyer is ${employee.name}`);

  //Console log "Jeff was hired on 09/22/2010" using bracket notation.
  console.log(`Jeff was hired on ${employee['hire_date']}`);

  //Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
  console.log(employee.vacation_days = 20);
  console.log(employee.vacation_days);

  let eom = "employee_of_the_month";
  //Use the variable above to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?
  console.log(employee[eom] = false);
  console.log(employee.employee_of_the_month);
  console.log(employee);

  const employeeModified = (divId, person) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += answer;
};

