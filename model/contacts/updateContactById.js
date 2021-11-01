const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

async function updateContactById(contactId, data) {
  const contacts = await getAll();
  const idx = contacts.findIndex((item) => item.id === Number(contactId));
  if (idx === -1) {
    return null;
  }
  const id = Number(contactId);
  contacts[idx] = { id, ...data };
  await updateContactsList(contacts);
  return contacts[idx];
}

module.exports = updateContactById;
