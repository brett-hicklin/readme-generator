//creates a fucntion that returns a license badge based on which license is passed in, and if none is selected it returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GPLv2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Other or None") {
    return "";
  }
}

//creates a function that returns the license link, and if none is selected then returns an empty string
function renderLicenseLink(license) {
  var url = "";
  if (license === "MIT") {
    url = `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "GPLv2") {
    url = `[GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === "Apache") {
    url = `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "Other or None") {
    return "";
  }
  return `## License
  This project is licensed under the ${url} License`;
}

//createa a function that returns the license section of README, and if no license was selected then it returns an empty string
function renderLicenseSection(license) {
  if (license === "Other or None") {
    return "";
  } else {
    return `* [License](#license)`;
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Install](#installation) 
  * [Usage](#usage)
  ${renderLicenseSection(data.license)}
  * [Contributing](#contributing) 
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  \`\`\`
  ${data.install}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`
  
  
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}
  
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.test}
  \`\`\` 
  ## Questions
  
  See my other work on [my Github](https://github.com/${data.username}).
  If there are any questions, please send me an email at ${data.email}
  
        `;
}
//exports the generateMarkdown function
module.exports = {
  generateMarkdown,
};
