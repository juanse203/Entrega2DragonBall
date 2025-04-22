# Dragon Ball API - Aplicación React

# Descripción
Este proyecto es una aplicación web desarrollada con React que consume la API pública de Dragon Ball. Permite explorar una galería de personajes del universo Dragon Ball, paginarlos y acceder a detalles individuales. Ha sido diseñado como una entrega académica, enfocada en buenas prácticas de desarrollo web moderno.

# Características Principales
+ Galería de Personajes: Visualización de personajes mediante tarjetas interactivas.
+ Paginación Dinámica: Navegación entre múltiples páginas de personajes.
+ Vista Detallada: Información completa de cada personaje al hacer clic en su tarjeta.
+ Diseño Responsivo: Interfaz adaptable a móviles y pantallas de escritorio.
+ Componentización: Uso de componentes reutilizables para mantener el código limpio y organizado.

# Tecnologías Utilizadas
+ React: Biblioteca para construir interfaces de usuario.
+ Vite: Empaquetador rápido y moderno para proyectos React.
+ React Router DOM: Manejo de rutas para navegar entre vistas.
+ Material UI: Biblioteca de componentes estilizados para React.
+ Fetch API: Para consumir endpoints de la API de Dragon Ball.
+ CSS personalizado: Estilización adicional de componentes.

# Prerrequisitos
Node.js v14 o superior
npm v6 o superior

# Estructura del Proyecto
/src
├── Components
│   ├── CardCharacter       # Tarjetas de personajes
│   ├── Header              # Encabezado de la aplicación
│   ├── NavBar              # Barra de navegación y filtros
│
├── Pages
│   ├── Acercade            # Información de los desarrolladores
│   ├── DetailsPage         # Vista detallada de un personaje
│   ├── ErrorPage           # Página para rutas no válidas
│   ├── FilterPage          # Personajes filtrados por género
│   ├── HomePage            # Página principal con todos los personajes
│
├── Imagenes                # Fotografías de los desarrolladores (usadas en Acerca de)
/assets                     # Otros recursos estáticos
/public                     # Archivos públicos
App.jsx                     # Componente principal con rutas
App.css                     # Estilos generales y distribucion 
      

# Endpoints de API Utilizados
https://dragonball-api.com/api/characters — Lista general de personajes.
https://dragonball-api.com/api/characters/${id} — Detalles de un personaje específico.
https://dragonball-api.com/api/characters?gender={gender} — Lista de personajes filtrados por género (gender=Male o gender=Female).

# Desarrolladores
Juan Sebastian Rojas Rojas - juanse.rojas@udla.edu.co  
Jorge Luis Kuaran Silva - j.kuaran@udla.edu.co

# Proyecto Académico
Desarrollado como parte del curso de Programación Web en la Universidad de la Amazonia, programa de Ingeniería de Sistemas.
Este proyecto es de código abierto y se puede utilizar con fines académicos y personales.
