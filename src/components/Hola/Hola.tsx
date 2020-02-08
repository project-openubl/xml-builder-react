import React from "react";

export interface Props {}

export interface State {}

class Hola extends React.Component<Props, State> {
  render() {
    return (
      <React.Fragment>
        <p>Hola mundo</p>
      </React.Fragment>
    );
  }
}

export default Hola;
