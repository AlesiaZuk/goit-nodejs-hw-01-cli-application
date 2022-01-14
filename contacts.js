const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const filePath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (id) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === String(id));
    return result ?? null;
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = { name, email, phone, id: v4() };
    contacts.push(newContact);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (id) => {
  try {
    const contacts = await listContacts();
    const contactIndex = contacts.findIndex((item) => item.id === String(id));
    if (contactIndex === -1) {
      return null;
    }
    const deleteContact = contacts.splice(contactIndex, 1);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
    return deleteContact;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
