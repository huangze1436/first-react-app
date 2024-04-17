import React from "react";

//高阶函数 入参是函数
function enhanceUser (AppCopmonent) {
    class FunTest extends React.Component {
        constructor (props) {
            super(props) 
            this.state = {
                name: "斯蒂夫·乔布斯",
                age: 66,
                sex: "男"
            }
        }
        //{...this.props} 组件中传参 如job="CEO" ；{...this.state}是函数中{name: "斯蒂夫·乔布斯",age: 66,sex: "男"}
        render() {
            return (
                <AppCopmonent {...this.props} {...this.state}/>
           )
        }
    }
    return FunTest
}
const Name = enhanceUser(function(props) {
    return <h1>{props.name}</h1>
})
const Age = enhanceUser(function(props) {
    return <h1>{props.age}</h1>
})
const Sex = enhanceUser(function(props) {
    return <h1>{props.sex}</h1>
})
const Job = enhanceUser(function(props) {
    return <h1>{props.job}</h1>
})
class FunTest extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <h1>4.函数案例</h1>
                <Name/>
                <Age/>
                <Sex/>
                <Job job="CEO"/>
            </div>
       )
    }
}

export default FunTest ;