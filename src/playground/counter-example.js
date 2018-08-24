/* global ReactDOM */

console.log('App.js is running');

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
  console.log( 'addOne', count );
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log( 'reset' );
};

const appRoot = document.getElementById( 'app' );

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
