import React, { useState } from 'react';
import { recordatoriosdata } from "../../data/recordatoriosdata";

const Recordatorios = () => {
  const [recordatorios, setRecordatorios] = useState(recordatoriosdata);
  console.log(recordatorios);

  return (
    <div>
      <h2>Recordatorios</h2>
      <div>
        {
          recordatoriosdata.map((recordatorio) => {
            const { id, titulo, horario, fecha, asunto } = recordatorio;
            return (
              <div key={id} style={{border:"1px solid black", marginBottom:"5px"}}>
                <h2>{titulo}</h2>
                <h3>{asunto}</h3>
                <p>{horario} hrs</p>
                <button>🖊️</button><button>❌</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recordatorios;