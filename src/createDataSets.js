
export function createData(data) {
  return data.reduce((result, el) => {
    result[el.id] = el;
    return result;
  }, {});
}

export function createEmptyDataSet(data) {
  return Object.values(data).reduce((result, el) => {
    result[el.id] = new Set();
    return result;
  }, {});
}