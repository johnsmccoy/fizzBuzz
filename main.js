const fizzBuzz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31];
//make array loop

for (i = 0; i < fizzBuzz.length; i++)
{ 
     if (i%5===0 && i%3===0) {
    console.log("fizzbuzz");
    }
    else if (i%3===0){
        console.log("fizz");
    }
    else if (i%5===0){
        console.log("buzz");
    }
    else
    {
        console.log(i);
    }

}

//another way to do it

let numbers = [1]
for (let i = 0; i <= 30; i++){
numbers[i]=i
if(i % 3 === 0 && i % 5 === 0){
    numbers[i]= "fizz buzz";
    } else if (i % 5 === 0){
        numbers[i]= "buzz";
    } else if (i % 3 === 0){
        numbers[i]="fizz";
    }
  console.log(numbers)  
}