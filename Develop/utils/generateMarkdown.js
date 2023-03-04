// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// import license

function renderLicenseBadge(license) {
  if(license === "MIT"){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if (license ==="GPLv2"){
return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

  } else if (license === "Apache"){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if (license === "Other or None"){
  return ""
  } 
 
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return `This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License`
  
    } else if (license ==="GPLv2"){
  return `This project is licensed under the [GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) License`
  
    } else if (license === "Apache"){
    return `This project is licensed under the [Apache](https://opensource.org/licenses/Apache-2.0) License`
  
    } else if (license === "Other or None"){
    return ""
    } 
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if(license === "Other or None"){
  return ""
} else {
 return `* [License](#License)`
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}

  ${renderLicenseBadge(data.license)}
  ## Table of Contents

  * [Install](#installation) 
  * [Usage](#usage)
   ${renderLicenseSection(data.license)}
  * [Contributing](#contributing) 
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  \`\`\`
  ${data.install}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`
  
  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.contribution}
  
  ## Tests
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  
  https://github.com/${data.username}
  If there are any questions, please send me an email at ${data.email}
  
        `;
}

module.exports = {
  generateMarkdown
};
