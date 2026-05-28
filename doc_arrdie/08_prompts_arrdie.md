# Bitácora del uso de IA

## Uso de inteligencia artificial durante el desarrollo del informe

Durante la elaboración del análisis del caso Equifax se utilizó inteligencia artificial como apoyo para organizar información, desarrollar contenido jurídico y estructurar los apartados solicitados por la rúbrica.

La IA fue utilizada principalmente para:
- búsqueda y organización de información.
- redacción de contenidos.
- explicación de normas legales.
- apoyo en interpretación de la rúbrica.
- integración de Markdown con React y Tailwind CSS.

---

# Prompts utilizados por sección

## Resumen ejecutivo

### Prompt utilizado

> “Ayudame a arreglar este resumen de manera mas informativa explicando mejor y con mas informacion con respecto al caso.”

### Correcciones realizadas

Se solicitó ampliar la explicación sobre:
- la vulnerabilidad utilizada.
- el tiempo que los atacantes permanecieron dentro de los sistemas.
- las consecuencias para usuarios y empresa.

### Justificación

La respuesta inicial era demasiado breve y no desarrollaba suficientemente el impacto del incidente ni el contexto técnico del ataque.

---

## Marco legal

### Prompt utilizado

> “Buscame dentro del marco legal del caso Equifax que leyes chilenas e internacionales son las que se ven afectadas dentro del caso.”

### Correcciones realizadas

Se solicitó:
- busqueda de normas nacionales e internacionales.
- agregar explicación de aplicabilidad al caso.
- incluir mínimo cuatro normas justificadas.

### Justificación

La primera respuesta mencionaba normas sin relacionarlas directamente con el caso Equifax ni explicar su función dentro del análisis jurídico.

---

## Delitos informáticos

### Prompt utilizado

> “Relaciona el caso Equifax con los delitos establecidos en la Ley 21.459 indicando artículos y acciones realizadas por los atacantes.”

### Correcciones realizadas

Se pidió:
- ordenar los artículos por número.
- explicar cada delito por separado.
- agregar acciones específicas del atacante.
- redactar en formato formal de informe.

### Justificación

La respuesta inicial no seguía la estructura requerida por la rúbrica y faltaba relación directa entre conducta y tipificación penal.

---

## Comparación de marcos regulatorios

### Prompt utilizado

> “Atravez de la informacion de este texto creame una tabla comparativa en la cual sea dentro del formato markdown.”

### Correcciones realizadas

Se solicitó:
- incluir columna de aplicabilidad al caso.
- adaptar la tabla a formato Markdown.
- utilizar ejes solicitados por la rúbrica como alcance, sanción y sujeto regulado.

### Justificación

La tabla inicial no cumplía completamente los requisitos específicos establecidos en la rúbrica de evaluación.

---

## Responsabilidades

### Prompt utilizado

> “Identifica actores responsables en el caso Equifax y desarrolla sus responsabilidades penales, civiles y administrativas con cita de normas.”

### Correcciones realizadas

Se pidió:
- limitar el análisis a tres actores.
- distinguir dos tipos de responsabilidad para cada actor.
- eliminar información innecesaria.
- mantener relación directa con la rúbrica.

### Justificación

La primera versión contenía información adicional que excedía lo solicitado y dificultaba la claridad del análisis.

---

## Tratamiento de datos

### Prompt utilizado

> “Analiza el tratamiento de datos en el caso Equifax según la Ley 19.628, diferenciando datos personales y sensibles y desarrollando derechos ARCO afectados.”

### Correcciones realizadas

Se solicitó:
- listar tres tipos de datos comprometidos.
- incluir citas textuales de la Ley 19.628.
- analizar tres derechos ARCO específicos.
- mejorar diferenciación entre datos personales y sensibles.

### Justificación

La respuesta inicial mencionaba conceptos generales, pero no cumplía completamente con los criterios específicos exigidos por la rúbrica.

---

## Conclusión y recomendaciones

### Prompt utilizado

> “Crea recomendaciones de seguridad y una reflexión final del análisis del caso Equifax.”

### Correcciones realizadas

Se pidió:
- redactar en tono formal.
- evitar una conclusión demasiado breve.
- relacionar las recomendaciones con las fallas observadas en el caso.

### Justificación

La primera respuesta era muy general y no conectaba adecuadamente las recomendaciones con los hechos del incidente analizado.

---

## Integración React, Markdown y Tailwind CSS

### Prompt utilizado

> “nececito que crees .jsx para cada markdown de la carpeta doc_arrdie, estos .jsx deben estar en la carpeta components y aparte necesito que instales tailwind CSS y lo integres en los .jsx que vas a crear”

### Correcciones realizadas

Se solicitó:
- mantener la correspondencia entre cada archivo `.md` y su componente `.jsx`.
- integrar correctamente `react-markdown` y `remark-gfm`.
- instalar y configurar Tailwind CSS dentro del proyecto React creado con Vite.
- mejorar la visualización de tablas y títulos Markdown.
- mantener el contenido original de los archivos `.md` sin modificaciones.
- crear componentes organizados dentro de `src/components`.

### Justificación

La integración inicial no consideraba completamente la estructura necesaria para renderizar correctamente los archivos Markdown dentro de React ni la correcta configuración visual utilizando Tailwind CSS.

---

# Reflexión final sobre el uso de IA

La inteligencia artificial fue utilizada como una herramienta de apoyo para organizar ideas, estructurar información y facilitar la redacción del informe. Sin embargo, fue necesario revisar y corregir continuamente las respuestas obtenidas para ajustarlas a los requisitos específicos de la rúbrica y al contexto jurídico del caso Equifax.

El uso de IA permitió acelerar tareas relacionadas con:
- redacción;
- síntesis de información;
- organización de contenidos;
- estructuración en Markdown;
- integración de contenido Markdown dentro de React.

No obstante, también fue necesario validar información, corregir formatos y adaptar las respuestas para asegurar coherencia y precisión dentro del análisis.

Durante el desarrollo del informe, la IA fue utilizada tanto como chatbot como agente de apoyo.

Como chatbot, respondió preguntas específicas y entregó explicaciones directas sobre leyes, conceptos y funcionamiento de herramientas tecnológicas.

Como agente, ayudó a estructurar secciones completas del informe, adaptar contenidos según la rúbrica, reorganizar información, generar componentes React y asistir en la integración visual del proyecto mediante Tailwind CSS y renderizado Markdown.

Esto demuestra que la IA puede funcionar no solo como una herramienta conversacional, sino también como apoyo activo en procesos de análisis, redacción, programación y organización de información académica y técnica.