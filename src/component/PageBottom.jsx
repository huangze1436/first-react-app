import {React} from 'react'
import {Button, message} from 'antd'
import {useUserToken} from '../hooks'

function PageBottom () {
    const [userToken, userTokenB] = useUserToken()


    function exit () {
        console.log(userToken);
        console.log(userTokenB);
        if (!!userTokenB.AnimalsContext._currentValue.name === false) {
            message.warning('还没登录呢');
        } else {
            userTokenB.AnimalsContext._currentValue = {}

        }
    }
    return (
        <div className="bottom">
            <div>
                <div>react learn</div>
                <div>anthor from hz</div>
                <div>用于学习react的各种案例</div>
            </div>
            <div>
                <Button type="primary" onClick={() => {exit()}}>退出</Button>
            </div>
            
        </div>
    )
}

export default PageBottom