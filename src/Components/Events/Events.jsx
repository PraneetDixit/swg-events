<<<<<<< HEAD
import React from "react";
import "./Events.css";
import events from "../../Assets/Data/EventList";
import { motion } from "framer-motion";

export default function Events() {
    const hoverVariants = {
        hover: {
            scale: 1.02,
            y: -5,
            boxShadow: "0 2px 5px 0 #028d93",
        },
    };

    const imgHoverVariants = {
        hover: {
            padding: "15px",
            borderRadius: "20px",
        },
    };
    return (
        <>
            <div id="eventsWrapper">
                <h2>Events</h2>
                <div id="events">
                    {events.map((event, index) => (
                        <motion.div
                            className="event"
                            key={index}
                            variants={hoverVariants}
                            whileHover="hover"
                            transition={{ duration: 0.2 }}
                        >
                            <motion.img
                                src={event.image}
                                alt={event.title}
                                variants={imgHoverVariants}
                            />
                            <div className="eventDetail">
                                <h3>{event.title}</h3>
                                <p>{event.shortDescription}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
=======
import React, { useEffect, useState } from 'react'
import './Events.css'
import events from '../../Assets/Data/EventList'

export default function Events() {
  const [showModal, setSM] = useState({
    status: false,
    key: 0,
    goOutAnimation: false
  });

  return (
    <>
      <div id='eventsWrapper'>
        <h2>Events</h2>
        <div id='events'>
          {events.map((event, index) => (
            <div className='event' key={index} onClick={() => {
              setSM({
                status: true,
                key: index,
                goOutAnimation: false
              })
            }}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>

      {
        showModal.status ? (
          <div className={'modal ' + (showModal.goOutAnimation ? 'modal-out' : '')} onClick={(e) => {
            const gallery = document.querySelector('.modal-nextimgs');
            const btns = document.querySelector('.gallery-icons');

            if (!gallery.contains(e.target) && !btns.contains(e.target)) {
              setSM({
                status: true,
                key: showModal.key,
                goOutAnimation: true
              });
            }
          }}>
            <div className="modal-icons">
              <svg onClick={() => {
                setSM({
                  status: true,
                  key: showModal.key,
                  goOutAnimation: true
                });
              }} xmlns="http://www.w3.org/2000/svg" color='#eee' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <img src={events[showModal.key].image} alt='' />
            <div className="gallery-icons">
              <div className="gicon iconb" onClick={() => {
                setSM({
                  status: true,
                  key: (
                    showModal.key ?
                      showModal.key - 1 : events.length - 1
                  ),
                  goOutAnimation: false
                });
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" color='#eee' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="gicon iconf" onClick={() => {
                setSM({
                  status: true,
                  key: (
                    showModal.key + 1 < events.length ?
                      showModal.key + 1 : 0
                  ),
                  goOutAnimation: false
                });
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" color='#eee' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            <div className="modal-nextimgs">
              {
                events.map((ev, idx) => (
                  <img src={ev.image} alt={ev.title} key={idx} onClick={() => {
                    setSM({
                      status: true,
                      key: idx,
                      goOutAnimation: false
                    })
                  }} />
                ))
              }
            </div>
          </div>
        ) : <div></div>
      }
    </>
  )
>>>>>>> 0ad975a2582c6e157909a4d57c4dc407e3141fc6
}
