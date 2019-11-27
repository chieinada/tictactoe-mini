import React from 'react';
import ReactDOM from 'react-dom';
import './TicTacToe.css';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.currentPlayer = 'x';
    this.state = {
      cellValues: Array(9).fill(null)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  changePlayer() {
    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
  }

  handleClick(index, event) {
    if (this.state.cellValues[index] !== null) {
      return;
    }
    this.setState((prev, props) => {
      const values = Array.from(this.state.cellValues);
      values[index] = this.currentPlayer;
      return {
        cellValues: values
      };
    });
    this.changePlayer();
  }

  render() {
    const cells = this.state.cellValues.map((value, index) => (
      <div
        className="cell"
        key={index}
        onClick={e => this.handleClick(index, e)}
      >
        {value}
      </div>
    ));
    return <div className="board">{cells}</div>;
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('root'));
