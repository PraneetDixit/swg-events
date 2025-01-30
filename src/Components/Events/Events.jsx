import React from 'react'
import './Events.css'
import events from '../../Assets/Data/EventList'

export default function Events() {
  return (
    <>
    <div id='eventsWrapper'>
      <h2>Events</h2>
      <div id='events'>
        {events.map((event, index) => (
          <div className='event' key={index}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.shortDescription}</p>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}
