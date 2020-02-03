import {Add__Reminder,Delete__Reminder,Clear__Reminder} from '../types'

export const add_Reminder=(text,date)=>{
    const action = {
        type:Add__Reminder,
        text,
        date
    }
    console.log("Add",action);
    return action;
}
export const delete_Reminder=(id)=>{
    const action = {
        type:Delete__Reminder,
        id
    }
    return action 
}
export const clear_Reminder=()=>{
    const action= {
        type:Clear__Reminder
    }
    return action
}