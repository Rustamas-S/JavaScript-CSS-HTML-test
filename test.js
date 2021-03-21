// we create two variables
const name = "Author";
const age = 16;

// we use variables to display information to the console
console.log (name + "is" + age + "years old");

// we use the conditional statement if else

if (age >= 18) {
    console.log(name + " is adult");
} else {
    console.log(name + " is not adult");
}   

    console.log("We're counting down the years to retirement...");
// We define the control variable i and loop through it 65 times
for (let i = age; i <= 65; i++) {
    console.log(i);
}


// We define a function that we will use further
// The function takes two parameters age and gender
function countRetirement (age, gender) {
     // First, we determine the age of retirement based
     // on gender
     let limit;
     if (gender === "male") {
        limit = 65;
     } else {
        limit = 60;
     }
    // We display the following years in the console 
    for (let i = age; i <= limit; i++) {
        console.log(i);
    }

    // We display information about the remaining years of work in a conditional window
    if (age < limit) {
        alert("You have " + (limit - age) + " work years left!");
    }
}

// We call the function for three cases
countRetirement(60, "male");
countRetirement(50, "female");
countRetirement(45, "other");
