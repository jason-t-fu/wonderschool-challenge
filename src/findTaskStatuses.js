
export function findTaskStatuses(data) {
  return Object.values(data).reduce((result, el) => {
    const allDependenciesComplete = el.dependencyIds
      .every(taskId => data[taskId].completedAt);

    if (el.completedAt && allDependenciesComplete) {
      result[el.id] = 'complete';
    }
    else {
      result[el.id] = allDependenciesComplete ? 'incomplete' : 'locked';
    }
    return result;
  }, {});
}