import React from 'react';
import "./Informacion.css"

export const Informacion = () => {
    return(
        <div>
           <footer>
            <div className='footerr-fila'>
            <div className="footerr-col1">
                <div className="logo">
                </div>
                <p>Disfruta de la Pagina - Utilizala con bunea utilidad, la confianza de ti nos hace crecer como emprendedor</p>
            </div>

            <div className='footerr-col2'> 
                <h2>Sobre GUARAYOS-SHOPPING</h2>
                <ul>
                    <li>info@bunker.com.bo</li>
                    <li>Aviso de Privacidad</li>
                    <li>Ternino de uso</li>
                    
                </ul>
            </div>

            <div className='footerr-col3'>
                <h2>Contactanos</h2>
                <ul>
                    <li>calle chuquisaca Nª121 , Zona challampa</li>
                    <li>Correo: LicoBunker@gmail.com</li>
                    <li>telefono : 12345678</li>

                </ul>
            </div>

            </div>

        </footer>
        </div>
    )
};