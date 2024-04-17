import React from 'react'
import {connect} from 'react-redux'
import { addNumAction,subNumAction } from '../store/actionCreators'

class About extends React.Component {
  constructor (props) {
        super(props) 
        this.state = {
        }
        
    }
    changeNum(num,bool)
    {
        if (bool) {
            this.props.addNumber(num)
        } else {
            this.props.subNumber(num)
        }
    }
    render() {
        const {counter} = this.props;
        return (
            <div>
                <h1>About</h1>
                <h2>Counter: {counter}</h2>
                <button onClick={()=>this.changeNum(1,true)}>+1</button>
                <button onClick={()=>this.changeNum(1,false)}>-1</button>
            </div>
        )
    }
}
// connect() 返回的是一个高阶函数
// function mapStateToProps (state) {
//     return {
//      counter:state.counter
//     }
//  }
// function fn2 (dispatch) {
//     return {
//         addNumber(num) {
//             dispatch(addNumAction(num))
//         },
//         subNumber(num) {
//             dispatch(subNumAction(num))
//         }
//     }
// }
 const mapStateToProps = (state)=> ({
    counter : state.counter
 })
 const mapDispatchToProps = (dispatch)=> ({
    addNumber(num) {
        dispatch(addNumAction(num))
    },
    subNumber(num) {
        dispatch(subNumAction(num))
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(About)