import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:1
        }
    }

    render(){
     
        const {name,location,contact} = this.props;
        const {count} = this.state;
        return(
            <div>
                <h1>Counter: {count}</h1>
                <h1> {name} </h1>
                <h1> {location} </h1>
                <h1>{contact}</h1>
            </div>
        )
    }
}

export default UserClass;