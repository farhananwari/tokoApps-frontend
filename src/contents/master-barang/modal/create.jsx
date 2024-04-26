import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CreateBarang = ({ }) => {

    const [categoryBarang, setCategoryBarang] = useState({
        jenis_barang: ''
    })

    const [formData1, setFormData1] = useState({
        barangId: '',
        nama: '',
        harga: '',
        stok: '',
        jenis_barang: ''
    });

    const [formData2, setFormData2] = useState({
        nama: '',
        harga: '',
        stok: '',
        jenis_barang: '',
        items: [{ id_barang: '', jumlah_barang: '' }]
    });

    const handleAddItem = () => {
        setFormData2(prevState => ({
            ...prevState,
            items: [...prevState.items, { id_barang: '', jumlah_barang: '' }]
        }));
    };

    const handleRemoveItem = (index) => {
        const newItems = [...formData2.items];
        newItems.splice(index, 1);
        setFormData2(prevState => ({
            ...prevState,
            items: newItems
        }));
    };

    const handleCategoryForm = (e) => {
        const { name, value } = e.target;
        setCategoryBarang({ ...categoryBarang, [name]: value })
    }

    const handleForm1 = (e) => {
        const { name, value } = e.target;
        setFormData1({ ...formData1, [name]: value });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (index !== undefined) {
            const newItems = [...formData2.items];
            newItems[index] = { ...newItems[index], [name]: value };
            setFormData2(prevState => ({
                ...prevState,
                items: newItems
            }));
        } else {
            setFormData2(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData1) {
            console.log(formData1)
        }
        if (formData2) {
            console.log(formData2)
        }
    };



    return (
        <div className="modal fade" id="CreateBarang" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg mt-3 modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Tambah Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="barangId" className="form-label">Kategori Barang:</label>
                            <select
                                className="form-select"
                                id="jenis_barang"
                                name="jenis_barang"
                                value={categoryBarang.jenis_barang}
                                onChange={handleCategoryForm}
                            >
                                <option value="">Pilih kategori...</option>
                                <option value="satuan">Satuan</option>
                                <option value="bundle">Paket</option>
                            </select>
                        </div>
                        {categoryBarang.jenis_barang === 'satuan' && (
                            <form className='mb-3'>
                                <div className="mb-3">
                                    <label htmlFor="barangId" className="form-label">ID Barang:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="barangId"
                                        name="barangId"
                                        value={formData1.barangId}
                                        onChange={handleForm1}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="nama" className="form-label">Nama:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nama"
                                        name="nama"
                                        value={formData1.nama}
                                        onChange={handleForm1}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="harga" className="form-label">Harga:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="harga"
                                        name="harga"
                                        value={formData1.harga}
                                        onChange={handleForm1}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="stok" className="form-label">Stok:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="stok"
                                        name="stok"
                                        value={formData1.stok}
                                        onChange={handleForm1}
                                    />
                                </div>

                            </form>
                        )}

                        {categoryBarang.jenis_barang === 'bundle' && (
                            <form>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="mb-3">
                                            <label htmlFor="nama" className="form-label">Nama</label>
                                            <input type="text" className="form-control" id="nama" name="nama" value={formData2.nama} onChange={handleChange} />
                                        </div>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className="mb-3">
                                            <label htmlFor="harga" className="form-label">Harga</label>
                                            <input type="text" className="form-control" id="harga" name="harga" value={formData2.harga} onChange={handleChange} />
                                        </div>

                                    </div>
                                    <div className='col-6'>
                                        <div className="mb-3">
                                            <label htmlFor="stok" className="form-label">Stok</label>
                                            <input type="text" className="form-control" id="stok" name="stok" value={formData2.stok} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Items</label>
                                    <div className="mb-3">
                                        <div className='row mt-3'>
                                            <div className='col-8'>
                                                <label className="form-label">Nama</label>
                                            </div>
                                            <div className='col-2'>
                                                <label className="form-label">Jumlah Barang</label>
                                            </div>
                                            <div className='col-2'>
                                                <label className="form-label">Aksi</label>
                                            </div>
                                        </div>
                                        {formData2.items.map((item, index) => (
                                            <div key={index} className="row mb-3">
                                                <div className="col-8">
                                                    <input type="text" className="form-control" name="id_barang" value={item.id_barang} onChange={(e) => handleChange(e, index)} />
                                                </div>
                                                <div className="col-2">
                                                    <input type="text" className="form-control" name="jumlah_barang" value={item.jumlah_barang} onChange={(e) => handleChange(e, index)} />
                                                </div>
                                                <div className="col-2">
                                                    <button type="button" className="btn btn-danger me-2" onClick={() => handleRemoveItem(index)}>-</button>
                                                    <button type="button" className="btn btn-primary" onClick={handleAddItem}>+</button>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>

                            </form>
                        )}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Simpan</button>
                    </div>
                </div>
            </div>
        </div>

    )
}