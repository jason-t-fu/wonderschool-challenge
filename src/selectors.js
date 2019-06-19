
export function selectGroupData(data) {
  const groups = {};

  Object.values(data).forEach(datum => {
    if (groups.hasOwnProperty(datum.group)) {
      groups[datum.group].taskIds.push(datum.id);
      if (datum.completedAt) groups[datum.group].numCompleted++;
      groups[datum.group].numTotal++;
    }
    else {
      groups[datum.group] = {
        task: datum.group,
        taskIds: [datum.id],
        numCompleted: datum.completedAt ? 1 : 0,
        numTotal: 1
      };
    }
  });
  
  return Object.values(groups);
}

export function selectTasksByGroup(data, group) {
  return Object.values(data).filter(datum => datum.group === group)
    .sort((a, b) => a.id - b.id);
}
