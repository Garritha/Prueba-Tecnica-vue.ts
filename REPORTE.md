 #   Informe de Desarrollo - Prueba Tecnica

#  Introducción
En este informe, se describen las decisiones y prácticas de desarrollo que se aplicaron en el proyecto de Frutas. El proyecto consiste en una aplicación web que permite al usuario seleccionar una fruta de una lista.
Arquitectura
El proyecto sigue el patrón de diseño de Vue.js, que se basa en componentes reactivos y permite una separación clara de responsabilidades. Está compuesto por dos componentes principales: FruitsList y App.

 #   FruitsList
Responsabilidad: Este componente se encarga de mostrar una lista de frutas en un menú desplegable y gestionar la selección de frutas.
Librerías utilizadas: Vue.js, Axios.
Decisiones de desarrollo:
Se utilizó Vue 3 para aprovechar las características de reactividad y el sistema de componentes.
Axios se usó para realizar una solicitud HTTP y obtener la lista de frutas desde una API simulada.
Mantenibilidad: El componente FruitsList está bien encapsulado y cumple con el principio de responsabilidad única.

#  App
Responsabilidad: Este componente principal se encarga de mostrar la aplicación en general y manejar la fruta seleccionada.
Librerías utilizadas: Vue.js.
Decisiones de desarrollo:
Se utilizó Vue 3 para mantener la consistencia en toda la aplicación.
Se importó el componente FruitsList para mostrarlo en la aplicación.
Mantenibilidad: Este componente actúa como un punto de entrada y no tiene lógica compleja, lo que facilita su mantenimiento.


Conclusiones
El proyecto de Frutas sigue prácticas de desarrollo sólidas, como la separación de responsabilidades y el uso de librerías relevantes. Para mejorar la calidad del código.





