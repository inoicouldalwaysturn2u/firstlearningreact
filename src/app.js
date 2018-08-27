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
    if ( !addition ) {
      return 'Enter valid value to add item';
    } else if ( this.state.options.indexOf( addition ) > -1 ) {
      return 'This option already exists';
    }

    this.setState( ( prevState ) => {
      return {
        options: prevState.options.concat( addition )
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

const Header = ( props ) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
    </div>
  );
};

const Action = ( props ) => {
  return (
    <div>
      <button disabled={ props.buttonState } onClick={ props.handlePick }>What should I do?</button>
    </div>
  );
};

const Options = ( props ) => {
  return (
    <div>
      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.map( ( solo, index ) => <Option key={ index } optionText={ solo } /> ) }
    </div>
  );
};

const Option = ( props ) => {
  return (
    <div>
      <p>{ props.optionText }</p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor( props ) {
    super( props );
    this.handleAddOption = this.handleAddOption.bind( this );

    this.state = {
      error: undefined
    };
  }

  handleAddOption( e ) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption( option );

    this.setState( () => {
      return { error };
    });    

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );
