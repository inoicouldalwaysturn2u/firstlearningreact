/* global React */
/* global ReactDOM */

console.log( 'App.js is running' );

class Counter extends React.Component {
  constructor( props ) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind( this );
    this.handleMinusOne = this.handleMinusOne.bind( this );
    this.handleReset = this.handleReset.bind( this );

    this.olWay = this.oldWay.bind( this );
    this.currentWay = this.currentWay.bind( this );

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState( ( prevState ) => {
      return {
        count: prevState.count + 1
      };
    } );
  }

  handleMinusOne() {
    this.setState( ( prevState ) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState( () => {
      return {
        count: 0
      };
    });
  }


  currentWay() {
    this.setState( () => {
      return {
        count: 0
      };
    });

    this.setState( ( prevState ) => {
      return {
        count: ++prevState.count
      };
    });
  }

  // async issues. Result is not 0 + 1, but instead count + 1.
  oldWay() {
    this.setState( {
      count: 0
    });
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>
          Count: { this.state.count }
        </h1>
        <button onClick={ this.handleAddOne }>
          +1
        </button>
        <button onClick={ this.handleMinusOne }>
          -1
        </button>
        <button onClick={ this.currentWay }>
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
