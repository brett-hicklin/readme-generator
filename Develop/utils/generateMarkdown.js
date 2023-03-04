// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// import license
let licensing = 
function renderLicenseBadge(license) {
  if(response.license === "MIT"){
 // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  } else if (response.license ==="GPLv2"){

  } else if (response.license === "Apache"){

  } else if (response.license === "Other"){

  } else if (response.license === "None"){

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

`;
}

module.exports = generateMarkdown;
