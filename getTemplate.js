const fs = require("fs").promises;
const path = require("path");

async function getEmailTemplate(templateName, variables) {
  try {
    let template = await fs.readFile(
      path.join(__dirname, `${templateName}.html`),
      "utf8"
    );

    for (let key in variables) {
      template = template.replace(`{${key}}`, variables[key]);
    }

    return template;
  } catch (error) {
    console.error("Error loading email template:", error);
    throw error;
  }
}

module.exports = { getEmailTemplate };
