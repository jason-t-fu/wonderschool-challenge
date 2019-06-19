import React from 'react';

const ListItem = ({ name, handleClick, status, stats }) => {

  return (
    <div className={`list-item ${status}`}
      onClick={handleClick}
    >
      <div className={`icon`}></div>
      <div className="item-text">
        <div className="item-name">
          {name}
        </div>
        {stats ?
          <div className="task-status">
            {stats[0]} of {stats[1]} complete
          </div>
          :
          null
         }
      </div>
    </div>
  )
}

export default ListItem;