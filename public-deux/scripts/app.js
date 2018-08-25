'use strict';

/* global React */
/* global ReactDOM */

// how Andrew did it

console.log('build-it-1.js is running');

var visibility = '';

var onFormSubmit = function onFormSubmit() {
  visibility = !visibility;
  renderDis();
};

var theDetails = React.createElement(
  'p',
  null,
  'Showing the details'
);

var appRoot = document.getElementById('app');

var renderDis = function renderDis() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Build It - 1 - Visibility App'
    ),
    React.createElement(
      'button',
      { onClick: onFormSubmit },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && theDetails
  );

  ReactDOM.render(template, appRoot);
};

renderDis();
