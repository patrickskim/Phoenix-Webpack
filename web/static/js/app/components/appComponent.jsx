import React, { Component } from 'react';
import SomeComponent from './someComponent';

export default class AppComponent extends Component {
  render() {
    return (
      <div id='application'>
        <SomeComponent increment={2}/>
        <h1>Woo hoo!</h1>
      </div>
    );
  }
}
