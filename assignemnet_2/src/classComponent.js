import React from "react";
export class ClassComponent extends React.Component {
  state = {
    count: 0,
  };
  handleSetCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleSetCount()}>Click</button>
      </>
    );
  }
}
