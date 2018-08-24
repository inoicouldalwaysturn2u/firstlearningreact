/* global React */
/* global ReactDOM */

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = [ 'Thing one', 'Thing two', 'Thing four' ];

    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action />
        <Options options={ options } />
        <AddOption />
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
  handlePick() {
    alert( 'handlePick' );
  }  

  render() {
    return (
      <div>
        <button onClick={ this.handlePick }>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert( 'alert some message' );
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleRemoveAll }>Remove All</button>
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
      alert( option );
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