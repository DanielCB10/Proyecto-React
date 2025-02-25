import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'

function Form() {
    const [id_hotel, setId_hotel] = useState('')
    const [nombre, setNombre] = useState('')
    const [Direccion, setDireccion] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Precio, setPrecio] = useState('')
    const [Codigo_Destino, setCodigo_Destino] = useState('')

    const guardar = () =>{
        const newHotel = {
            id_hotel: id_hotel,
            nombre: nombre,
            Direccion: Direccion,
            Telefono: Telefono,
            Precio: Precio,
            Codigo_Destino: Codigo_Destino
        }

        fetch('http://localhost:8000/api/hotel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newHotel)

        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            // Limpiar los campos después de guardar
            setId_hotel('');
            setNombre('');
            setDireccion('');
            setTelefono('');
            setPrecio('');
            setCodigo_Destino('');
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container'>
        <h3>Formulario Hoteles</h3>
        <br />
        <label htmlFor="id_hotel">Ingrese el id</label>
        <input 
        type="number"
        id='id_hotel'
        className='form-control'
        value={id_hotel} 
        onChange={(e) => setId_hotel(e.target.value)}
        />


        <label htmlFor="nombre">Ingrese el nombre</label>
        <input 
        type="text"
        id='nombre'
        className='form-control'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="direccion">Ingrese la direccion</label>
        <input type="text"
        id='direccion'
        className='form-control' 
        value={Direccion}
        onChange={(e) => setDireccion(e.target.value)}
        />

        <label htmlFor="telefono">Ingrese el telefono</label>
        <input type="number"
        id='telefono'
        className='form-control' 
        value={Telefono}
        onChange={(e) => setTelefono(e.target.value)}
        />

        <label htmlFor="precio">Ingrese el precio</label>
        <input type="number" 
        id='precio'
        className='form-control'
        value={Precio}
        onChange={(e) => setPrecio(e.target.value)}
        />

        <label htmlFor="codigo_destino">Selecione el Codigo Destino</label>
        <select
            name="codigo_destino"
            id="codigo_destino"
            value={Codigo_Destino}
            onChange={(e) => setCodigo_Destino(e.target.value)}>
            <option value="">Seleccione el código</option>
            <option value="1287">1287</option>
            <option value="1288">1288</option>
            <option value="1289">1289</option>
            <option value="1290">1290</option>
            <option value="1291">1291</option>
            <option value="1292">1292</option>
            <option value="1293">1293</option>
            <option value="1294">1294</option>
            <option value="1295">1295</option>
            <option value="1296">1296</option>
            <option value="1297">1297</option>
            <option value="1298">1298</option>
            <option value="1299">1299</option>
            <option value="1300">1300</option>
            <option value="1301">1301</option>
            <option value="1302">1302</option>
            <option value="1303">1303</option>
            <option value="1304">1304</option>
            <option value="1305">1305</option>
            <option value="1306">1306</option>
            <option value="1307">1307</option>
            <option value="1308">1308</option>
            <option value="1309">1309</option>
            <option value="1310">1310</option>
            <option value="1311">1311</option>
            <option value="1312">1312</option>
            <option value="1313">1313</option>
            <option value="1314">1314</option>
        </select>

        <button className='btn btn-primary mt-3' onClick={guardar}>
        Guardar
      </button>
    </div>
  )
}

export default Form
