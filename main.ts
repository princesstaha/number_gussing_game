import inquirer from "inquirer";



const randomNumber = Math.floor(Math.random()*10+1 );



const answers = await inquirer.prompt ([

    {

        name: "userGussedNumber",

        type: "number",

        message:"please guess a number between 1-10:",



    },

]);

if(answers.userGussedNumber === randomNumber){

    console.log("Congratulations! you guessed the right number,");

}

else{

    console.log("You gussed wrong number");

}