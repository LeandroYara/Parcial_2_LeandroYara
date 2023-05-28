import banner from './assets/images/imagenCafe.PNG';
import DetalleCafe from './DetalleCafe';
import './ListaCafe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedDate, FormattedMessage } from 'react-intl';

const { useEffect, useState } = require("react");

function Cafes () {

  let key = 1
  let URL2 = "http://localhost:3001/cafes/1"

   const [cafes, setCafes] = useState([]);
   useEffect(()=>{
       const URL1 = "http://localhost:3001/cafes";
       fetch(URL1).then(data => data.json()).then(data => {
           setCafes(data);
       })
   }, []);

  let [cafe, setCafe] = useState([]);
    useEffect(()=>{
       let URL2 = "http://localhost:3001/cafes/"+key;
       fetch(URL2).then(data => data.json()).then(data => {
           setCafe(data);
       })
   }, [key]);

   function changeKey(new_key) {
    URL2 = "http://localhost:3001/cafes/"+new_key;
    fetch(URL2).then(data => data.json().then(cafe = data))
   }

   return(
    <div>
    <div class="font-face"> El aroma magico </div>
    <hr />
    <img class="image-banner" src={banner} alt="Logo" />
    <hr />
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col"><FormattedMessage id="Nombre"/></th>
                    <th scope="col"><FormattedMessage id="Tipo"/></th>
                    <th scope="col"><FormattedMessage id="Region"/></th>
                  </tr>
                </thead>
                <tbody>
                  {console.log("Cafes", cafes)}
                  {cafes.map((c, i) => (
                  <DetalleCafe onClick={changeKey(i)} key={i} cafe={c} />
                ))}
                </tbody>
              </table>
            </div>
          <div class="col border border-dark h-50 orange-div">
            <div className="container">
              <div class= "text-center thick-resize"> {cafe.nombre} </div>
              <div class= "text-center"> <FormattedDate
                value={cafe.date}
                year='numeric'
                month='numeric'
                day='numeric'
                /> 
              </div>
              <div class= "text-center"> <img src= {cafe.imagen} class="Coffee-img" alt="Imagen de cafe"></img> </div>
              <div class= "text-center"> <FormattedMessage id="Notas"/> </div>
              <div class= "text-center"> {cafe.notas} </div>
              <div class= "text-center thick"> <FormattedMessage id="TCultivo"/> {cafe.altura} <FormattedMessage id="msnm"/> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default Cafes;

