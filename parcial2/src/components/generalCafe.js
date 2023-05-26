import React from 'react';

function GeneralCafe(props) {
  
    return (
        <tr>
          <th scope="row">{props.cafe.id}</th>
          <td>{props.cafe.nombre}</td>
          <td>{props.cafe.tipo}</td>
          <td>{props.cafe.region}</td>
        </tr>
      );
    }
    
export default GeneralCafe;