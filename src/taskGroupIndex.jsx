
import React from 'react';
import ListItem from './ListItem';
import ListHeader from './listHeader';

const TaskGroupIndex = ({ groups, setSelectedTaskGroup }) => {
  
  return (
    <>
      <ListHeader title="Things To Do" />
      <div className="list">
        {groups.map((group) => {
          return ( 
            <ListItem 
              key={group.task}
              name={group.task}
              stats={[group.numCompleted, group.numTotal]}
              status={'group'}
              handleClick={() => setSelectedTaskGroup(group.task)}
            />
          )
        })}
      </div>
    </>
  )
}

export default TaskGroupIndex;