import React from 'react'
import { Contacto } from '../../models/contacto';
import ComponenteB from '../pure/ComponenteB';

 const ComponenteA = () => {

    const currentContact = new Contacto('Juan', 'Perez', 'test@gmail.com', true);
    





    return (
    
        <>
        <ComponenteB contacto={currentContact}/>
        </>
    )
    
    
    }


export default ComponenteA