import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";


function CalendlyModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <> 
            <Link href={"google.com"}
                target="_blank"
                className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary font-semibold font-primary text-xl py-2 px-4 flex gap-3 items-center rounded-lg w-fit"
                alt="CalendlyModal"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Book a Consult
                <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />

            </Link>

        </>
    )
}

export default CalendlyModal;