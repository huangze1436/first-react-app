import { useContext } from "react";
import {UserContext,AnimalsContext} from "../context/index";

function useUserToken() {
    const userToken = useContext(UserContext);
    const userTokenB = useContext(AnimalsContext);

    return [userToken, userTokenB];
}

export default useUserToken;