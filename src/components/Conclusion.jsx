export default function Conclusion() {
  const recomendaciones = [
    {
      titulo: "Actualización permanente de sistemas",
      descripcion: "Aplicar parches de seguridad de manera oportuna para evitar que vulnerabilidades conocidas sean explotadas",
      icono: "🔄"
    },
    {
      titulo: "Gestión de vulnerabilidades",
      descripcion: "Implementar políticas que permitan identificar, evaluar y corregir riesgos de seguridad antes de ser explotados",
      icono: "🛡️"
    },
    {
      titulo: "Controles de acceso y monitoreo",
      descripcion: "Supervisión constante de actividad sospechosa para detectar intrusiones tempranamente",
      icono: "👁️"
    },
    {
      titulo: "Cifrado de datos",
      descripcion: "Utilizar mecanismos avanzados de cifrado para proteger información sensible almacenada",
      icono: "🔐"
    },
    {
      titulo: "Autenticación multifactor",
      descripcion: "Implementar múltiples capas de autenticación para aumentar la seguridad del acceso",
      icono: "🔑"
    },
    {
      titulo: "Segmentación de redes",
      descripcion: "Dividir la infraestructura para limitar el impacto de posibles compromisos de seguridad",
      icono: "🌐"
    },
    {
      titulo: "Auditorías periódicas",
      descripcion: "Realizar evaluaciones regulares de seguridad para identificar y corregir debilidades",
      icono: "📋"
    },
    {
      titulo: "Capacitación continua",
      descripcion: "Entrenar constantemente a trabajadores y responsables tecnológicos en prácticas seguras",
      icono: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Recomendaciones y Reflexión Final</h1>
        <p className="text-xl text-gray-600 mb-8">Lecciones del caso Equifax para la ciberseguridad moderna</p>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recomendaciones de Seguridad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recomendaciones.map((rec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{rec.icono}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{rec.titulo}</h4>
                    <p className="text-gray-700 text-sm">{rec.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflexión Final del Análisis</h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              El caso Equifax representa uno de los incidentes de ciberseguridad más importantes relacionados con filtraciones masivas de datos personales y financieros. La brecha afectó a millones de personas y evidenció cómo una vulnerabilidad no corregida puede transformarse en un problema de gran impacto económico, social y reputacional.
            </p>
            
            <p>
              El análisis del caso permite observar la relevancia que poseen actualmente las normativas relacionadas con delitos informáticos, protección de datos personales y responsabilidad de las organizaciones frente al tratamiento de información sensible.
            </p>
            
            <p>
              Además, demuestra que la ciberseguridad no depende únicamente de herramientas tecnológicas, sino también de decisiones administrativas, supervisión adecuada y cumplimiento de obligaciones legales relacionadas con protección de datos.
            </p>
            
            <p>
              La filtración sufrida por Equifax evidenció la necesidad de fortalecer medidas preventivas, mejorar la gestión de riesgos tecnológicos y aumentar la responsabilidad de las organizaciones respecto al manejo de información personal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">⚠️ Lección Crítica</h3>
            <p className="text-sm">
              Una vulnerabilidad conocida sin aplicar parche es un riesgo inminente que puede comprometer a millones de personas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">📊 Impacto Masivo</h3>
            <p className="text-sm">
              147 millones de personas afectadas demostró que la ciberseguridad débil tiene consecuencias globales enormes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-2xl font-bold mb-3">🔄 Referencia Global</h3>
            <p className="text-sm">
              El caso continúa siendo utilizado internacionalmente para justificar regulaciones más estrictas.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Vigencia Actual</h3>
          
          <p className="mb-4">
            El caso Equifax continúa siendo utilizado como referencia internacional sobre la importancia de la seguridad informática y la protección de datos en entornos digitales. Sus lecciones siguen siendo relevantes para:
          </p>
          
          <ul className="space-y-2 ml-4">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Empresas que almacenan información personal</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Reguladores que diseñan normativas de protección de datos</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Profesionales de ciberseguridad en todo el mundo</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Abogados y especialistas en privacidad digital</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Ciudadanos conscientes de sus derechos digitales</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
