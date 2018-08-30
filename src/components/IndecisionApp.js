import React from 'react';

import AddOption from './AddOption';

import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.randomOption = this.randomOption.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });

    this.setState(() =>
      ({ options: [] })
    );
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((solo) => {
        return option !== solo;
      })
    })
    );
  }

  handleAddOption(addition) {
    if (!addition) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(addition) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) =>
      ({ options: prevState.options.concat(addition) })
    );
  }

  randomOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    return this.state.options[randomNum];
  }

  handlePick() {
    alert(this.randomOption());
  }

  buttonState() {
    if (this.state.options) {
      return this.state.options.length > 0 ? false : true;
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          buttonState={this.buttonState()}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

