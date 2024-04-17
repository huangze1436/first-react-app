import React, { useRef } from 'react'
import {useCallback,memo} from 'react'

const Btn =  memo(function(props) {
    const {setCount} = props;
    console.log('Btn1');
   
    return (
        <div>
            <button onClick={setCount}>CHANGE</button>
        </div>
    )
}
)
const Btn2 =  memo(function (props) {
    const {setName} = props;
    console.log('Btn2');
   
    return (
        <div>
            <button onClick={setName}>CHANGE</button>
        </div>
    )
}
)

const Usecallback = memo(function() {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('hz')

    const currentRef = useRef()
    currentRef.current = count;
    currentRef.name = name;
    const changCount = useCallback(function() {
        setCount(currentRef.current + 1)
    },[])
    const changName = useCallback(function() {
        setName(currentRef.name + 'z')
    },[])
    return (
        <div>
            <h2>Btn1：{count}</h2>
            <h2>Btn2：{name}</h2>
            <Btn setCount={changCount} />
            <Btn2 setName={changName} />
        </div>
    )

}
)

export default Usecallback;