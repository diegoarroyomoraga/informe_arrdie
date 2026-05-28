export default function Datos() {
  const tiposDatos = [
    {
      categoria: "Datos de identificación personal",
      icono: "👤",
      items: [
        "Nombres completos",
        "Fechas de nacimiento",
        "Números de seguridad social",
        "Números de identificación"
      ]
    },
    {
      categoria: "Datos de contacto y localización",
      icono: "📍",
      items: [
        "Direcciones domiciliarias",
        "Información personal de contacto",
        "Teléfonos",
        "Correos electrónicos"
      ]
    },
    {
      categoria: "Datos financieros y crediticios",
      icono: "💳",
      items: [
        "Historiales crediticios",
        "Antecedentes financieros",
        "Información de créditos",
        "Situación económica"
      ]
    }
  ];

  const derechosArco = [
    {
      derecho: "Acceso",
      icono: "👁️",
      descripcion: "Derecho a conocer qué información posee una organización sobre ti",
      impacto: "Se vio afectado por demora en informar públicamente la brecha de seguridad"
    },
    {
      derecho: "Rectificación",
      icono: "✏️",
      descripcion: "Derecho a corregir datos incorrectos o desactualizados",
      impacto: "Personas afectadas necesitaban corregir información comprometida"
    },
    {
      derecho: "Cancelación",
      icono: "❌",
      descripcion: "Derecho a solicitar eliminación de datos personales",
      impacto: "Riesgo de utilización fraudulenta de información filtrada"
    },
    {
      derecho: "Oposición",
      icono: "🚫",
      descripcion: "Derecho a oponerse al tratamiento de datos personales",
      impacto: "Usuarios no pudieron controlar uso de información comprometida"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Tratamiento de Datos Personales</h1>
        <p className="text-xl text-gray-600 mb-8">Análisis bajo la Ley 19.628 - Caso Equifax</p>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de datos comprometidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiposDatos.map((tipo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{tipo.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tipo.categoria}</h3>
                <ul className="space-y-2">
                  {tipo.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-cyan-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-cyan-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Datos Personales vs Datos Sensibles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Datos Personales</h4>
              <p className="text-gray-700 text-sm mb-4">
                Según la Ley 19.628: "datos relativos a cualquier información concerniente a personas naturales, identificadas o identificables".
              </p>
              <p className="text-gray-700 text-sm">
                En Equifax: Nombres, direcciones, fechas de nacimiento y números de identificación permitían reconocer directamente a millones de personas.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Datos Sensibles</h4>
              <p className="text-gray-700 text-sm mb-4">
                Según la Ley 19.628: "datos personales que se refieren a características físicas o morales de personas o hechos de su vida privada e intimidad".
              </p>
              <p className="text-gray-700 text-sm">
                En Equifax: Los antecedentes económicos y crediticios comprometen privacidad y seguridad financiera de las personas.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Derechos ARCO afectados en el caso Equifax</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {derechosArco.map((derecho, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cyan-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{derecho.icono}</span>
                  <h4 className="text-xl font-bold text-gray-900">Derecho de {derecho.derecho}</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700 mb-1">Definición:</p>
                    <p className="text-gray-700 text-sm">{derecho.descripcion}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-orange-700 mb-1">Impacto en el caso:</p>
                    <p className="text-gray-700 text-sm">{derecho.impacto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto de la Filtración</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Riesgos Inmediatos</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Robo de identidad</li>
                <li>✓ Fraude financiero</li>
                <li>✓ Acceso no autorizado a cuentas</li>
                <li>✓ Solicitudes de crédito fraudulentas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Consecuencias a Largo Plazo</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Daño crediticio prolongado</li>
                <li>✓ Vigilancia de por vida</li>
                <li>✓ Vulneración de privacidad</li>
                <li>✓ Impacto emocional y psicológico</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            La Ley 19.628 reconoce estos derechos justamente para proteger a las personas de situaciones como esta, evidenciando la importancia de que las organizaciones implementen medidas adecuadas de seguridad y respeten los derechos fundamentales de privacidad de sus usuarios.
          </p>
        </div>
      </div>
    </div>
  );
}
