# SergioGodoy8.github.io
[x ] Archivo "index.html" ubicado en la raíz. 
[x] Carpeta "css" que contenga el archivo "styles.css". 
[x] (Opcional) Carpeta "img" para recursos gráficos. 
[x] Archivo "README.md" creado, que incluya una breve descripción del TP y este checklist. 
• Repositorio y Publicación: 
[x] Repositorio en GitHub creado. 
[x] Proyecto subido al repositorio. 
[x] Proyecto publicado utilizando GitHub Pages. 
[ ] En el "README.md" se indica la URL de GitHub Pages. 
• Uso de Google Fonts: 
[x] Enlace a Google Fonts incluido en la sección "head" del HTML. 
[x] La tipografía importada se aplica en el sitio. 
[x] Redacta brevemente tu decisión: ¿Por qué elegiste esa fuente? 
Respuesta: Despues de probar ver algunas fuentes me pareció acorde con un portafolio 
• HTML: 
 [x] El documento inicia con la declaración DOCTYPE y usa el atributo lang="es". 
[x] Se han incluido las metaetiquetas obligatorias: charset y viewport. 
[x] Se ha definido un título descriptivo. 
[x] Se han vinculado correctamente el archivo CSS y el enlace a Google Fonts. 
Secciones obligatorias en "main": 
[x] Barra de navegación ("nav") presente y contiene al menos 3 enlaces. 
[x] Se han insertado al menos 4 comentarios explicativos en el código HTML. 
• CSS: 
[x] Existe el archivo "styles.css" con estilos personalizados. 
[ ] Se utilizan selectores basados en clases e identificadores. 
[x] La tipografía importada desde Google Fonts se aplica correctamente en todos los elementos. 
Layout y Organización: 
[x] Se ha organizado el layout (especialmente en la sección "tarjetas") utilizando Flexbox o Grid. 
[x] Redacta: ¿Qué ventajas encontraste al utilizar Flexbox o Grid en tu proyecto? 
Respuesta: Flexbox parece flexible y se adapta muy bien al contenido. Grid permite organizar el layout de forma más estructurada.
Estilización de Componentes: 
[x] Se han personalizado los estilos de tablas, botones, enlaces y formularios. 
[x] Se han ajustado las dimensiones de imágenes y contenedores utilizando unidades relativas (%, 
rem, vh). 
[x] Se ha implementado al menos una animación o transición (por ejemplo, efecto hover en 
tarjetas o botones). 
[x] Redacta: ¿Qué animación o transición implementaste y por qué consideraste que era 
adecuada para tu proyecto? 
Respuesta: Se utiliza una combinación de transform: translateY() para que la tarjeta se eleve ligeramente y box-shadow para agregar una sombra más pronunciada. También se cambia el color del borde. 
• Consideraciones Adicionales: 
[x] El diseño es responsivo y se visualiza correctamente en distintos dispositivos. 
[x] Se aplicaron buenas prácticas de accesibilidad (por ejemplo, uso adecuado de atributos alt en 
las imágenes). 
[x] Se añadieron comentarios adicionales donde se describan decisiones de diseño o la lógica de 
implementación.
# Portafolio Sergio Godoy - PFO2

## Funcionalidades JavaScript implementadas

1. **Validación de Formulario**
   - Se validan los campos obligatorios (Nombre, Apellido, Email, Teléfono) antes del envío.
   - Si algún campo está vacío, se muestra un mensaje de error debajo del formulario.
   - Justificación: Mejora la calidad de los datos ingresados y evita formularios incompletos.

2. **Pop-up de Confirmación de Envío**
   - Al enviar correctamente el formulario, se muestra un `alert` que confirma el envío exitoso.
   - Justificación: Ofrece retroalimentación inmediata al usuario y refuerza que su mensaje fue enviado.

3. **Modo Oscuro/Claro**
   - Se agregó un switch para alternar entre modo claro y oscuro.
   - La preferencia se guarda en `localStorage` para mantener el modo elegido al recargar la página.
   - Justificación: Mejora la accesibilidad y permite al usuario elegir la visualización más cómoda.

4. **Contador de Visitas**
   - Se implementó un contador que muestra cuántas veces se ha visitado la página desde el navegador actual.
   - El contador se guarda en `localStorage` y se incrementa automáticamente.
   - Justificación: Permite al usuario ver su interacción con el sitio y añade un detalle dinámico.

5. **Temporizador de Entrega**
   - Se agregó un temporizador en tiempo real que indica cuánto falta para la entrega final (5 de mayo de 2025, 23:59:59).
   - Justificación: Sirve como recordatorio visual del tiempo restante, especialmente útil en contextos educativos o de prácticas.

---

## Mejoras en el diseño y la estructura

1. **Organización con Flexbox**
   - Se aplicó Flexbox en el layout general de las secciones principales para lograr una distribución más limpia y adaptable.
   - Justificación: Mejora la presentación visual en dispositivos móviles y facilita la lectura, generando una estructura más moderna.

2. **Contraste y legibilidad en modo oscuro**
   - Se ajustaron colores y tipografía (uso de `Segoe UI`, mejoras en enlaces, encabezados y párrafos) para que el modo oscuro tenga buen contraste y sea fácil de leer.
   - Justificación: Aumenta la accesibilidad y mejora la experiencia de usuario en ambientes con poca luz.

---

