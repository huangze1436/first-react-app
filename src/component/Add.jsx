import React from "react";

class Add extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            
        }
    }
    onclick(data) {
        this.props.addClick(data)
    }
    render() {
        const {name} = this.props;
        return (
        <button onClick={()=>{this.onclick(1)}}>
            {name}
        </button>)
    }
}

export default Add ;