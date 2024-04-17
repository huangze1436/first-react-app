import React from "react";
import { useUserToken , useScroll} from "../hooks";
import { Button,message } from 'antd';

function PageTop () {
    const [name,setName] = React.useState("未登录")
    const [userToken, userTokenB] = useUserToken()
    const [scrollX, scrollY] = useScroll()
    const logIn = function () {
        console.log("userToken",userToken.UserContext);
        console.log("userTokenB",userTokenB.AnimalsContext);
        if (!!userTokenB.AnimalsContext._currentValue.name === false) {
            userTokenB.AnimalsContext._currentValue = userToken.UserContext._currentValue
            console.log(userTokenB.AnimalsContext._currentValue);
            const {name} = userTokenB.AnimalsContext._currentValue;
            setName(name) 
        } else {
            message.warning('登陆过了 点啥呀');
        }
       
    }
    return (
        <div className="header-top">
            <div className="top">
                Hi! {userToken.UserContext._currentValue.age || "未登录"} scrollX :{scrollX} - scrollY :{scrollY}
            </div>
            <Button onClick={()=>{logIn()}}>一键登录</Button>
        </div>
    )
}

export default PageTop