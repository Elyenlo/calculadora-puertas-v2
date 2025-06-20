import React from "react";

export default function VistaPuerta({ estado }) {
  return (
    <div className="bg-white p-4 mt-4 rounded shadow text-center">
      <h2 className="text-lg font-bold">Vista de la Puerta</h2>
      <div style={{ height: 300, backgroundColor: "#ddd" }}>
        <p>Representación visual aquí</p>
      </div>
    </div>
  );
}