import { IContact } from '../types';

export type AppActions =
  | { type: 'FETCH_CONTACTS' }
  | { type: 'FETCH_CONTACTS_SUCCESS', payload: IContact[] }
  | { type: 'FETCH_CONTACTS_FAILURE', error: string }
  | { type: 'FETCH_MORE_CONTACTS' }
  | { type: 'FETCH_MORE_CONTACTS_SUCCESS', payload: IContact[] }
  | { type: 'FETCH_MORE_CONTACTS_FAILURE', error: string }
  | { type: 'CONTACTS_FILTERED', payload: { searchString: string } }

export interface AppState {
  contacts: IContact[];
  filteredContacts: IContact[];
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  contacts: [],
  filteredContacts: [],
  loading: false,
  error: null
}

export function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.payload,
        filteredContacts: action.payload,
        loading: false
      };
    case 'FETCH_CONTACTS_FAILURE':
      return {
        ...state,
        contacts: [],
        filteredContacts: [],
        error: action.error,
        loading: false,
      };
    case 'FETCH_MORE_CONTACTS':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_MORE_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
        filteredContacts: [...state.filteredContacts, ...action.payload],
        loading: false,
        error: null
      };
    case 'FETCH_MORE_CONTACTS_FAILURE':
      return {
        ...state,
        contacts: [],
        filteredContacts: [],
        error: action.error,
        loading: false
      };
    case 'CONTACTS_FILTERED':
      const search = action.payload.searchString.toLowerCase();
      return {
        ...state,
        filteredContacts: state.contacts.filter((contact) => {
          return (
            contact.first_name.toLowerCase().includes(search) ||
            contact.last_name.toLowerCase().includes(search) ||
            contact.email.toLowerCase().includes(search) ||
            `${contact.first_name} ${contact.last_name}`.toLowerCase().includes(search) ||
            `${contact.last_name} ${contact.first_name}`.toLowerCase().includes(search)
          );
        })
      };
    default:
      return state;
  }
}