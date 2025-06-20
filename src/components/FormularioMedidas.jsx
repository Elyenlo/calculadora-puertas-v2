import React from "react";

export default function FormularioMedidas({ estado, actualizarEstado }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    actualizarEstado(name, parseFloat(value));
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Dimensiones del Vano</h2>
      <div className="grid grid-cols-2 gap-4">
        <label>
          Ancho del vano:
          <input type="number" name="anchoVano" value={estado.anchoVano} onChange={handleChange} />
        </label>
        <label>
          Alto del vano:
          <input type="number" name="altoVano" value={estado.altoVano} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
}