export default function Prompts() {
  const secciones = [
    {
      seccion: "Resumen ejecutivo",
      prompt: '"Ayudame a arreglar este resumen de manera mas informativa explicando mejor y con mas informacion con respecto al caso."',
      correccionesRealizadas: [
        "Ampliar la explicación sobre la vulnerabilidad utilizada",
        "Detallar el tiempo que los atacantes permanecieron dentro de los sistemas",
        "Explicar las consecuencias para usuarios y empresa"
      ],
      justificacion: "La respuesta inicial era demasiado breve y no desarrollaba suficientemente el impacto del incidente ni el contexto técnico del ataque."
    },
    {
      seccion: "Marco legal",
      prompt: '"Buscame dentro del marco legal del caso Equifax que leyes chilenas e internacionales son las que se ven afectadas dentro del caso."',
      correccionesRealizadas: [
        "Búsqueda de normas nacionales e internacionales",
        "Agregar explicación de aplicabilidad al caso",
        "Incluir mínimo cuatro normas justificadas"
      ],
      justificacion: "La primera respuesta mencionaba normas sin relacionarlas directamente con el caso Equifax ni explicar su función dentro del análisis jurídico."
    },
    {
      seccion: "Delitos informáticos",
      prompt: '"Relaciona el caso Equifax con los delitos establecidos en la Ley 21.459 indicando artículos y acciones realizadas por los atacantes."',
      correccionesRealizadas: [
        "Ordenar los artículos por número",
        "Explicar cada delito por separado",
        "Agregar acciones específicas del atacante",
        "Redactar en formato formal de informe"
      ],
      justificacion: "La respuesta inicial no seguía la estructura requerida por la rúbrica y faltaba relación directa entre conducta y tipificación penal."
    },
    {
      seccion: "Comparación de marcos regulatorios",
      prompt: '"Atravez de la informacion de este texto creame una tabla comparativa en la cual sea dentro del formato markdown."',
      correccionesRealizadas: [
        "Incluir columna de aplicabilidad al caso",
        "Adaptar la tabla a formato Markdown",
        "Utilizar ejes solicitados por la rúbrica como alcance, sanción y sujeto regulado"
      ],
      justificacion: "La tabla inicial no cumplía completamente los requisitos específicos establecidos en la rúbrica de evaluación."
    },
    {
      seccion: "Responsabilidades",
      prompt: '"Identifica actores responsables en el caso Equifax y desarrolla sus responsabilidades penales, civiles y administrativas con cita de normas."',
      correccionesRealizadas: [
        "Limitar el análisis a tres actores",
        "Distinguir dos tipos de responsabilidad para cada actor",
        "Eliminar información innecesaria",
        "Mantener relación directa con la rúbrica"
      ],
      justificacion: "La primera versión contenía información adicional que excedía lo solicitado y dificultaba la claridad del análisis."
    },
    {
      seccion: "Tratamiento de datos",
      prompt: '"Analiza el tratamiento de datos en el caso Equifax según la Ley 19.628, diferenciando datos personales y sensibles y desarrollando derechos ARCO afectados."',
      correccionesRealizadas: [
        "Listar tres tipos de datos comprometidos",
        "Incluir citas textuales de la Ley 19.628",
        "Analizar tres derechos ARCO específicos",
        "Mejorar diferenciación entre datos personales y sensibles"
      ],
      justificacion: "La respuesta inicial mencionaba conceptos generales, pero no cumplía completamente con los criterios específicos exigidos por la rúbrica."
    },
    {
      seccion: "Conclusión y recomendaciones",
      prompt: '"Crea recomendaciones de seguridad y una reflexión final del análisis del caso Equifax."',
      correccionesRealizadas: [
        "Redactar en tono formal",
        "Evitar una conclusión demasiado breve",
        "Relacionar las recomendaciones con las fallas observadas en el caso"
      ],
      justificacion: "La primera respuesta era muy general y no conectaba adecuadamente las recomendaciones con los hechos del incidente analizado."
    },
    {
      seccion: "Integración React, Markdown y Tailwind CSS",
      prompt: '"nececito que crees .jsx para cada markdown de la carpeta doc_arrdie, estos .jsx deben estar en la carpeta components y aparte necesito que instales tailwind CSS y lo integres en los .jsx que vas a crear"',
      correccionesRealizadas: [
        "Mantener la correspondencia entre cada archivo .md y su componente .jsx",
        "Integrar correctamente react-markdown y remark-gfm",
        "Instalar y configurar Tailwind CSS dentro del proyecto React",
        "Mejorar la visualización de tablas y títulos Markdown",
        "Mantener el contenido original sin modificaciones",
        "Crear componentes organizados dentro de src/components"
      ],
      justificacion: "La integración inicial no consideraba completamente la estructura necesaria para renderizar correctamente los archivos Markdown dentro de React ni la correcta configuración visual utilizando Tailwind CSS."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Bitácora del Uso de IA</h1>
        <p className="text-xl text-gray-600 mb-4">Documentación del uso de inteligencia artificial en la elaboración del análisis</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-8">
          <p className="text-gray-700 text-sm">
            <strong>Contexto:</strong> La IA fue utilizada como herramienta de apoyo para organizar información, desarrollar contenido jurídico y estructurar los apartados solicitados por la rúbrica de evaluación.
          </p>
        </div>

        <div className="space-y-8">
          {secciones.map((sec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
                <h2 className="text-2xl font-bold text-white">Sección {index + 1}: {sec.seccion}</h2>
              </div>

              <div className="p-6 space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Prompt Utilizado</h4>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm text-gray-700 border border-gray-200">
                    {sec.prompt}
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Correcciones Realizadas</h4>
                  <ul className="space-y-2">
                    {sec.correccionesRealizadas.map((corr, corrIdx) => (
                      <li key={corrIdx} className="flex items-start text-gray-700">
                        <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs">✓</span>
                        <span>{corr}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 pl-4 py-3">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Justificación</h4>
                  <p className="text-gray-700 text-sm">{sec.justificacion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principales usos de la IA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-purple-500 pl-4 py-3">
              <h4 className="font-bold text-gray-900 mb-2">Búsqueda y organización</h4>
              <p className="text-gray-700 text-sm">Localización eficiente de información relevante sobre el caso Equifax y normativas aplicables.</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-3">
              <h4 className="font-bold text-gray-900 mb-2">Redacción de contenidos</h4>
              <p className="text-gray-700 text-sm">Elaboración de textos jurídicos y técnicos con precisión y claridad según los requisitos.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-3">
              <h4 className="font-bold text-gray-900 mb-2">Explicación de normas</h4>
              <p className="text-gray-700 text-sm">Interpretación accesible de regulaciones complejas tanto nacionales como internacionales.</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-3">
              <h4 className="font-bold text-gray-900 mb-2">Apoyo en rúbrica</h4>
              <p className="text-gray-700 text-sm">Comprensión y alineación con los requisitos específicos de evaluación solicitados.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Reflexión Final sobre el Uso de IA</h3>
          
          <p className="text-gray-700 mb-4">
            La inteligencia artificial fue utilizada como una herramienta de apoyo para organizar ideas, estructurar información y facilitar la redacción del informe. Sin embargo, fue necesario revisar y corregir continuamente las respuestas obtenidas para ajustarlas a los requisitos específicos de la rúbrica y al contexto jurídico del caso Equifax.
          </p>

          <p className="text-gray-700 mb-4">
            El uso de IA permitió acelerar tareas relacionadas con redacción, síntesis de información, organización de contenidos, estructuración en Markdown e integración de contenido Markdown dentro de React. No obstante, también fue necesario validar información, corregir formatos y adaptar las respuestas para asegurar coherencia y precisión.
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">Roles de la IA en el Proyecto</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Como Chatbot:</h5>
                <p className="text-gray-700 text-sm">Respondió preguntas específicas y entregó explicaciones directas sobre leyes, conceptos y funcionamiento de herramientas tecnológicas.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-semibold text-gray-900 mb-2">Como Agente:</h5>
                <p className="text-gray-700 text-sm">Ayudó a estructurar secciones completas, adaptar contenidos según la rúbrica, reorganizar información, generar componentes React e integración visual mediante Tailwind CSS.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-gray-700 text-sm">
              <strong>Conclusión:</strong> Esto demuestra que la IA puede funcionar no solo como una herramienta conversacional, sino también como apoyo activo en procesos de análisis, redacción, programación y organización de información académica y técnica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
