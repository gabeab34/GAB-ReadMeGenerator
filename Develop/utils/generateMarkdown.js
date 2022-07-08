// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.name === 'APM') {
    license.badge = `![license](https://img.shields.io/apm/l/vim-mode)`;
  } else if (license.name === 'CPAN') {
    license.badge = `![license](https://img.shields.io/cpan/l/Config-Augeas)`;
  } else if (license.name === 'CTAN') {
    license.badge = `![license](https://img.shields.io/ctan/l/novel)`;
  } else if (license.name === 'Gitlab') {
    license.badge = `![license](https://img.shields.io/gitlab/license/gitlab-org/gitlab)`;
  } else if (license.name === 'none') {
    license.badge = '';
  }

  
    
  
  }
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
// license.address = 'https://docs.appdynamics.com/appd/22.x/latest/en/application-monitoring'
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  
  let readMe = '';

  let license = {
    name: `${userAnswers.license}`,
    badge: '',
  };
  renderLicenseBadge(license)
  console.log(license)
  
  readMe = `
  # ${userAnswers.title}

  ${license.badge}


  ## Table of Contents:

  * [Description](#Description)

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Contributions](#Contributions)

  * [Test](#Tests)

  * [Email](#Questions)

  * [Github](#Questions)

  ## Description: 
  ${userAnswers.description}

  ## Installation: 
  ${userAnswers.installation}
  
  ## Usage: 
  ${userAnswers.usage}

  ## License:
  ${userAnswers.license}

  ## Contributions: 
  ${userAnswers.contributions}

  ## Tests: 
  ${userAnswers.test}

  ## Questions:

  [Email](mailto:${userAnswers.email})

  [GitHub](https://github.com/${userAnswers.github})

  





  
  
 
            

`
  return readMe;
}

// module.exports = generateMarkdown;
export default generateMarkdown