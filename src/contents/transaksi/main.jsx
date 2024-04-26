import MainLayout from "../../layouts/main-layouts";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainTransaksi = () => {

    return (
        <MainLayout>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Empty card</h5>
                        </div>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )

}