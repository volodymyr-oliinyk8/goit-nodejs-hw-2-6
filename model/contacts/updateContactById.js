const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

async function updateContactById(contactId, data) {
  const contacts = await getAll();
  const idx = contacts.findIndex((item) => item.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, contactId };
  console.log(contacts);
  await updateContactsList(contacts);
  console.log(contacts[idx]);
  return contacts[idx];
}

module.exports = updateContactById;
