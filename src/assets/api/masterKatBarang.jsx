import axios from 'axios';

export const MasterKategoriBarangFetch = async () => {
  const apiUrl = import.meta.env.VITE_APP_API
  try {
    const response = await axios.get(apiUrl+"/master-kategori"); // Ganti URL sesuai dengan endpoint API Anda
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};