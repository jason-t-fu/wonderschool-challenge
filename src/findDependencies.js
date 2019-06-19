import { createEmptyDataSet } from "./createDataSets";

// Implementation of topological sort to invert dependencies
export function findDependencies(data) {
  const dependencies = createEmptyDataSet(data);
  const visited = new Set();

  Object.keys(data).forEach(id => {
    id = parseInt(id);
    if (!visited.has(id)) {
      dfs(data, id, visited);
    }
  });

  return dependencies;

  function dfs(data, id, visited) {
    visited.add(id);
    data[id].dependencyIds.forEach(depId => {
      if (!visited.has(depId)) {
        dfs(data, depId, visited);
      }
      dependencies[depId].add(id);
      data[depId].dependencyIds.forEach(subDepId => {
        dependencies[subDepId].add(id);
      });
    });
  }
}