// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}\
  ## ${data.Description}
  
`;
}

module.exports = generateMarkdown;
