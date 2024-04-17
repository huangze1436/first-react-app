import React, { Fragment } from "react";
import { CSSTransition, SwitchTransition,TransitionGroup } from "react-transition-group";
import "./style.css";

class TranstionTest extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isShow:false,
            islogIn:false,
            books:  [
                {id:1,name:"java"},
                {id:2,name:"python"},
                {id:3,name:"php"},
                {id:4,name:"c++"},
                {id:5,name:"c#"},
                {id:6,name:"js"},
                {id:7,name:"html"},
                {id:8,name:"css"},
                {id:9,name:"sql"},
            ]
        }
    }
    addNewBook() {
        const books = [...this.state.books]
        books.push({id:new Date().getTime(),name:"go"});
        this.setState({books});
    }
    cutBook(index) {
        const books = [...this.state.books]
        books.splice(index,1);
        this.setState({books});
    } 
     render () {
        const {isShow,islogIn,books} = this.state;
        return (
            <Fragment>
                <h1>5.react动画</h1>
                <h2>使用CSSTransition</h2>
                <button onClick={() => this.setState({isShow:!this.state.isShow})}>
                    点击
                    </button>
                <CSSTransition in={isShow} timeout={2000} classNames="fade" unmountOnExit={true}>
                    <div className="box" style={{backgroundColor:"red",fontSize:"30px"}}>
                        哈哈哈哈哈哈哈哈哈哈哈哈
                        <h2>嘻嘻嘻嘻嘻嘻嘻</h2>
                    </div>
                </CSSTransition>

                <h2>使用SwitchTransition</h2>
                <SwitchTransition
                    mode="out-in"
                >
                    <CSSTransition
                        key={islogIn ? "logIn" : "logOut"}
                        timeout={500}
                        classNames="login"
                        unmountOnExit={true}
                    >
                        <button onClick={() => this.setState({islogIn:!this.state.islogIn})} className="box" >
                            {islogIn ? "登录成功" : "登录失败"}
                        </button>
                    </CSSTransition>
                </SwitchTransition>

                <h2>使用TransitionGroup</h2>
                <TransitionGroup component="ul">
                    {books.map(
                        (item,index) =>{
                            return(
                                <CSSTransition key={item.id} classNames="book" timeout={1000}> 
                                    <li>{item.name}
                                    <button onClick={()=>this.cutBook(index)}>-</button>
                                    </li>
                                   
                                </CSSTransition>
                            )
                        }
                        
                    )}
                </TransitionGroup>
                <button onClick={()=>this.addNewBook()} style={{color:"red"}}>增加新书籍</button>
            </Fragment>
        )
    }
    
}

export default TranstionTest;