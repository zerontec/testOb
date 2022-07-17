import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ComponenteB = (props) => {
    const [conectadoC, setConectado] = useState(false);
    const {contacto} = props;
    

    const enLinea=()=>{

setConectado(true);

    }

    const offLine=()=> {

setConectado(false);

    }
   

    return (
    <>
    <div>
        { conectadoC  ? 
        (<div>
        <h3 style={{color:'green'}}>Contacto en Linea</h3>
        <p>Nombre:{contacto.nombre}</p>
        <p>Apellido:{contacto.apellido}</p>
        <p>Email:{contacto.email}</p>
        <p>Conectado{contacto.conectado}</p>
        <button onClick={()=>offLine()}>Desconectar</button>
        </div>) : ( <p > <strong>{contacto.nombre}</strong>  <p style={{color:'red'}}><strong>Contacto no Disponible </strong></p>  <button onClick={()=>enLinea()}>Conectar</button> </p>   

        )  
        
       
        
        }
        
        
</div>


  



   

    </>
  )
}

ComponenteB.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,

}

export default ComponenteB