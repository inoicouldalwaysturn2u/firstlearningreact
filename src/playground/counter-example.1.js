/* global React */
/* global ReactDOM */

console.log('App.js is running');

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleAddOne.bind(this);
    this.handleReset = this.handleAddOne.bind(this);
  }

  handleAddOne() {
    console.log('+1');
  }

  handleMinusOne() {
    console.log('-1');
  }

  handleReset() {
    console.log('reset');
  }

  render() {
    return (
      <div>
        <h1>
          Counter:
        </h1>
        <button onClick={this.handleAddOne}>
          +1
        </button>
        <button onClick={this.handleMinusOne}>
          -1
        </button>
        <button onClick={this.handleReset}>
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
