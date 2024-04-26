import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Welcome } from './trial';
import { Dashboard } from './contents/dashboard/main';
import { MasterBarang } from './contents/master-barang/main';
import { MainTransaksi } from './contents/transaksi/main';
import { UsersList } from './contents/akun/main';

import './App.css'
import './assets/css/app.css'
import './assets/js/app.js'


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master-barang" element={<MasterBarang />} />
        <Route path="/transaksi" element={<MainTransaksi />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
    </>
  )



}

export default App
