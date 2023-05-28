import React from 'react';

function DetalleCafe(props) {
  
    return (
        <tr>
          <th scope="row">{props.cafe.id}</th>
          <td>{props.cafe.nombre}</td>
          <td>{props.cafe.tipo}</td>
          <td>{props.cafe.region}</td>
          <td>{props.cafe.notas}</td>
          <td>{props.cafe.fecha_cultivo}</td>
          <td>{props.cafe.altura}</td>
          <td>{props.cafe.imagen}</td>
        </tr>
      );
    }
    
export default DetalleCafe;