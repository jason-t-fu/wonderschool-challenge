import React, { Component } from 'react'
import './App.css';

import Todo from './todo';
import { createData } from './createDataSets';
import { findDependencies } from './findDependencies';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    };

    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    fetch('data.json')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        const data = createData(jsonRes);

        this.dependencies = findDependencies(data);
        this.setState({
          loading: false,
          data
        });
      });
  }

  setData(id, status) {
    const { data } = this.state;
    const task = data[id];

    if (status === 'locked') return;

    const completed = status === 'complete' ? null : Date.now();
    const newTask = Object.assign({}, task, { completedAt: completed });
    const dataCopy = Object.assign({}, data, { [newTask.id]: newTask });

    if (!completed) {
      this.dependencies[id].forEach(depId => {
        dataCopy[depId].completedAt = null;
      });
    }

    this.setState({
      data: dataCopy
    });
  }

  render() {

    if (this.state.loading) {
      return null;
    }
    return (
      <Todo data={this.state.data}
        setData={this.setData}
      />
    );
  }
}
