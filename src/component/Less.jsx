import React from "react";

class Less extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    lessClick(data) {
        this.props.lessClick(data);
    }
     render () {
        const {name} = this.props;
        return (
            <button onClick={()=>{this.lessClick(-1)}}>{name}</button>
        )
     }
}

export default Less;