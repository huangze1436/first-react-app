import React from "react";
import store from "../store/index";
import {subNumAction} from "../store/actionCreators";

class Profile extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            name:'-1',
            name2:'-5',
            name3:'-10',
            counter:store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({
                counter:store.getState().counter
            })
        })
    }
    onclick(data) {
        store.dispatch(subNumAction(data))
    }
    render() {
        const {name,name2,name3,counter} = this.state;
        return (<>
            <h3>Profile :{counter}</h3>
            <button onClick={(e)=>{this.onclick(1)}} style={{margin:'10px'}}>
            {name}
        </button>
        <button onClick={(e)=>{this.onclick(5)}} style={{margin:'10px'}}>
            {name2}
        </button>
        <button onClick={(e)=>{this.onclick(10)}} style={{margin:'10px'}}>
            {name3}
        </button>
            </>
                )
    }
}

export default Profile ;