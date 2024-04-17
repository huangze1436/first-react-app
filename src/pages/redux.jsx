import react from 'react'
import store from "../store"
import Home from "../pages/home"
import Profile from "../pages/profile"
import About from "../pages/about"

export default class Redux extends react.Component {
    constructor (props) {
        super(props) 
        this.state = {
            counter:store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState();
            this.setState({counter:state.counter})
            console.log(store.getState())
        })
    }
    render () {
        const {message,counter} = this.state;
        return (
            <div>
                <h1>7.redux 案例</h1>
                <h2>案例 {counter}</h2>
                <Home/>
                <Profile/>
                <About/>
            </div>
        )
    }
}