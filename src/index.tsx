import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class MobxData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }
}

@observer
class ReactPlusMobx extends React.Component<{}> {
  data = new MobxData();
  render() {
    return (
      <button onClick={() => this.data.increment()}>
        Click count: {this.data.clickedCount}
      </button>
    );
  }
}

ReactDOM.render(
  <>
  <ReactPlusMobx />
  <DevTools />
  </>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
