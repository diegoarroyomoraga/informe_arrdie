export default function PromptsArrdie() {
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
        "Identificar actores claramente diferenciados",
        "Desarrollar responsabilidades en categorías específicas",
        "Incluir citas de normativas aplicables",
        "Estructurar de manera jurídicamente formal"
      ],
      justificacion: "Se requería un análisis profundo de responsabilidades diferenciadas por tipo de actor y naturaleza de la responsabilidad."
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

        <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Reflexión sobre el proceso</h3>
          
          <p className="text-gray-700 mb-4">
            El uso de inteligencia artificial en la elaboración de este análisis cumplió un rol fundamental como herramienta de apoyo, permitiendo:
          </p>

          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li className="flex items-start">
              <span className="mr-3">🤖</span>
              <span>Procesar y organizar grandes volúmenes de información jurídica y técnica</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">📚</span>
              <span>Mejorar la claridad y estructura de contenidos complejos</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">⚖️</span>
              <span>Asegurar precisión en la interpretación de normativas</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✨</span>
              <span>Optimizar tiempos de investigación y redacción</span>
            </li>
          </ul>

          <p className="text-gray-700 text-sm italic">
            Sin embargo, el análisis final, las decisiones sobre estructura y contenido, y la validación de información fueron responsabilidad del redactor, lo que garantiza calidad académica y precisión jurídica en cada apartado.
          </p>
        </div>
      </div>
    </div>
  );
}
