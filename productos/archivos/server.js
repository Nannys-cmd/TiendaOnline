// Archivo: server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Establece la carpeta que contiene archivos estáticos (en este caso, js)
app.use('/js', express.static(path.join(__dirname, 'js')));

// Establece la carpeta que contiene archivos HTML de productos
app.use('/productos', express.static(path.join(__dirname, 'productos')));

// Establece la carpeta que contiene archivos estáticos de productos/archivos
app.use('/archivos', express.static(path.join(__dirname, 'archivos')));

app.get('/realizar-compra', (req, res) => {
    const clientId = process.env.ARvP7z_W-dlMNiMyzj9k0mQUiwhdXW26cvNE0Ul71nyPIdrnfCiypBO0RjCTMy7RgAeOXTSWsapIYpXL;
    const clientSecret = process.env.EHsx1jEr4qeTbmaiWXSGcLd23aK_OC51QHp89uFEOYNuGu9nbbRevqykm7N1O73RU_rVcEzc9LGFG8vh;

    // Aquí puedes usar las credenciales y realizar la lógica de integración con PayPal
    // ... Lógica para realizar la compra con PayPal

    res.send('Compra realizada con éxito'); // Puedes enviar una respuesta adecuada
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
