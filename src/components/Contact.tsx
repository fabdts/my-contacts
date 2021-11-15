import React from 'react';
import { IContact } from '../types';
import FavoriteButton from './FavoriteButton'

type ContactProps = {
  contact: IContact,
}

const Contact = ({ contact }: ContactProps) => (
  <li key={contact.id} className="p-4 bg-white">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10" src={contact.avatar} alt={`${contact.first_name} ${contact.last_name}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{`${contact.first_name} ${contact.last_name}`}</p>
        <p className="text-sm text-gray-500">{contact.email}</p>
      </div>
      <div>
        <FavoriteButton isFavorite={contact.favorite} handleClick={() => console.log('click')} />
      </div>
    </div>
  </li>
)

export default React.memo(Contact);