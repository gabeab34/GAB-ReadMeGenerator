// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  
  let readMe = '';

  readMe = `
  # ${userAnswers.title}

  ## Table of Contents:

  * [Description](#Description)

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Contributions](#Contributions)

  * [Test](#Test Instructions)

  * [Email](#Contact Info)

  * [Github](#Contact Info)

  ## Description: 
  ${userAnswers.description}

  ## Installation: 
  ${userAnswers.installation}
  
  ## Usage: 
  ${userAnswers.usage}

  ## Contributions: 
  ${userAnswers.contributions}

  ## Test Instructions: 
  ${userAnswers.test}

  ## Contact info:

  [Email](mailto:${userAnswers.email})

  [GitHub](https://github.com/${userAnswers.github})

  





  
  
 
            

`
  return readMe;
}

// module.exports = generateMarkdown;
export default generateMarkdown