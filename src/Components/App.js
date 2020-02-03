import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_Reminder, delete_Reminder, clear_Reminder } from './actionCreator'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './../reminder.png'

class App extends Component {
  state = {
    text: '',
    date: new Date()
  }
  renderReminder = () => {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                <button className="closeIcon btn btn-danger" onClick={() => this.props.delete_Reminder(reminder.id)} >X</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
  render() {
    return (

      <div className="App">
        <img src={logo} />
        <div className="reminder-title">
          <h2>Write Your Future Plans...! </h2>
        </div>
        <input
          onChange={(e) => this.setState({ text: e.target.value })}
          value={this.state.text}
          className="form-control"
          type="text"
          placeholder="What's Your Plane "
        />
        <DatePicker
          value={this.state.date}
          className="form-control"
          placeholderText="Enter A Date"
          selected={this.state.date}
          onChange={date => this.setState({ date: date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            this.props.add_Reminder(this.state.text, this.state.date)
            this.setState({ text: "", date: "" })
          }
          }
        >Add a new plan
        </button>
        {this.renderReminder()}
        <button
          className=" clearReminder btn btn-danger btn-block"
          onClick={() => this.props.clear_Reminder()}
        >Clear all the plans
         </button>
      </div>
    )
  }
}
// 
// function mapStateToProps (state){
//   return{
//     reminders:state
//   }
// }
export default connect(state => {
  return {
    reminders: state
  }
}, {
  add_Reminder,
  delete_Reminder,
  clear_Reminder
})
  (App)
