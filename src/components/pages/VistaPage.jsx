import React from 'react'
import './VistaPage.css'
import { useNavigate } from 'react-router-dom';
import { Descuento } from '../HomeD/Descuento'
import { Informacion } from '../HomeD/Informacion';

export default function VistaPage() {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/restaurantes')
    }



    return (
        <div className='principalVista'>
            <div className='contenedorVista'>

                <div className='descuentos'>
                    <Descuento />
                </div>
                <div className='titulo'>
                    <h1 id='guarayos'>GUARAYOS SHOPPING</h1>
                </div>
                <div className='categorias'>
                    <button>Categorias</button>
                    <h2>Para más información haz click sobre la imagen</h2>
                    <div id='todas'>
                        <div>
                            <h2>Restaurantes</h2>
                            <img 
                            src="./img/broaster.jpg" 
                            alt="" 
                            onClick={handleClick}
                            />
                        </div>
                        <div>
                            <h2>Carpintería/Muebles</h2>
                            <img src="./img/muebles.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Vestimenta/Moda</h2>
                            <img src="./img/vestimenta.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Tecnologia</h2>
                            <img src="./img/tecnologia.jpeg" alt="" />
                        </div>
                        <div>
                            <h2>Entretenimiento</h2>
                            <img src="./img/entretenimiento.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Salud/Bienestar</h2>
                            <img src="./img/salud.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Movilistico</h2>
                            <img src="./img/delibery.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Ferreteria</h2>
                            <img src="./img/ferreteria.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <Informacion/>
                </div>
            </div>

        </div>
    )
}
