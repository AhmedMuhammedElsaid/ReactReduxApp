import { Add__Reminder, Delete__Reminder, Clear__Reminder } from './../../types'
import { bake_cookie, read_cookie } from 'sfcookies'
const reminder = (state = [], action) => {
    let reminders = null;
    state =read_cookie("reminders");
    if (action.type === Add__Reminder) {
        reminders = [...state, { text: action.text, date: action.date, id: Math.random() }];
        bake_cookie("reminders",reminders);
        console.log("From Reducer", reminders);
        if(reminders.text ===""){
            return false
        }
       else { return reminders};
    }
    else if (action.type === Delete__Reminder) {

        reminders = state.filter(reminder => reminder.id !== action.id);
        bake_cookie("reminders",reminders);
        return reminders
    }
    else if (action.type === Clear__Reminder) {
        reminders = [];
        bake_cookie("reminders",reminders);
        return reminders
    }
    else {
        return state;
    }
}
export default reminder 
