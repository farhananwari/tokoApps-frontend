import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faDatabase, faCartShopping, faUsers } from '@fortawesome/free-solid-svg-icons';

export const SideBar = () => {

    const location = useLocation();
    const [isSidebarIconOnly, setIsSidebarIconOnly] = useState(false);

    const isLinkActive = (path) => {
        return location.pathname.startsWith(path) ? 'active' : '';
    };

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">Toko Apps</span>
                </a>

                <ul className="sidebar-nav">
                    <li className={`sidebar-item ${isLinkActive('/dashboard')}`}>
                        <Link to="/dashboard" className="sidebar-link" >
                            <FontAwesomeIcon icon={faSliders} />
                            <span className="align-middle">Dashboard</span>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${isLinkActive('/master-barang')}`}>
                        <Link to="/master-barang" className="sidebar-link" >
                            <FontAwesomeIcon icon={faDatabase} />
                            <span className="align-middle">Master Barang</span>
                        </Link>
                    </li>

                    <li className={`sidebar-item ${isLinkActive('/transaksi')}`}>
                        <Link to="/transaksi" className="sidebar-link" >
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span className="align-middle">Transaksi</span>
                        </Link>
                    </li>
                    <li className="sidebar-header">
                        Pengaturan
                    </li>
                    <li className={`sidebar-item ${isLinkActive('/users')}`}>
                        <Link to="/users" className="sidebar-link" >
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="align-middle">Akun</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}