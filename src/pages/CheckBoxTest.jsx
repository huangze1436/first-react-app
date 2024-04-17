//组件
import React from "react"


class CheckBoxTest extends React.Component {
    constructor() {
        super()
        this.state = {
            isChoosed: true,
            books:[
                {name:"书籍1",isChecked:false},
                {name:"书籍2",isChecked:false},
                {name:"书籍3",isChecked:false}
            ],
            ball:["basketball"]
        }
    }
    onchange(data) {
        this.setState({
            isChoosed: data.target.checked
        })
    }
    onchange2(e,index) {
        const book = [...this.state.books]
        book[index].isChecked = e.target.checked;
        this.setState({books:book})
    }
    onchange3(data) {
        const arr = Array.from(data.target.selectedOptions)
        const values = arr.map(item=>item.value)
        console.log(values);
        this.setState({
            ball: values
        })
    }
  
   
    render() {
        return (
            <div>
                <h1>3.checkbox案例</h1>
              <h2>单选框</h2><input type="checkbox" checked={this.state.isChoosed} onChange={this.onchange.bind(this)} />
              <h2>多选</h2>
              <ul>
                {this.state.books.map((item,index)=>{
                    return <li key={index}><input type="checkbox" checked={item.isChecked} onChange={e=>this.onchange2(e, index)} />{item.name}</li>
                })}
              </ul>
              <h2>select多选</h2>
              <select value={this.state.ball} multiple onChange={this.onchange3.bind(this)} >
                <option value="basketball">篮球</option>
                <option value="football">足球</option>
                <option value="ppball">乒乓球</option>
              </select>
            </div>
            )
    }
}

export default CheckBoxTest