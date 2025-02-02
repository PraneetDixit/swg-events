import React, { useEffect, useState } from "react";
import "./Events.css";
import events from "../../Assets/Data/EventList";
import { motion } from "framer-motion";

export default function Events() {
  // Motion variants
  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 2px 5px 0 #028d93",
      transition: { duration: 0.3 },
    },
  };

  const imgHoverVariants = {
    hover: {
      padding: "15px",
      borderRadius: "20px",
    },
  };

  // Modal state
  const [showModal, setShowModal] = useState({
    status: false,
    eventIndex: 0,
    imageIndex: 0,
    goOutAnimation: false,
  });

  // Handle opening the modal with the selected event
  const handleEventClick = (index) => {
    setShowModal({
      status: true,
      eventIndex: index,
      imageIndex: 0,
      goOutAnimation: false,
    });
  };

  // Close the modal with an animation
  const handleCloseModal = () => {
    setShowModal({
      ...showModal,
      goOutAnimation: true,
    });
  };

  // Show the next image
  const handleNext = () => {
    const images = events[showModal.eventIndex].additionalimage;
    setShowModal({
      ...showModal,
      imageIndex: (showModal.imageIndex + 1) % images.length,
    });
  };

  // Show the previous image
  const handlePrev = () => {
    const images = events[showModal.eventIndex].additionalimage;
    setShowModal({
      ...showModal,
      imageIndex:
        showModal.imageIndex === 0 ? images.length - 1 : showModal.imageIndex - 1,
    });
  };

  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (showModal.status) {
        if (e.key === "ArrowRight") {
          handleNext();
        } else if (e.key === "ArrowLeft") {
          handlePrev();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);


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
              initial={{ opacity: 0, translateY: "30px" }}
              whileInView={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              onClick={() => handleEventClick(index)}
            >
              <motion.img
                src={event.image}
                alt={event.title}
                // variants={imgHoverVariants}
              />
              <div className="eventDetail">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal.status && (
        <div
          className={"modal " + (showModal.goOutAnimation ? "modal-out" : "")}
          onClick={(e) => {
            const gallery = document.querySelector(".modal-nextimgs");
            const btns = document.querySelector(".gallery-icons");
            const images = document.querySelector(".modal-img");
            if (!gallery.contains(e.target) && !btns.contains(e.target) && !images.contains(e.target)) {
              handleCloseModal();
            }
          }}
        >
          {/* Close button */}
          <div className="modal-icons">
            <svg
              onClick={handleCloseModal}
              xmlns="http://www.w3.org/2000/svg"
              color="#eee"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

          {/* Main Modal Image */}
          <img
            className={`modal-img ${zoomed ? "zoomedIn" : ""}`}
            src={
              events[showModal.eventIndex].additionalimage[
                showModal.imageIndex
              ]
            }
            onClick={() => setZoomed(!zoomed)}
            alt=""
          />

          {/* Navigation Buttons */}
          <div className="gallery-icons">
            <div className="gicon iconb" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#eee"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
            <div className="gicon iconf" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#eee"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          {/* Thumbnails - Only for the selected event */}
          <div className="modal-nextimgs">
            {events[showModal.eventIndex].additionalimage.map((evImg, idx) => (
              <img
                src={evImg}
                alt=""
                key={idx}
                onClick={() =>
                  setShowModal({
                    ...showModal,
                    imageIndex: idx,
                    goOutAnimation: false,
                  })
                }
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}