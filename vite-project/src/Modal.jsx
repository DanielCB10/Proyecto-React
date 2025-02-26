import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'

export default function Modal({ hotelToEdit, isOpen, closeModal, handleUpdate }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [precio, setPrecio] = useState('');
  const [codigoDestino, setCodigoDestino] = useState('');

  useEffect(() => {
    if (hotelToEdit) {
      setNombre(hotelToEdit.nombre);
      setDireccion(hotelToEdit.Direccion);
      setTelefono(hotelToEdit.Telefono);
      setPrecio(hotelToEdit.Precio);
      setCodigoDestino(hotelToEdit.Codigo_Destino);
    }
  }, [hotelToEdit]);

  const handleSubmit = (e) => {
        e.preventDefault();
        const updatedHotel = {
        id_hotel: hotelToEdit.id_hotel,
        nombre:nombre,
        Direccion: direccion,
        Telefono: telefono,
        Precio: precio,
        Codigo_Destino: codigoDestino,
    };

        handleUpdate(updatedHotel);
    };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Editar Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              type="number"
              className="form-control"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Código de Destino</label>
            <input
              type="text"
              className="form-control"
              value={codigoDestino}
              onChange={(e) => setCodigoDestino(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Actualizar Hotel
          </button>
          <button type="button" className="btn btn-secondary ml-2" onClick={closeModal}>
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}