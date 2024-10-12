# Curso ReactJS Flex

Este es un proyecto de ecommerce desarrollado como parte del curso de React.js dictado en la plataforma Coderhouse.

Se trata de una tienda en línea **Agusele** que ofrece una amplia variedad de productos de diferentes marcas, como zapatillas, mochilas y carteras.

## Tecnologías y librerías utilizadas

El proyecto está construido utilizando las siguientes tecnologías:

- **React**: para construir la interfaz de usuario y manejar el estado de la aplicación.
- **Bootstrap**: para un diseño rápido y adaptable.
- **Firebase**: como base de datos en tiempo real para manejar el inventario de productos.
- **React Router DOM**: para manejar el enrutamiento de la aplicación.
- **SweetAlert2**: para mostrar alertas y confirmaciones de una forma atractiva y personalizable.

## Funcionalidades

- **Catálogo de productos**: Visualiza una lista completa de productos en distintas categorías.
- **Filtrado**: Filtra productos por categoría (zapatillas, mochilas, carteras).
- **Detalles del producto**: Accede a la descripción detallada de cada producto.
- **Carrito de compras**: Agrega productos al carrito, edita cantidades o elimina productos.
- **Proceso de compra**: Completa el proceso de compra y guarda el pedido en Firebase.
- **Alertas y notificaciones**: Usa SweetAlert2 para notificar al usuario sobre el éxito o error en distintas acciones.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/mulatorarg/curso-reactjs-flex
   cd curso-reactjs-flex
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Configura Firebase:
   - Crea un proyecto en [Firebase](https://firebase.google.com/).
   - Obtén tus credenciales de configuración y agrégalas a tu proyecto.

4. Ejecuta la aplicación:

   ```bash
   npm start
   ```

## Uso

Una vez que la aplicación esté en funcionamiento, podrás navegar por las distintas categorías de productos, agregar elementos al carrito y simular el proceso de compra. Los pedidos se almacenarán en Firebase para consulta futura.

## Estructura del proyecto

```
📦 public
├── 📂 img          # Imágenes utilizadas a lo largo de la aplicación.
📦 src
├── 📂 components   # Componentes como Navbar, Cart, Cartwidget, ItemList, ItemDetail, Checkout, etc.
├── 📂 context      # Configuración del Contexto y su Provider para el estado de la aplicación.
├── 📂 firebase     # Configuración de Firebase y servicios externos
├── 📂 styles       # Estilos CSS principal usado a lo largo de la aplicación.
└── main.jsx        # Configuración y estructura de la aplicación.
```

## Autor

Proyecto realizado por Campo Gabriel, como parte del curso de React.js en Coderhouse, comision 65100.

