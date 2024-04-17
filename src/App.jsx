//组件
import React from "react"
import InputTest from "./pages/InputTest"
import CheckBoxTest from "./pages/CheckBoxTest"
import FunTest from "./pages/FunTest"
import TranstionTest from "./TranstionTest"
import "./AppStyle.css"
import CssInJsTest from "./pages/CssInJsTest"
import Redux from "./pages/redux"
import Addless from "./pages/addless"
import Main from "./pages/main"
import Effect from "./pages/effect"
import {UserContext,AnimalsContext} from "./context"
import {Routes,Link,Route} from "react-router-dom"
import Usecallback from "./pages/useCallback"
import PageTop from "./component/PageTop"
import PageBottom from "./component/PageBottom"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            pageName:'addless'
        }
    }
    changePageName(params) {
        this.setState({pageName:params})
    }
    render() {

        return (
<UserContext.Provider value={{UserContext}}>
    <AnimalsContext.Provider value={{AnimalsContext}}>
        <div className="App">
            <PageTop/>
            <div className="header">
               <div className={this.state.pageName==='addless'?'active part':'part'}>
                <Link to="/addless" onClick={()=>{this.changePageName('addless')}}>增加减少案例</Link>
                </div>
                <div className={this.state.pageName==='InputTest'?'active part':'part'}>
                    <Link to="/InputTest" onClick={()=>{this.changePageName('InputTest')}}>输入框案例</Link>
                </div>
                <div className={this.state.pageName==='CheckBoxTest'?'active part':'part'}> 
                    <Link to="/CheckBoxTest" onClick={()=>{this.changePageName('CheckBoxTest')}}>checkbox案例</Link>
                </div>
                <div className={this.state.pageName==='FunTest'?'active part':'part'}>
                    <Link to="/FunTest" onClick={()=>{this.changePageName('FunTest')}} >函数案例</Link>
                </div>
                <div className={this.state.pageName==='TranstionTest'?'active part':'part'}>
                    <Link to='/TranstionTest' onClick={()=>{this.changePageName('TranstionTest')}} >react动画</Link>
                </div>
                <div className={this.state.pageName==='CssInJsTest'?'active part':'part'}>
                    <Link to='/CssInJsTest' onClick={()=>{this.changePageName('CssInJsTest')}} >css in js案例</Link>
                </div>
                <div className={this.state.pageName==='redux'?'active part':'part'}>
                    <Link to="/redux" onClick={()=>{this.changePageName('redux')}} >redux案例</Link>
                </div>
                <div className={this.state.pageName==='Effect'?'active part':'part'}>
                    <Link to="/Effect" onClick={()=>{this.changePageName('Effect')}} >Effect 案例</Link>
                </div>
                <div className={this.state.pageName==='useCallback'?'active part':'part'}>
                    <Link to="/useCallback" onClick={()=>{this.changePageName('useCallback')}} >useCallback 案例</Link>
                </div>
            </div> 
            <div className="main">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/addless" element={<Addless/>}/>
                    <Route path="/InputTest" element={<InputTest/>}/>
                    <Route path="/CheckBoxTest" element={<CheckBoxTest/>}/>
                    <Route path="/FunTest" element={<FunTest/>}/>
                    <Route path="/TranstionTest" element={<TranstionTest />}/>
                    <Route path="/CssInJsTest" element={<CssInJsTest/>}/>
                    <Route path="/redux" element={<Redux/>}/>
                    <Route path="/Effect" element={<Effect/>}/>
                    <Route path="/useCallback" element={<Usecallback/>}/>
                </Routes>
            </div>
            <PageBottom/>
        </div>
    </AnimalsContext.Provider>
</UserContext.Provider>
        
        )    
    }
}

export default App