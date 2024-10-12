# Curso ReactJS Flex

Este es un proyecto de ecommerce desarrollado como parte del curso de React.js dictado en la plataforma Coderhouse.

Se trata de una tienda en línea **Agusele** que ofrece una amplia variedad de productos de diferentes marcas, como zapatillas, mochilas y carteras.


## Enunciado

Desarrolla el Front End de una Single Page Application de e-commerce, utilizando React como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI). 

Implementa los diferentes patrones y conceptos específicos de React, como el Virtual DOM y los hooks. Para la interacción entre las mismas, incorpora manejo de eventos, navegación entre componentes, y administración de datos globales (por ejemplo: el estado del carrito de compras).

Como herramienta de estilado podrás utilizar de forma opcional CSS, SASS, o librerías de estilos (Bootstrap) o de componentes (Material UI).

Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data".

Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.


## Estructura de Componentes recomendada

App
* NavBar
  * CartWidget
* ItemListContainer
  * ItemList
    * Item
* ItemDetailContainer
  * ItemDetail
    * ItemCount
* Cart
  * CartItem
  * CheckoutForm


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
   - Obtén tus credenciales de configuración y agrégalas al proyecto (ver firebase/config.js).

4. Para Ejecutar la aplicación:

   ```bash
   npm run dev
   ```

5. Para Compilar la aplicación:

   ```bash
   npm run build
   ```


## Uso

Una vez que la aplicación esté en funcionamiento, podrás navegar por las distintas categorías de productos, agregar elementos al carrito y simular el proceso de compra. Los pedidos se almacenarán en Firebase para consulta futura.


## Autor

Proyecto realizado por Campo Gabriel, como parte del curso de React.js en Coderhouse, comision 65100.
