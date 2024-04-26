import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalMainComponent = ({MainContent}) => {

    return (
        <>

            <div className="modal fade" id="mainModalComponent" tabIndex="-1" aria-labelledby="mainModalComponentLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mainModalComponentLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><FontAwesomeIcon icon={faXmark} />Tutup</button>
                            <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faFloppyDisk} />Simpan</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalMainComponent;