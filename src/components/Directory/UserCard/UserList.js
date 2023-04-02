import React from 'react';
import { view } from '@risingstack/react-easy-state';
import appStore from '../appStore';
import UserCard from './UserCard';

const UserList = () => {
  return (
    <div>
        {!appStore.users.length ? (
            <h3>No profiles found</h3>
        ) : (
            appStore.users.map(user => <UserCard key={user.firstName} {...user} />)
        )}
    </div>
  );
}

export default view(UserList);
