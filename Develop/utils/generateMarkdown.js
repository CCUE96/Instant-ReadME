// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT")
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)[(https://opensource.org/licenses/MIT)]`
else if (license === "Apache")
  return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
else if (license === "GPL")
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)`
else if (license === "BSD")
  return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
else if (license === "None")
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT")
  return `https://opensource.org/licenses/MIT`
else if (license === "Apache")
  return `https://opensource.org/licenses/Apache-2.0`
else if (license === "GPL")
  return `https://opensource.org/licenses/GPL-3.0`
else if (license === "BSD")
  return `https://opensource.org/licenses/BSD-3-Clause`
else if (license === "None")
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT")
  return `MIT License`
else if (license === "Apache")
  return `Apache License 2.0`
else if (license === "GPL")
  return `GPL 3.0`
else if (license === "BSD")
  return `BSD 3-Clause`
else if (license === "None")
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data ) {
  return `# <ins>${data.title}</ins>
  
  ## <ins>Description</ins>
  ${data.description}

  ## <ins>User Story</ins> 
  ${data.userstory}
  
  Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## <ins>Github</ins>
  https://github.com/${data.username}

 

  ## <ins>Installation</ins>

  ${data.installation}

  ## <ins>Usage</ins>
  ${data.usage}


  ## <ins>Languages</ins>
  ${data.Languages}

  ## <ins>Contributors</ins>
  ${data.contributors}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## <ins>Repository</ins>
  https://github.com/${data.username}/${data.title}


  ## <ins>Deployed Application</ins>
  https://${data.username}.github.io/${data.title}/



    

`;
}

module.exports = generateMarkdown;
