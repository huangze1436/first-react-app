//组件
import React from "react"


class InputTest extends React.Component {
    constructor() {
        super()
        this.state = {
            main:''
        }
    }
    handleSubmit(e) {
        e.preventDefault()

    }
    handleSubmitClick (e) {
        e.preventDefault()
        this.setState({
            main: e.target.value
        },()=>{
            console.log(this.state.main)
        })
    }
   
    render() {
        const { main } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h1>2.输入框案例</h1>
                    <label htmlFor="serect">
                        <input value={main} id="serect" placeholder="请输入密码" onChange={this.handleSubmitClick.bind(this)}/>
                    </label>
                </form>
            </div>
            )
    }
}

export default InputTest