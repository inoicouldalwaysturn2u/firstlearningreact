/* global React */
/* global ReactDOM */

class IndecisionApp extends React.Component {
  constructor( props ) {
    super( props );

    this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
    this.handleAddOption = this.handleAddOption.bind( this );
    this.randomOption = this.randomOption.bind( this );
    this.handlePick = this.handlePick.bind( this );

    this.state = {
      options: [ 'Things one', 'Things two', 'Things four' ]
    };
  }

  handleDeleteOptions() {
    this.setState( () => {
      return {
        options: []
      };
    });
  }

  handleAddOption( addition ) {
    this.setState( ( prevState ) => {
      return {
        options: prevState.push( 'lol' )
      };
    });
  }

  randomOption() {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    return this.state.options[ randomNum ];
  }

  handlePick() {
    alert( this.randomOption() );
  }

  buttonState() {
    return this.state.options.length > 0 ? false : true;
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action 
          buttonState={ this.buttonState() }
          handlePick={ this.handlePick }
        />
        <Options 
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
        />
        <AddOption handleAddOption={ this.handleAddOption } />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={ this.props.buttonState } onClick={ this.props.handlePick }>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
        { this.props.options.map( ( solo, index ) => <Option key={ index } optionText={ solo } /> ) }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.optionText }</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption( e ) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim;

    if ( option ) {
      this.props.handleAddOption;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );
