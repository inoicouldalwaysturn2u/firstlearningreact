import React from 'react';

import AddOption from './AddOption';

import Header from './Header';
import Action from './Action';
import Options from './Options';

import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  constructor( props ) {
    super( props );
    // this.state = {
    //   options: [],
    //   selectedOption: undefined
    // };
  }
  ////
  // variable
  ////
  state = {
    options: [],
    selectedOption: ''
  };

  ////
  // Event handler methods
  ////
  handleDeleteOptions = () => {
    this.setState( () => {
      return {
        options: []
      };
    });

    this.setState( () =>
      ( { options: [] } )
    );
  }

  handleDeleteOption = ( option ) => {
    this.setState( ( prevState ) => ({
      options: prevState.options.filter( ( solo ) => {
        return option !== solo;
      })
    })
    );
  }

  handleAddOption = ( addition ) => {
    if ( !addition ) {
      return 'Enter valid value to add item';
    } else if ( this.state.options.indexOf( addition ) > -1 ) {
      return 'This option already exists';
    }

    this.setState( ( prevState ) =>
      ( { options: prevState.options.concat( addition ) } )
    );
  }

  handlePick = () => {
    this.setState( () => ( { selectedOption: this.randomOption() } ) );
  }

  flipSelectedOption = () => {
    this.setState( () => ( { selectedOption: '' } ) );
  }


  ////
  // Supporting methods
  ////
  randomOption = () => {
    const randomNum = Math.floor( Math.random() * this.state.options.length );
    return this.state.options[ randomNum] ;
  }

  buttonState = () => {
    if ( this.state.options ) {
      return this.state.options.length > 0 ? false : true;
    }
  }

  commonInt( convertToNum ) {
    return parseInt( convertToNum, 10 );
  }

  //// 
  // Component Magic Shiz
  //// 
  componentDidMount() {
    try {
      const json = localStorage.getItem( 'options' );
      const options = JSON.parse( json );

      if ( options ) {
        this.setState( () => ( { options } ) );
      }
    } catch ( e ) {
      // do nothing
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options );
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log( 'componentWillUnmount' );
  }


  ////
  // Render!
  ////
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={ subtitle } />
        <div className="container">
          <Action
            buttonState={ this.buttonState() }
            handlePick={ this.handlePick }
          />
          <div className="widget">
            <Options
              options={ this.state.options }
              handleDeleteOptions={ this.handleDeleteOptions }
              handleDeleteOption={ this.handleDeleteOption }
            />
            <AddOption handleAddOption={ this.handleAddOption } />
          </div>
        </div>

        <OptionModal 
          selectedOption={ this.state.selectedOption }
          flipSelectedOption={ this.flipSelectedOption }
        />
      </div>
    );
  }
}
