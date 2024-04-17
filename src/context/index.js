import { createContext } from "react";

const UserContext = createContext({
    name:'黄泽',
    age:25,
    email:'1725736260@qq.com',
    phone:'19858285505',
    token:'hz123456'
})

const AnimalsContext = createContext({
    name:'',
    age:0,
    email:'',
    phone:'',
    token:''
})


export {UserContext,AnimalsContext}