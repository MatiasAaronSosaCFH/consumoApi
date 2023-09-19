import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Grid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((datos) => setData(datos.results));
  }, []);

  return (
    <div>
      <div className="card-grid">
        {data.slice(0, 20).map((item) => (
          <Card
            key = {item.id}
            image={item.image}
            name={item.name}
            species={item.species}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';

function Grid(props) {
    return (
        <div>
            
        </div>
    );
}

export default Grid;