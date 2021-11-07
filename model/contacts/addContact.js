const getAll = require("./getAll");
const updateContactsList = require("./updateContactsList");

async function addContact({ name, email, phone }) {
  const contacts = await getAll();
  const allContactsId = contacts.map((item) => item.id);
  const sortId = allContactsId.sort((a, b) => a - b);
  const maxId = sortId[sortId.length - 1];
  const newId = maxId + 1;
  console.log(newId);
  const newContact = {
    id: newId,
    name,
    email,
    phone,
  };
  const newContactsList = [...contacts, newContact];
  await updateContactsList(newContactsList);
  return newContact;
}
module.exports = addContact;
