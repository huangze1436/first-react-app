import react from 'react'
import Add from "../component/Add"
import Less from "../component/Less"

export default class Addless extends react.Component {
    constructor (props) {
        super(props)
        this.state = {
            name:'sasdasdsad',
            message:100,

        }
    }
    render () {
        const {message } = this.state

        return (
            <>
                  <h1>1.增减数值案例</h1>
                <h2>{message}</h2>
                <Add name='增加的按钮' addClick={(num)=>{this.setState({message:message+num})}}/>
                <Less name='减少的按钮' lessClick={(num)=>{this.setState({message:message+num})}} />   
            </>
        )
      
    }
} 