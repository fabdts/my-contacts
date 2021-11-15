import { useContext } from 'react';
import { ContactsContext } from '../context/contacts';

export default function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(`useContacts must be used within an ContactsProvider`);
  }
  return context;
}