import { IContact } from '../types';

export type AppActions =
  | { type: 'FETCH_CONTACTS' }
  | { type: 'FETCH_CONTACTS_SUCCESS', payload: IContact[] }
  | { type: 'FETCH_CONTACTS_FAILURE', error: string }

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
    default:
      return state;
  }
}