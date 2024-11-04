import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const ToDoList = () => {

  const [events, setEvents] = useState([
    { title: 'Dr. Rita Appointment', start: '2024-09-10T10:00:00', end: '2024-09-10T11:00:00' },
    { title: 'Dental Checkup', start: '2024-09-12T14:30:00', end: '2024-09-12T15:30:00' },
  ]);
  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      try {
          clickInfo.event.remove();
          alert(`Event '${clickInfo.event.title}' has been successfully deleted.`);
      } catch (error) {
          console.error('Error removing event:', error);
          alert('There was an error deleting the event. Please try again.');
      }
    }
};

  return (
    <div className='mx-auto p-4'>
      <h1 className="text-2xl my-4 font-bold text-gray-800">My Appointments</h1>
      <div className="bg-white p-4 rounded-lg shadow col-span-4">
        <h2 className="text-lg font-semibold mb-4">Appointments</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          initialEvents={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  )
}

export default ToDoList
