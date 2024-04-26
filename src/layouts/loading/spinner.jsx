import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const SpinnerLoading = () => {

    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div className="text-center">
                <h3 className="mb-3"><b className="me-2">Loading</b><FontAwesomeIcon icon={faCircleNotch} spin /></h3>
            </div>
        </div>

    )
}