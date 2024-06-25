
export const logger=(state)=>(next)=>(action)=>{
 
    console.log("previous state-->",state.getState());
    console.log("action--->",action);
    next(action)

    console.log('current action--->',state.getState());
}