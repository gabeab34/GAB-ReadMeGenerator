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
function renderLicenseLink(license) {
  if (license.name === 'APM') {
    license.address = "For more info please visit: https://docs.appdynamics.com/appd/22.x/latest/en/application-monitoring";
  } else if (license.name === 'CPAN') {
    license.address = "For more info please visit: https://www.perlfoundation.org/cpan-licensing-guidelines.html";
  } else if (license.name === 'CTAN') {
    license.address = "For more info please visit: https://ctan.org/license?lang=en";
  } else if (license.name === 'Gitlab') {
    license.address = "For more info please visit: https://about.gitlab.com/pricing/licensing-faq/";
  } else if (license.name === 'none') {
    license.address = '';
  }
}

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
  renderLicenseLink(license)
  
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
  ${license.address}

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