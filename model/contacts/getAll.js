const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

async function getAll() {
  const contacts = await fs.readFile(contactsPath);
  const contactList = JSON.parse(contacts);
  return contactList;
}
module.exports = getAll;
