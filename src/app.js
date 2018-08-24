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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
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
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById( 'app' ) );
