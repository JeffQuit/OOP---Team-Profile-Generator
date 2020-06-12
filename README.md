# Unit 10 OOP Homework: Template Engine - Employee Summary

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Project 10 of the UCLA Trilogy Full Stack Software Development Bootcamp tasked the students with building a team profile generator that started as a CLI application and would generate a stylized HTML
team profile page that had cards for one team manager, and multiple engineers and/or interns on the team. This project came packaged with pre-made Jest testing files that the student had to use in
conjunction with building out the applications's class js pages to ensure that the class constructors and the extensions for the various roles needed for the profile were properly working and would
pass all tests. Second, the student had to build out the main js file for the CLI application to take in the input of information for each type of role and then export that information into an HTML
generated file. To prompt the CLI user for the team profile roles and information about each specific role, the inquirer node package was used along with integrating these questions into a series of
functions that would determine what type of role needed to be prompted and created to ensure the correct information was collected during the user prompting phase and then saved as a new class. Once
all team profiles were generated and no new users needed to be added, the CLI application will render an HTML page in the output folder based on a series of HTML templates found in the repo Template
folder. One of the difficult parts of this project was trying to figure out how to have the user select how many team members were going to be generated. Initially, I figured out that there only had
to be one Manager as indicated in the project readme file ( The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and
interns.), so after prompting for the manager information, I originally had the application prompt the user for how many team members they wanted on the team. Unfortunately, I could not figure out how
to loop through the number that was set by the user to prompt the questions so I went with an alternate solution. The alternate solution was to prompt the user if they wanted to add a new team member
to the profile and if so, if they were an engineer or intern. Once the new profile was filled in and pushed to the array, it would then re-call the function to prompt the user to add another team
member. If the user said no, this would end the application and export the HTML file with a team profile generated success message. Since this function gets re-called each time a new employee has been
added to the array, you can keep adding new profiles to the page until you select the option for no more team members. What sets my version of this application apart from the other projects is that I
have integrated two features into my application. First, data validation for some of the inquirer questions. This was listed as one of the bonus tasks to complete. The validation is used for the email
prompt as well as the employee ID# prompt. If incorrect formatting for these values is inputted, then a console.log message will report that the formatting is incorrect and to re-enter this
information. Second, I implemented color-coded console log messages from a previous activity in the OOP folder's activity page, the Logger activity, that taught how to change the color of the console
log messages. The color coding is used to indicate different input types for the application including the three role types, valid formatting submissions, invalid formatting submissions, closing the
application and when the application has been completed thus exporting the HTML file.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install
command in your terminal/bash shell. Once this has been completed, you are ready to use the application!

## Usage

To use this application, first, pull up the repo's folder in your terminal/bash shell and run the command node app,js. This will then prompt you with the welcome message and how to use the program.
Read the messages and either select from the list what you want to submit, or submit the requested information. You will be prompted for information such as full names, emails, employee ID numbers,
github profiles, office numbers, and university/schools depending on the type of team member you are submitting. When submitting the team member roles, there will only be one team manager to submit.
Once the manager has been added, you will be prompted to add either a new engineer or a new intern. You can add as many engineers or interns as you wish. Once your team has been added in full to the
application, you can select the No option for adding new team members. This will complete the application and export the HTML file to the output folder. You can now view this HTML file or host it on
your website to display your team profiles.

## Credits

This application was completed by Jeff Quittman as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp. Dependencies for this project include the node modules: Inquirer - for
creating question prompts in the CLI, util - for creating the promisify'ed writeFilyAsync methods, Jest- for testing the class constructor tests. Path - for determining the path of the output file.
The color-coding console log message feature was borrowed from the logger activity found in the OOP week activity folder.

## License

    								MIT License

    		Unit 10 OOP Homework: Template Engine - Employee Summary   Copyright (C) 2020 Jeffrey Quittman

    		Permission is hereby granted, free of charge, to any person obtaining a copy
    		of this software and associated documentation files (the "Software"), to deal
    		in the Software without restriction, including without limitation the rights
    		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    		copies of the Software, and to permit persons to whom the Software is
    		furnished to do so, subject to the following conditions:

    		The above copyright notice and this permission notice shall be included in all
    		copies or substantial portions of the Software.

    		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    		SOFTWARE.

## Contributing

If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Tests

The repo folder for this application includes four tests that are designed to test the functionality and information validation for the employee class and its three extended inheritance classes for
Manager, Engineer, and Intern. These tests can be ran with the Jest node package dependency (which will be installed when npm install is ran) and will detail how the structure of the class constructor
and its extensions pass all validation tests.

## Questions

-   For any questions related to this applicaiton, please contact me at: JeffQuittman@gmail.com.

-   Please use this link to access my Github Profile: [https://github.com/JeffQuit](https://github.com/JeffQuit)
