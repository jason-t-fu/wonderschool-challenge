import React from 'react'

const ListHeader = ({ title, handleClick }) => {

  return (
    <div className="header-container">
      <div className="title">
        {title}
      </div>
      {
        handleClick ? 
          <div className="to-index"
            onClick={handleClick}
          >
            All Groups
          </div>
          :
          null
      }
    </div>
  )
};

export default ListHeader;