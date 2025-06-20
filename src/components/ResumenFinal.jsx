import React from "react";

export default function ResumenFinal({ estado }) {
  const hojaAncho = (estado.anchoVano - estado.espesorMarcoInterior * 2 - estado.holguraLateral * 2).toFixed(2);
  const hojaAlto = (estado.altoVano - estado.espesorTope - estado.holguraInferiorSuperior - estado.separacionPiso).toFixed(2);

  return (
    <div className="bg-white p-4 mt-4 rounded shadow text-center">
      <h2 className="text-lg font-bold mb-2">Medidas Finales</h2>
      <p className="text-red-600 font-bold">Ancho Hoja: {hojaAncho} {estado.unidad}</p>
      <p className="text-red-600 font-bold">Alto Hoja: {hojaAlto} {estado.unidad}</p>
    </div>
  );
}