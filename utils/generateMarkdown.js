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
function generateMarkdown(data) {
  return `# ${data.title}
  ## description
  ${data.description}
  # Table of Contents
  1. [description](#description)
  2. [installation](#installation)
  3. [test](#test)
  4. [usuage](#usuage)
  5. [contributors](#contributors)
  6. [licenst](#license)
  7. [questions](#questions)

  
  ## installation
  The following dependencies must be installed to run the application ${data.installation}
  ## test
  ${data.test}
  ## usuage
  In order to use this app, ${data.usuage}
  ## contributors
  ${data.contributors}
  ## license
  ${data.license}
  ##questions
  ${data.questions}
`
}

module.exports = generateMarkdown;
