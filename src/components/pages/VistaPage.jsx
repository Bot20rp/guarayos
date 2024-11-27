import React from 'react'
import './VistaPage.css'
import { ImStarFull } from "react-icons/im";
import { Descuento } from '../HomeD/Descuento'

export default function VistaPage() {
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
                    <div id='todas'>
                        <div>
                            <h2>Restaurantes</h2>
                            <img src="./img/broaster.jpg" alt="" />
                        </div>
                        <div>
                            <h2>RestoBar</h2>
                            <img src="./img/cocteles.jpg" alt="" />
                        </div>
                        <div>
                            <h2>Vestimenta</h2>
                            <img src="./img/vestimenta.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
