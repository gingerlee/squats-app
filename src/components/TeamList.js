import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import {Row} from 'react-materialize';

function TeamList(props) {
  return (
    <div>
      <Row>
          {Object.keys(props.userList).map( userID => {
            const user = props.userList[userID];
            return <User
              image={user.image}
              name={user.name}
              title={user.title}
              key={userID} />
          })}
      </Row>
    </div>
  );
}
// <style jsx>{`
//   .tiles {
//     display: grid;
//     grid-gap: 100px;
//     grid-template-columns: repeat(2, 1fr);
//     margin: 0 2em;
//   }
//   `}</style>

TeamList.propTypes = {
  userList: PropTypes.object
};

export default TeamList;
