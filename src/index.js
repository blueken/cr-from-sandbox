import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <div className="box" />;
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
