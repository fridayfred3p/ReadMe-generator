// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}\n
  
  ## ${data.Overview}\n

  ##Table of Contents
  --------------------
  1. Installation 
  2. Usuage 
  3. Licencse 
  4. Contributing 
  5. Test 
  6. Questions 
  
  ## ${data.Installation}\n

  ## ${data.Usuage}\n
  
  ## ${data.Licences}\n

  ## ${data.Contributing}\n

  ## ${data.Test}\n

  ## ${data.Questions}\n
  
`;
}

module.exports = generateMarkdown;
