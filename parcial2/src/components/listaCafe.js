import GeneralCafe from './GeneralCafe';
import banner from './assets/images/imagenCafe.PNG';

const { useEffect, useState } = require("react");

function Cafes () {

   const [detailVisible, setIsVisible] = useState(false);

   const [cafes, setCafes] = useState([]);
   useEffect(()=>{
       const URL = "http://localhost:3001/cafes";
       fetch(URL).then(data => data.json()).then(data => {
           setCafes(data);
       })
   }, []);

   return(
    <div>
    <h1> El aroma magico </h1>
    <img src={banner} alt="Logo" />
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Region</th>
              </tr>
        </thead>
        <tbody>
          {console.log("Cafes", cafes)}
          {cafes.map((c, i) => (
            <tr key={i} onClick={() => console.log(i)}>
            <GeneralCafe key={i} cafe={c} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   )
}

export default Cafes;

