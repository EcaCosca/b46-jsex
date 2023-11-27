// 💻 JS Variable – Scope

// let myVar = 4;

// function titi() {
//   const myVar = 5;
// }

// titi();

// console.log(myVar);

// 💻 JS Operator – Equals

// if (1 === true) {
//     console.log("OK");
//   } else {
//     console.log("NOK");
//   }

// 💻 JS Conditions – If/Else

// const compare = (num1, num2) => {
//     let result = ''

//     if(num1>num2){
//         result = `The greater number of ${num1} and ${num2} is ${num1}.`
//     }else if(num1<num2){
//         result = 'The greater number of '+num1+' and '+num2+" is "+num2
//     }else{
//         result = 'Both numbers are equal'
//     }

//     return result
// }

// console.log(compare(5, 6))
// console.log(compare(2, 2))
// console.log(compare(5, 3))

// 💻 JS Conditions – Switch

// function myFavouriteColor(color) {
//     switch (color) {
//     case 'blue':
//         return "The color is blue";
//     case 'red':
//         return "The color is red";
//     default:
//         return "It's not a color that I know";
//     }
// }

// console.log(myFavouriteColor('blue'));
// console.log(myFavouriteColor('red'));
// console.log(myFavouriteColor('green'));

// 💻 JS Date – Time and hour

const showTime = () => {
    const time = new Date();
    let result = '';

    if(time.getHours() < 10){
        result += '0'+time.getHours()
    }else{
        result += time.getHours()
    }

    result += ':'

    time.getMinutes() < 10 ? result += '0'+time.getMinutes() : result += time.getMinutes()
    
    console.log(result);
}

showTime()

const showDate = () => {
    const date = new Date();
    let result = '';

    if(date.getMonth() < 10){
        result += '0'+date.getMonth()+1
    }else{
        console.log(date.getMonth());
        result += date.getMonth()+1
    }

    result += '.'


    date.getDate() < 10 ? result += '0'+date.getDate() : result += date.getDate()

    
    console.log(result);
}

showDate()