const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​const teamMemberArray = [];

const cliIntroQuestion = {
    type: "list",
    message: `Welcome to the Team Profile Generator Application. 
    This program will allow the user to create an HTML based team profile display that will outline the team members as well as some brief information on each team member. 
    The user will be prompted to submit information on the team manager as well as select how many team members other than the manager are in the team. The user will then submit information for each team member, choosing if they are an engineer or intern and submit additional information based on the team member role selection. 
    Do you wish to continue with this application?`,
    choices: ["Yes, Start Building Team", "No, Close Application"],
    name: "cliIntroQ"

}


function cliIntro() {
    inquirer.prompt(cliIntroQuestion).then(appStart => {
        if (appStart.cliIntroQ === "Start Building Team") {
            console.log("start program")
        }
        else {
            console.log("Application Closed")
        }
    })
}



cliIntro();