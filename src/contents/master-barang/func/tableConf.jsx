import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
export const columns = [
	{
		name: 'Nama',
		selector: row => row.nama,
		width: "300px",
		
	},
	{
		name: 'Kategori',
		selector: row => row.kategori.nama,

	},
	{
		name: 'Stok',
		selector: row => row.stok,
		width: '100px'
	},
	{
		name: 'Harga',
		selector: row => row.harga,
		cell: row => (
			<div>Rp. {row.harga.toLocaleString('id-ID')}</div>
		)
	},
	{
		name: 'Tanggal Terakhir',
		selector: row => row.tgl_harga,
	},
	{
		name: 'Aksi',
		cell: row => (
			<div>
				<button type="button" className="btn btn-sm btn-info me-2"><FontAwesomeIcon icon={faCircleInfo} className="me-2" />Detail</button>
				<button type="button" className="btn btn-sm btn-danger"> <FontAwesomeIcon icon={faTrash} className="me-2" />Hapus</button>
			</div>
		),
		ignoreRowClick: true,
		allowOverflow: true,
		button: true,
		width: "200px"
	},
];
