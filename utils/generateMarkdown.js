// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.Title}\n
  
  ## Overview: ${data.Overview}\n

  ## Table of Contents
  --------------------
  1. [Installation Instructions](#Installation-Instructions)
  2. [Detailed Description](#Detailed-Description)
  3. [Usuage](#Usuage)
  4. [Licencse](#License)
  5. [Contributing](#Contributing) 
  6. [Test](#Test) 
  7. [Contact Information](#Contact-Information) \n

  ## Detailed Description: ${data.Description}\n
  
  ## Installation Instructions: ${data.Installation}\n

  ## Usuage: ${data.Usuage}\n
  
  ## Licence: ${data.License}\n

  ## Contributing: ${data.Contribution}\n

  ## Test: ${data.Test}\n

  ## Contact Information: 
  Please contact me at:  ${data.Questions}\n
  Also please be sure to visit ${data.Username} to view my Github profile and see some of my projects!
  
`;
}

module.exports = generateMarkdown;
