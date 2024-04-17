import react from 'react'

export default class Main extends react.Component {
    constructor() {
        super()
        this.state = {
            title:'REACT首页'
        }
    }
    render() {
        const {title} = this.state
        return (
            <div>
                <div >{title}</div>
            </div>
        )
    }
}