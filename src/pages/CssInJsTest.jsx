import React from "react";
import {Container} from "../stylecss"
import styled from "styled-components";
import classNames from "classnames";

 const HzButton = styled.button`
    color: red;
    border: 3px solid green;
`
export const HzBtnSon = styled(HzButton)`
    padding: 15px 15px;
`
class CssInJsTest extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            namesA:'sasdasdsad'
        }
    }
    onclick(data) {
        this.props.addClick(data)
    }
    render() {
        const {namesA} = this.state;
        return (
        <Container>
                <h1>6.css in js案例</h1>
            <span className={classNames('bac')}>{namesA}</span>
            <span>222222222</span>
            <HzButton>按钮爸爸</HzButton>
            <HzBtnSon>按钮儿子</HzBtnSon>
        </Container>
        
        )
    }
}

export default CssInJsTest ;