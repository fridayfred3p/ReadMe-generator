// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.Title}\n
  
  ## Overview: ${data.Overview}\n

  ##Table of Contents
  --------------------
  1. Installation Instructions
  2. Detailed Description
  3. Usuage 
  4. Licencse 
  5. Contributing 
  6. Test 
  7. Questions \n

  ## Detailed Description: ${data.Description}\n
  
  ## Installation Instructions: ${data.Installation}\n

  ## Usuage: ${data.Usuage}\n
  
  ## Licence: ${data.Licences}\n

  ## Contributing: ${data.Contributing}\n

  ## Test: ${data.Test}\n

  ## Contact Information: 
  Please contact me at:  ${data.Questions}\n
  Also please be sure to visit ${data.Username} to view my Github profile and see some of my projects!
  
`;
}

module.exports = generateMarkdown;
