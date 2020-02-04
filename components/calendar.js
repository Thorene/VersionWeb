import React, {Component} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar' 
import * as moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

 
const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor(props, context) {
    super(props, context);
    var event = {
        title: "random",
        start: new Date("2019", "09", "24"),
        end: new Date("2019", "09", "24"),
        allDay: true,
        resource: false
      }
  
      this.state = {
        events: [],
      };
  
      this.setState(
        {events: event}
      )
  
     } 
     handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
          this.setState({
            events: [
              ...this.state.events,
              {
                start,
                end,
                title,
              },
            ],
          })
      }

  render() {
    return (
      <div>
        <Calendar
          style={{minHeight:"400px"}}
          localizer ={localizer}
          popup
             step={60} 
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={this.handleSelect}

          views={['month', 'agenda']}
          ></Calendar>
      </div>);
}}

export default MyCalendar;