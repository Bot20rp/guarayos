import React from 'react'
import "./RestaurantesPage.css"
import { useNavigate } from 'react-router-dom';

const RestaurantesPage = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/native/products')
    }


    return (
        <div className='principalRestaurante'>
            <div className='restaurante'>
                <div>
                    <h1>Restaurantes</h1>
                    <input type="text" placeholder='Buscar' />
                </div>
                <div id='resto'>
                    <div id='todas'>
                        <div>
                            <h2>NATIVE</h2>
                            <img 
                            src="/img/native.jpg" 
                            alt="" 
                            onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantesPage
