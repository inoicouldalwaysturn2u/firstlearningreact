/* global React */
/* global ReactDOM */

console.log( 'build-it-deux.js is running' );

class VisibilityToggle extends React.Component {
  constructor( props ) {
    super( props );

    this.handleToggleVisibility = this.handleToggleVisibility.bind( this );
    this.theText = this.theText.bind( this );

    this.state = {
      visibility: false
    };

    // isn't necessary. works without this.
    this.settingVars();
  }

  // isn't necessary. works without this.
  settingVars() {
    this.myText = '';
  }

  // methods

  handleToggleVisibility() {
    this.setState( ( prevState ) => {
      return {
        visibility: !prevState.visibility
      };
    });
    this.myText = this.theText();
  }

  theText() {
    if ( this.state.visibility ) {
      return ( 
        null
      );
    } else {
      return (
        <p>
          These are the details
        </p>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>
          Build It Deux
        </h1>
        <button onClick={ this.handleToggleVisibility }>
          { this.state.visibility ? 'Hide details' : 'Show details' }
        </button>

        <div>
          {/* both ways */}
          { this.myText }
          { this.state.visibility && <p>Yo</p> }
        </div>
      </div>
    );
  }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById( 'app' ) );
