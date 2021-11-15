import React from 'react';
import {
  reducer,
  initialState,
  AppActions,
  AppState,
} from '../reducers';

type ContactListContextProps = {
  state: AppState;
  dispatch: React.Dispatch<AppActions>;
};

export const ContactsContext = React.createContext<ContactListContextProps>({
  state: initialState,
  dispatch: () => initialState,
});

export function ContactsProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <ContactsContext.Provider value={{ state, dispatch }} {...props} />;
}

