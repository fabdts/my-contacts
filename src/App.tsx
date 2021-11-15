import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { getContacts } from './api';
import './App.css';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Error from './components/Error';
import { initialState, reducer } from './reducers';

function App() {
  const [{ filteredContacts, loading, error }, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState('');
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  const handleClickShowMore = useCallback(async () => {
    dispatch({ type: 'FETCH_MORE_CONTACTS' });
    try {
      const payload = await getContacts(2);
      dispatch({ type: 'FETCH_MORE_CONTACTS_SUCCESS', payload: payload.data });
      setShowMoreClicked(true);
    } catch (error: any) {
      dispatch({ type: 'FETCH_MORE_CONTACTS_FAILURE', error });
    }
  }, [dispatch]);

  useEffect(() => {
    let didCancel = false;
    dispatch({ type: 'FETCH_CONTACTS' });

    async function fetchContacts() {
      try {
        if (!didCancel) {
          const payload = await getContacts(1);
          dispatch({ type: 'FETCH_CONTACTS_SUCCESS', payload: payload.data });
        }
      } catch (error: any) {
        if (!didCancel) {
          console.log(error);
          dispatch({ type: 'FETCH_CONTACTS_FAILURE', error });
        }
      }
    }

    fetchContacts();

    return () => {
      didCancel = true;
    };
  }, [dispatch]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    dispatch({ type: 'CONTACTS_FILTERED', payload: { searchString: e.target.value } });
  }

  return (
    <div className="mx-auto max-w-screen-lg p-10">
      <h1 className="text-5xl mb-5 font-bold">My contacts</h1>
      <div className="flex flex-wrap -mx-5">
        <div className="w-1/2 my-5 p-5">
          <div className="flex flex-wrap -mx-5">
            <div className="my-5 px-5 w-3/4">
              <input
                value={search}
                onChange={handleSearch}
                name="search"
                className="w-full pl-5 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                placeholder="Search"
                type="search"
              />
              {loading && (
                <Loader />
              )}
              {error && (
                <Error />
              )}
            </div>
            <div className="my-5 px-5 w-1/4">
              <p>Total: {filteredContacts.length}</p>
            </div>
          </div>
          <ul className="my-5 divide-y divide-gray-200 overflow-y-scroll h-[440px]">
            {filteredContacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
          {(!showMoreClicked && !loading) ? (
            <div className="mt-6 flex justify-center items-center">
              <button
                disabled={loading}
                onClick={handleClickShowMore}
                className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Show more
              </button>
            </div>
          ) : null}
        </div>
        <div className="w-1/2 my-5 p-5">
          <h2 className="text-2xl">Favorites</h2>
          <ul className="my-5 divide-y divide-gray-300 bg-gray-200 h-[440px] p-5">

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
