
import React from 'react';
import ListItem from './ListItem';
import ListHeader from './listHeader';

const TaskGroupShow = ({ name, group, setSelectedTaskGroup, statuses, setData }) => {

  return (
    <>
      <ListHeader title={name} 
        handleClick={() => setSelectedTaskGroup(null)}
      />
      <div className="list">
        {group.map(task => {
          return (
            <ListItem 
              key={task.id}
              name={task.task}
              status={statuses[task.id]}
              handleClick={() => setData(task.id, statuses[task.id])}
            />
          )
        })}
      </div>
    </>
  )
}

export default TaskGroupShow;
