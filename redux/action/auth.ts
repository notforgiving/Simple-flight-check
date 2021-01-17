export interface IActionObject{
  type:string,
  payload:{
    flag:boolean,
    space:string
  }
}

export enum actionsForAuth {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
  AUTH = "AUTH",
  EXIT = "EXIT"
}

export const loginactioncreactor = (flag:boolean,space:string):IActionObject => ({
  type: actionsForAuth.LOG_IN,
  payload: {flag,space}
});

export const logoutactioncreactor = (flag:boolean,space:string):IActionObject => ({
  type: actionsForAuth.LOG_OUT,
  payload: {flag,space}
});

export const authorizationacrion = (login:string,password:string)=>({
  type: actionsForAuth.AUTH,
  login,
  password
})

export const exit = ()=>({
  type: actionsForAuth.EXIT
})
