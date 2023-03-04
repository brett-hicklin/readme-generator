// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// import license
let licensing = 
function renderLicenseBadge(license) {
  if(response.license === "MIT"){
 // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  } else if (response.license ==="GPLv2"){
//[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

  } else if (response.license === "Apache"){
   // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  } else if (response.license === "Other or None"){

  } 

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${data.description}
  
  ## Table of Contents
  
  
  * [Install](#Installation) 
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing) 
  * [Test](#Test)
  * [Questions](#Questions)

  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  
  https://github.com/${data.username}
  If there are any questions, please send me an email at ${data.email}
  
        `;
}

module.exports = generateMarkdown;
