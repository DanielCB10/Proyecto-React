import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';

export default function Tabla() {
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hotelToEdit, setHotelToEdit] = useState(null);

  function fetchHotels() {
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
      method: 'DELETE',
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

  function updateHotels(hotel) {
    setHotelToEdit(hotel);
    setIsModalOpen(true);
  }

  const handleUpdate = (updatedHotel) => {
    fetch(`http://localhost:8000/api/hotel/${updatedHotel.id_hotel}`, {
      method: 'PUT',
      body: JSON.stringify(updatedHotel),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels((prevHotels) =>
          prevHotels.map((hotel) =>
            hotel.id_hotel === updatedHotel.id_hotel ? updatedHotel : hotel
          )
        );
        setIsModalOpen(false);
      })
      .catch((err) => console.log('Error:', err));
  };

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
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Precio</th>
            <th>Código_Destino</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => {
            return (
              <tr key={hotel.id_hotel}>
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
                  &nbsp; &nbsp;
                  <button className="btn btn-warning" onClick={() => updateHotels(hotel)}>
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal para editar el hotel */}
      <Modal
        hotelToEdit={hotelToEdit}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
