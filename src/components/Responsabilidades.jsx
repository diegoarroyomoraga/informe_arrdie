export default function Responsabilidades() {
  const actores = [
    {
      actor: "Atacantes responsables de la intrusión",
      color: "red",
      responsabilidades: [
        {
          tipo: "Penal",
          descripcion: "Violación de Artículos 1, 2, 3 y 7 de la Ley 21.459",
          detalles: "Acceso ilícito, ataque a sistemas, robo de datos, fraude informático"
        },
        {
          tipo: "Civil",
          descripcion: "Daños a personas afectadas",
          detalles: "Robo de identidad, fraude financiero, uso indebido de datos personales"
        }
      ]
    },
    {
      actor: "Equifax Inc.",
      color: "orange",
      responsabilidades: [
        {
          tipo: "Administrativa",
          descripcion: "Violación de FTC Act, GLBA, Ley 19.628",
          detalles: "Deficiencias en medidas de seguridad, gestión inadecuada de vulnerabilidades, demora en comunicación"
        },
        {
          tipo: "Civil",
          descripcion: "Indemnización a usuarios afectados",
          detalles: "Daños económicos, vulneración de privacidad, riesgos de fraude"
        }
      ]
    },
    {
      actor: "Ejecutivos y administración",
      color: "yellow",
      responsabilidades: [
        {
          tipo: "Administrativa",
          descripcion: "Supervisión inadecuada de seguridad",
          detalles: "Negligencia en gestión de riesgos, falta de actualización de sistemas"
        },
        {
          tipo: "Civil",
          descripcion: "Responsabilidad por negligencia",
          detalles: "Deficiente supervisión y protección de datos personales"
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      red: "from-red-500 to-pink-500 border-red-500",
      orange: "from-orange-500 to-amber-500 border-orange-500",
      yellow: "from-yellow-500 to-amber-500 border-yellow-500"
    };
    return colorMap[color];
  };

  const getTextColorClasses = (color) => {
    const textMap = {
      red: "text-red-700 bg-red-50 border-red-200",
      orange: "text-orange-700 bg-orange-50 border-orange-200",
      yellow: "text-yellow-700 bg-yellow-50 border-yellow-200"
    };
    return textMap[color];
  };

  const getBgColorClasses = (color) => {
    const bgMap = {
      red: "bg-red-50",
      orange: "bg-orange-50",
      yellow: "bg-yellow-50"
    };
    return bgMap[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Responsabilidades Legales</h1>
        <p className="text-xl text-gray-600 mb-8">Análisis de actores responsables en el caso Equifax</p>

        <div className="space-y-8">
          {actores.map((actor, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border-l-4 ${getColorClasses(actor.color).split(' ')[3]}`}>
              <div className={`bg-gradient-to-r ${getColorClasses(actor.color)} p-6`}>
                <h2 className="text-3xl font-bold text-white">{actor.actor}</h2>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {actor.responsabilidades.map((resp, respIdx) => (
                    <div key={respIdx}>
                      <div className={`border-l-4 ${getTextColorClasses(actor.color)} pl-4 py-3 rounded`}>
                        <h4 className="font-bold text-lg mb-1">{resp.tipo}</h4>
                        <p className="font-semibold text-sm mb-2">{resp.descripcion}</p>
                        <p className="text-sm opacity-90">{resp.detalles}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Normas Aplicables</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Ley 21.459</h4>
              <p className="text-gray-700 text-sm mb-2">Delitos informáticos cometidos por atacantes</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">FTC Act</h4>
              <p className="text-gray-700 text-sm mb-2">Prácticas injustas de Equifax respecto a protección de consumidores</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">GLBA</h4>
              <p className="text-gray-700 text-sm mb-2">Protección de información financiera de consumidores</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Ley 19.628</h4>
              <p className="text-gray-700 text-sm mb-2">Protección de datos personales de víctimas</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Indemnizaciones y Sanciones</h3>
          <p className="text-gray-700 mb-4">
            Como resultado de las investigaciones y procesos judiciales, Equifax enfrentó:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">💰</span>
              <span className="text-gray-700">Acuerdos de resolución multimillonarios</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">⚖️</span>
              <span className="text-gray-700">Investigaciones gubernamentales prolongadas</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">📋</span>
              <span className="text-gray-700">Compensaciones económicas a usuarios afectados</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">🔒</span>
              <span className="text-gray-700">Obligación de mejoras significativas en seguridad</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
