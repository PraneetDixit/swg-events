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
}
