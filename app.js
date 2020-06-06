const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const cliIntroQuestion = {
	type: 'list',
	message: `
        Welcome to the Team Profile Generator Application. 
        This program will allow the user to create an HTML based team profile display that will outline the team members as well as some brief information on each team member. 
        
        The user will be prompted to submit information on the team manager as well as select how many team members other than the manager are in the team. 
        The user will then submit information for each team member, choosing if they are an engineer or intern and submit additional information based on the team member role selection. 

        Do you wish to continue with this application?`,
	choices: ['Yes, Start Building Team', 'No, Close Application'],
	name: 'cliIntroQ',
};

const managerQuestions = [
	{
		type: 'input',
		message: "What is the Manager's name?",
		name: 'managerName',
	},
	{
		type: 'input',
		message: "What is the Manager's ID number?",
		name: 'managerId',
	},
	{
		type: 'input',
		message: "What is the Manager's email?",
		name: 'manageEmail',
	},
	{
		type: 'input',
		message: "What is the Manager's office number?",
		name: 'managerOfficeNumber',
	},
];

const endManagerQuestions = {
	type: 'list',
	message: 'Would you like to add another team member to this team? Select Yes to add an Engineer or Intern team member or select No if no additional team members need to be added.',
	choices: ['Yes', 'No'],
	name: 'teamSize',
};

const teamMemberRolePick = {
	type: 'list',
	message: 'Is this team member an Engineer or an Intern?',
	choices: ['Engineer', 'Intern'],
	name: 'teamMemberRoleType',
};

const engineerQuestions = [
	{
		type: 'input',
		message: "What is this Engineer's name?",
		name: 'enginnerName',
	},
	{
		type: 'input',
		message: "What is this Engineer's ID number?",
		name: 'engineerId',
	},
	{
		type: 'input',
		message: "What is this Engineer's email?",
		name: 'engineerEmail',
	},
	{
		type: 'input',
		message: "What is this Engineer's GitHub Profile Name?",
		name: 'engineerGithub',
	},
];

const internQuestions = [
	{
		type: 'input',
		message: "What is this Intern's name?",
		name: 'internName',
	},
	{
		type: 'input',
		message: "What is this Intern's ID number?",
		name: 'internId',
	},
	{
		type: 'input',
		message: "What is this Intern's email?",
		name: 'internEmail',
	},
	{
		type: 'input',
		message: "What is this Intern's School/University?",
		name: 'internGithub',
	},
];

function cliIntro() {
	inquirer.prompt(cliIntroQuestion).then((appStart) => {
		if (appStart.cliIntroQ === 'Yes, Start Building Team') {
			console.log('Please Submit Manager Profile Information');
			managerInfo();
		} else {
			console.log('Application Closed');
		}
	});
}

//* Function to build the team manager and then call the function to start building the team size
function managerInfo() {
	inquirer.prompt(managerQuestions).then((managerBuild) => {
		let { managerName, managerId, manageEmail, managerOfficeNumber } = managerBuild;
		console.log('---------------------');
		console.log(managerBuild);
		console.log('---------------------');

		teamSizeInfo();
	});
}

//* Function to determine the size of the team with additional engineers or interns
function teamSizeInfo() {
	inquirer.prompt(endManagerQuestions).then((teamSize) => {
		if (teamSize.teamSize === 'Yes') {
			teamMemberLoop();
		}
		if (teamSize.teamSize === 'No') {
			//!Call Function to end program
		}
	});
}

//* Function to choose the type of team member (engineer or intern) and prompt questions to build additional class constructors.
function teamMemberLoop() {
	inquirer.prompt(teamMemberRolePick).then((teamrole) => {
		if (teamrole.teamMemberRoleType === 'Engineer') {
			console.log('Please Submit Engineer Profile Information');
			inquirer.prompt(engineerQuestions).then((engineerBuild) => {
				teamSizeInfo();
			});
		} else if (teamrole.teamMemberRoleType === 'Intern') {
			console.log('Please Submit Intern Profile Information');
			inquirer.prompt(internQuestions).then((internBuild) => {
				teamSizeInfo();
			});
		}
	});
}

cliIntro();
