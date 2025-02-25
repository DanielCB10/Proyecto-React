import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tabla() {
    const [hotels, setHotels] = useState([]);

    function fetchHotels(){
        fetch('http://localhost:8000/api/hotel')
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                setHotels(data);
            })
            .catch(function (err) {
                console.log('Error:', err);
            });
    }

    function deleteHotels(id) {
        fetch(`http://localhost:8000/api/hotel/${id}`, {
            method: 'DELETE'
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                fetchHotels();
            })
            .catch(function (err) {
                console.log('Error:', err);
            });
    }

  return (
    <div className="container mt-4">
       <h2 className="mb-3">Lista de Hoteles</h2>
            <button className="btn btn-primary mb-3" onClick={fetchHotels}>
                Obtener Hoteles
            </button>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Precio</th>
                        <th>Codigo_Destino</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map(function (hotel) {
                        return (
                            <tr key={hotel.id}>
                                <td>{hotel.id_hotel}</td>
                                <td>{hotel.nombre}</td>
                                <td>{hotel.Direccion}</td>
                                <td>{hotel.Telefono}</td>
                                <td>{hotel.Precio}</td>
                                <td>{hotel.Codigo_Destino}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteHotels(hotel.id_hotel)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    </div>
  )
}
