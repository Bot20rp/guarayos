import React from 'react'

const NativePage = () => {

    const handlePedir = (producto, precio) => {
        const numeroDeTelefono = '59176672191'; // Reemplaza con tu número de teléfono de WhatsApp
        const mensaje = `¡Hola! Quiero pedir el siguiente producto: %0A%0A*Producto:* ${producto} %0A*Precio:* ${precio}bs`;
        const enlace = `https://wa.me/${numeroDeTelefono}?text=${mensaje}`;

        // Abre WhatsApp en una nueva pestaña con el mensaje
        console.log("pedir")
        window.open(enlace, '_blank');
    };

    return (
        <div>
            <div className='categorias'>
                {/* <img
                    src="../img/native.jpg"
                    alt=""
                /> */}
                <h2>RestoBar NATIVE</h2>
                <div id='todas'>
                    <div>
                        <h2>Cocteles</h2>
                        <img src="../img/native1.jpeg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Cocteles',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Fetuchini</h2>
                        <img src="../img/native2.jpg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Fetuchini',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Hamburguesa</h2>
                        <img src="../img/native3.jpeg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Hamburguesa',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Pizza Italiana</h2>
                        <img src="../img/native4.jpg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Pizza Italiana',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Pollo a la Francesa</h2>
                        <img src="../img/native5.jpeg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Pollo',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Mojito</h2>
                        <img src="../img/native6.jpeg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Mojito',15)}>Pedir</button>
                    </div>
                    <div>
                        <h2>Especial</h2>
                        <img src="../img/native7.jpg" alt="" />
                        <h3>Precio: 15bs </h3>
                        <button onClick={() => handlePedir('Especial',15)}>Pedir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NativePage
