import { ACCESS_TOKEN } from './config.json';

export const IntegracionMP = async ({nombre, cantidadEntradas, totalAPagar, fecha, hora}) => {
    console.log(nombre, cantidadEntradas, totalAPagar, fecha, hora);

    console.log("ingreso a MPIntegration");

    const preferencia = {
        "items": [
            {
                "title": nombre,
                "description": "Compra de entradas.",
                "picture_url": "http://www.myapp.com/myimage.jpg",
                "category_id": "peliculas",
                "quantity": cantidadEntradas,
                "currency_id": "$",
                "unit_price": totalAPagar
            }
        ],
        // "back_urls": {
        //     "succes": "myapp://success",
        //     "failure": "myapp://failure"
        // },
        //"auto_return": "approved" //redirección automática luego de pago aprobado
    }
    console.log("PREFERENCIA: " + preferencia);

    try {
        console.log("Entró al TRY");
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preferencia)
        })
        console.log("RESPONSE: " + response);

        const data = await response.json()

        // console.log(data.init_point)
        return data.init_point

    } catch (error) {
        console.log("RESPONSE: " + response);
        console.log(error)
    }
}