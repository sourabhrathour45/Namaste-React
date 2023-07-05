import React from "react";

class UserClass extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      count: 0,
      count2: 1,
    }; 
  }

  componentDidMount(){

  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment button
        </button>
        <button
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}
        >
          Decrement button
        </button>
        <h1> {name} </h1>
        <h1> {location} </h1>
        <h1>{contact}</h1>
      </div>
    );
  }
}

export default UserClass;
