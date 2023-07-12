import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";


function CalendlyModal() {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <> 
            <button
                target="_blank"
                className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary font-semibold font-primary text-base py-2 px-4 flex gap-3 items-center rounded-lg w-fit"
                alt="CalendlyModal"
                type="button"
                onClick={() => setShowModal(true)}
            >
            Book a Consult
                <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
            </button>
            {showModal && (
            <div className="modal-overlay absolute z-50 bg-brand-quaternary">
            <div className="modal-content">
              <h2>Book right now!</h2>
              <p>Some text.</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
          )}
        </>
    )
}

export default CalendlyModal;