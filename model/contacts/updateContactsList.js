const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

async function updateContactsList(newList) {
  await fs.writeFile(contactsPath, JSON.stringify(newList));
}

module.exports = updateContactsList;
