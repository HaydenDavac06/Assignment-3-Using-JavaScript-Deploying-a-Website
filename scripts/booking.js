/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailycost = 35;
let total = 0;
const FullDay = document.getElementById("full");
const HalfDay = document.getElementById("half");
const Clear = document.getElementById("clear-button");
const Cost = document.getElementById("calculated-cost");
const DaysSelected = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

DaysSelected.forEach(function(Weekday){
    const day = document.getElementById(Weekday);
    day.addEventListener("click", ChangeColor);

    function ChangeColor(){
        if (day.classList.contains("clicked")){
            console.log("Already Assessed");
        } else{
            day.classList.add("clicked");
            day.style.backgroundColor = "#E5AF42";
            total += dailycost;
            Calculate(total);
        }
    }
}); 

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function ClearDays() {
    DaysSelected.forEach(function(Weekday) {
        const day = document.getElementById(Weekday);
        if (day.classList.contains("clicked")) {
            day.classList.remove("clicked");
            day.style.backgroundColor = ""; // Set background color

        }
    });
    total = 0;
    Calculate();
}

// Attach ClearDays function to the Clear button
Clear.addEventListener("click", ClearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function ChangeRate(num, AddBg, RmvBg) {
    dailycost = num;
    AddBg.style.backgroundColor = "white";
    RmvBg.style.backgroundColor = "#E5AF42";
}

HalfDay.addEventListener("click", function(){
    ChangeRate(20, FullDay, HalfDay);});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

FullDay.addEventListener("click", function(){
    ChangeRate(35, HalfDay, FullDay);});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function Calculate(){
    Cost.innerHTML = total;
}