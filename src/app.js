// import PropTypes from 'prop-types';
/* global React */
/* global ReactDOM */

class IndecisionApp extends React.Component {
  constructor( props ) {
    super( props );

    this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
    this.handleDeleteOption = this.handleDeleteOption.bind( this );

    this.handleAddOption = this.handleAddOption.bind( this );
    this.randomOption = this.randomOption.bind( this );
    this.handlePick = this.handlePick.bind( this );

    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if ( options ) {
        this.setState( () => ( { options } ) );
      }
    } catch ( e ) {
      // do nothing
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    if ( prevState.options.length !== this.state.options.length ) {
      const json = JSON.stringify( this.state.options );
      localStorage.setItem( 'options', json );
    }
  }

  componentWillUnmount() {
    console.log( 'componentWillUnmount' );
  }

  
  handleDeleteOptions() {
    this.setState( () => {
      return {
        options: []
      };
    });

    this.setState( () => 
      ( { options: [] } )
    );
  }

  handleDeleteOption( option ) {
    this.setState( ( prevState ) => ({
      options: prevState.options.filter( ( solo ) => {
        return option !== solo;
      })
    })
    );
  }

  handleAddOption( addition ) {
    if ( !addition ) {
      return 'Enter valid value to add item';
    } else if ( this.state.options.indexOf( addition ) > -1 ) {
      return 'This option already exists';
    }

    this.setState( ( prevState ) =>
      ( { options: prevState.options.concat( addition ) } )
    );
  }

  randomOption() {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    return this.state.options[ randomNum ];
  }

  handlePick() {
    alert( this.randomOption() );
  }

  buttonState() {
    if ( this.state.options ) {
      return this.state.options.length > 0 ? false : true;
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={ subtitle } />
        <Action 
          buttonState={ this.buttonState() }
          handlePick={ this.handlePick }
        />
        <Options 
          options={ this.state.options }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }
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
      { props.subtitle && <h2>{ props.subtitle }</h2> }
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision App'
};
// const { title } = React.PropTypes
// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
// };


const Action = ( props ) => {
  return (
    <div>
      <button disabled={ props.buttonState } onClick={ props.handlePick }>What should I do?</button>
    </div>
  );
};

// Action.propTypes = {
//   buttonState: PropTypes.bool.isRequired,
//   handlePick: PropTypes.number.isRequired,
// };


const Options = ( props ) => {
  return (
    <div>
      {
        ( props.options.length === 0 ) &&
        <p>
          Sorry, there are no options. Add some if you like!
        </p>
      }

      <button onClick={ props.handleDeleteOptions }>Remove All</button>
      { props.options.map( ( solo, index ) => ( 
        <Option 
          key={ index } 
          optionText={ solo } 
          handleDeleteOption={ props.handleDeleteOption }
        />
      ))
      }
    </div>
  );
};

// Options.propTypes = {
//   options: PropTypes.array.isRequired,
// just does setState...
//   handleDeleteOptions: PropTypes.func.isRequired,
// };


const Option = ( props ) => {
  return (
    <div>
      <p>
        { props.optionText }
      </p>
      {/* @@Me Q: why is e there? */}
      <button onClick={ ( e ) => {
        props.handleDeleteOption( props.optionText );
      }}
      >
        Remove
      </button>
    </div>
  );
};

// Option.propTypes = {
// just does setState...
//   handleDeleteOption: PropTypes.func.isRequired,
// };


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

    this.setState(() => ( { error } ) );
    
    if ( !error ) {
      e.target.elements.option.value = '';
    }
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

// AddOption.propTypes = {
//   optionText: PropTypes.string.isRequired,
// handleAddOption returns either string or it goes on and just does setState...
//   handleAddOption: PropTypes.string,
// };

ReactDOM.render( <IndecisionApp options={ [ 'Thing one', 'Thing two' ] } />, document.getElementById( 'app' ) );
