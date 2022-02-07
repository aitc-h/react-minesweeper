import React = require('react');
import { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Board } from './Board';
import { Cell } from './Cell';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Board data={Array<Array<typeof Cell>>()} totalBombs={10} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
