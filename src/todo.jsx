import React from 'react';

import TaskGroupIndex from './taskGroupIndex';
import TaskGroupShow from './taskGroupShow';
import { selectTasksByGroup, selectGroupData } from './selectors';
import { findTaskStatuses } from './findTaskStatuses';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTaskGroup: null,
    };

    this.setSelectedTaskGroup = this.setSelectedTaskGroup.bind(this);
  }

  setSelectedTaskGroup(name) {
    this.setState({
      selectedTaskGroup: name
    });
  }

  render() {
    const { data, setData } = this.props;
    const { selectedTaskGroup } = this.state;

    return (
      <div className="todo-list">
        {selectedTaskGroup ? 
          <TaskGroupShow 
            name={selectedTaskGroup}
            group={selectTasksByGroup(data, selectedTaskGroup)}
            setSelectedTaskGroup={this.setSelectedTaskGroup}
            statuses={findTaskStatuses(data)}
            setData={setData}
          />
          :
          <TaskGroupIndex 
            groups={selectGroupData(data)} 
            setSelectedTaskGroup={this.setSelectedTaskGroup} 
          />
        }
      </div>
    )
  }
}

export default Todo;