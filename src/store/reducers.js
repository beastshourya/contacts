import { ADDCONTACTS, DELETES, UPDATE } from "./actionType";

const initialState = {
  myContacts: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDCONTACTS:
      return {
        ...state,
        myContacts: [...state.myContacts, action.payload],
      };

    case DELETES:
      return {
        ...state,
        myContacts: state.myContacts.filter((item) => item.key !== action.key),
      };
    case UPDATE:
      return {
        ...state,
        myContacts: state.myContacts.map((contact) =>
          contact.key == action.payload.key ? action.payload : contact
        ),
      };

    default:
      return state;
  }
};