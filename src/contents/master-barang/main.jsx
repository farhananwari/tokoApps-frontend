import MainLayout from "../../layouts/main-layouts";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { MasterBarangFetch } from "../../assets/api/masterBarangFetch";
import { columns } from "./func/tableConf";
import { CreateBarang } from "./modal/create";
import { EditBarang } from "./modal/edit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DataTable from "react-data-table-component";
import { faMagnifyingGlass, faPlus, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { MasterKategoriBarangFetch } from "../../assets/api/masterKatBarang";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { SpinnerLoading } from "../../layouts/loading/spinner";
import ModalMainComponent from "../../layouts/modal/mainModalComponent";

import 'react-datepicker/dist/react-datepicker'
import 'react-datepicker/dist/react-datepicker.min.css'

export const MasterBarang = () => {

    const [dataBarangs, setDataBarangs] = useState([]);
    const [katBarang, setKatBarang] = useState([]);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const fetchingDataBarang = async () => {
        const data = await MasterBarangFetch();
        setDataBarangs(data)
        setIsLoading(false)
    }

    const fetchingKategoriBarang = async () => {
        const data = await MasterKategoriBarangFetch();
        const formattedData = data.map((item) => ({
            value: item.id_cat,
            label: item.nama,
        }));
        setKatBarang(formattedData);
        //setIsLoading(false);
    };

    const handleFilter = (event) => {
        const keyword = event.target.value.toLowerCase();
        setFilterText(keyword);

        const filteredData = dataBarangs.filter((barang) => {
            return barang.nama.toLowerCase().includes(keyword);

        });

        setFilteredData(filteredData);
    };


    useEffect(() => {
        fetchingDataBarang();
        fetchingKategoriBarang();
    }, []);

    //console.log(katBarang)

    return (
        <MainLayout>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6"><h5 className="card-title mb-0">Master Barang</h5></div>
                                <div className="col-6 d-flex justify-content-end">
                                    <div className="me-2">
                                        <div className="input-group input-group-sm">
                                            <span className="input-group-text" id="basic-addon1">
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </span>
                                            <input type="text" className="form-control" placeholder="Nama Barang..." onChange={handleFilter} />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#mainModalComponent">
                                        <FontAwesomeIcon className="me-2" icon={faPlus} />
                                        Buat
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {isLoading ? (

                                <SpinnerLoading />

                            ) : (
                                <DataTable
                                    columns={columns}
                                    data={filterText ? filteredData : dataBarangs}
                                    highlightOnHover
                                    pagination
                                />
                            )

                            }

                        </div>
                    </div>
                </div>
            </div>
            {/*<CreateBarang />
            <EditBarang />*/}
            <ModalMainComponent />
        </MainLayout>
    )

    {/* <div className="row g-4">
                                        <div className="col-md-3">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                //dateFormat={customFormat} // Ensure date format is dd-mm-yyyy
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <Select
                                                value={selectedOption}
                                                onChange={setSelectedOption}
                                                options={katBarang}
                                                placeholder="Pilih Kategori"
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <div className="input-group input-group-sm">
                                                <span className="input-group-text" id="basic-addon1">
                                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </span>
                                                <input type="text" className="form-control me-2" placeholder="Nama Barang..." />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#CreateBarang">
                                                <FontAwesomeIcon className="me-2" icon={faPlus} />
                                                Buat
                                            </button>
                                        </div>
                                    </div> */}

}