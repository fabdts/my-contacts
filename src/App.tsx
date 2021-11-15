import React from 'react';
import './App.css';
import Contact from './components/Contact';

const contacts = [
  {
    first_name: 'Fab',
    last_name: 'Dar',
    email: 'fab.dar@mail.io',
    id: 1,
    avatar: '',
    favorite: false,
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 2,
    avatar: '',
    favorite: true
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 3,
    avatar: '',
    favorite: true
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 4,
    avatar: '',
    favorite: true
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 5,
    avatar: '',
    favorite: true
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 6,
    avatar: '',
    favorite: true
  },
  {
    first_name: 'Dar',
    last_name: 'Fab',
    email: 'dar.fab@mail.io',
    id: 7,
    avatar: '',
    favorite: true
  },
];

function App() {
  return (
    <div className="mx-auto max-w-screen-lg p-10">
      <h1 className="text-5xl mb-5 font-bold">My contacts</h1>
      <div className="flex flex-wrap -mx-5">
        <div className="w-1/2 my-5 p-5">
          <div className="flex flex-wrap -mx-5">
            <div className="my-5 px-5 w-3/4">
              <input
                name="search"
                className="w-full pl-5 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
                placeholder="Search"
                type="search"
              />
            </div>
            <div className="my-5 px-5 w-1/4">
              <p>Total: </p>
            </div>
          </div>
          <ul className="my-5 divide-y divide-gray-200 overflow-y-scroll h-[440px]">
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
          <div className="mt-6 flex justify-center items-center">
            <button
              className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Show more
            </button>
          </div>
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
