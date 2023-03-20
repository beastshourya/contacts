import { ADD_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,SEARCH_CONTACT} from "./actionType";

export const Contacts = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deletes = (key) => ({
  type: DELETE_CONTACT,
  key: "",
});
export const Update = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
export const Search = (input) => ({
  type: SEARCH_CONTACT,
  payload:input
});
