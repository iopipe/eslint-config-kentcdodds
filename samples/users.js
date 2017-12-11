import React from 'react';
import PropTypes from 'prop-types';

function Users({ nameFilter }) {
  const users = [
    { name: 'Janice', friends: ['Albert', 'Nancy'], id: 23 }
  ].filter(({ name }) => name.toLowerCase().includes(nameFilter));
  return (
    <div className="user-list" id="users-section" data-test="users">
      {users.map(user =>
        <div key={user.id}>
          {user.name} is friends with {user.friends.join(', ')}
        </div>
      )}
    </div>
  );
}

Users.propTypes = {
  nameFilter: PropTypes.string
};

export default Users;

export function variableNames() {
  const user$ = 'user stream';
  const $el = 'dom node';
  const camelCase = 'camelCase';
  const PascalCase = 'PascalCase';
  const __thing = '__filename';
  const CONST_VALUE = 'CONST_VALUE';
  return { $el, user$, camelCase, PascalCase, __thing, CONST_VALUE };
}

/*
  eslint
  import/no-extraneous-dependencies:0
  import/no-unresolved:0
 */
