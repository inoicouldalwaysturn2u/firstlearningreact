/* global React */
/* global ReactDOM */

console.log( 'App.js is running' );

class Counter extends React.Component {
  constructor( props ) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind( this );
    this.handleMinusOne = this.handleMinusOne.bind( this );
    this.handleReset = this.handleReset.bind( this );

    this.oldWay = this.oldWay.bind( this );
    this.currentWay = this.currentWay.bind( this );

    this.componentDidMount = this.componentDidMount.bind( this );

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

  // Actually will do both commands
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

  // Async issues. Result is not 0 + 1, but instead count + 1.
  oldWay() {
    this.setState( {
      count: 0
    });
    this.setState({
      count: this.state.count + 1
    });
  }


  componentDidMount() {
    const count = this.commonInt( localStorage.getItem( 'count' ) );

    if ( !isNaN( count ) ) {
      this.setState( ( { count } ) );
    }
  }

  componentDidUpdate( prevProp, prevState ) {
    if ( prevState.count !== this.state.count ) {
      // @Practice JS syntax and common tropes
      // const currNum = JSON.stringify( this.state.count );
      const currNum = this.state.count;
      localStorage.setItem( 'count', currNum );
    }
  }

  commonInt( convertToNum ) {
    return parseInt( convertToNum, 10 );
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
        <button onClick={ this.handleReset }>
          reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
