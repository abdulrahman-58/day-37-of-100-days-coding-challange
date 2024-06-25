// Assalamualaikum @everyone 👋

// 🚀 Day 37 Challenge: Start Coding! 🚀

// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
const currentTime = new Date();
if(currentTime.getHours() < 12){
    console.log("Good morning");
}
console.log(`\n`);

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score: number): string{
    if(score >= 80){
        return "A";
    } else if(score >= 70){
        return "B";
    } else if(score >= 60){
        return "C";
    } else if(score >= 50){
        return "D";
    } else {
        return "F"
    }
}
console.log(assignGrade(67));
console.log(assignGrade(45));
console.log(`\n`);

// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizePerson(age: number): string{
    if(age < 13){
        return "child";
    } else if(age <= 19){
        return "teenager";
    } else {
        return "adult"
    }
}
console.log(categorizePerson(50));
console.log(categorizePerson(16));
console.log(categorizePerson(12));

