userInput = parseFloat(prompt('Enter your Marks : '));

if (userInput >= 0 && userInput <= 100){
    if(userInput >= 80){
        console.log('Your Grade is : A+');
    }

    else if(userInput>=70 && userInput <= 79){
        console.log('Your Grade is : A');
    }

    else if(userInput>=60 && userInput <= 69){
        console.log('Your Grade is : A-');
    }


    else if(userInput>=50 && userInput <= 59){
        console.log('Your Grade is : B');
    }

    else if(userInput>=40 && userInput <= 49){
        console.log('Your Grade is : B-');
    }

    else if(userInput>=33 && userInput <= 39){
        console.log('Your Grade is : D');
    }

    else{
    console.log('You are fall');
    }

}

else
    console.log('Marks is not Valed.');
