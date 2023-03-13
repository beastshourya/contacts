import { ADDCONTACTS, EDIT, DELETES, UPDATE } from "./actionType";

export const Contacts = (contact) => ({
  type: ADDCONTACTS,
  payload: contact,
});

export const deletes = (key) => ({
  type: DELETES,
  key: "",
});
export const Update = (contact) => ({
  type: UPDATE,
  payload: contact,
});
