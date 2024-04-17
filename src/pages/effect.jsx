import React from 'react';
import { UserContext } from '../context';

function Effect() {
    const [title, setTitle] = React.useState(100);
    const user = React.useContext(UserContext);
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <h2>使用useEffect案例</h2>
            <h2>{user.name}</h2>
            <h1 onClick={e=>{setTitle(title+1)}}>{title}</h1>
        </div>
    );
}

export default Effect;