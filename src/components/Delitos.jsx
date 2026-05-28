export default function Delitos() {
  const delitos = [
    {
      articulo: "Artículo 1",
      titulo: "Ataque a la integridad de un sistema informático",
      acciones: [
        "Vulneración de sistemas informáticos",
        "Alteración de mecanismos de seguridad",
        "Compromiso de infraestructura tecnológica",
        "Explotación de fallas de seguridad"
      ]
    },
    {
      articulo: "Artículo 2",
      titulo: "Acceso ilícito",
      acciones: [
        "Explotación de vulnerabilidad informática",
        "Ingreso no autorizado a servidores",
        "Acceso ilegítimo a sistemas protegidos",
        "Permanencia no autorizada dentro de la infraestructura"
      ]
    },
    {
      articulo: "Artículo 3",
      titulo: "Ataque a la integridad de los datos informáticos",
      acciones: [
        "Extracción de datos personales",
        "Acceso ilegal a bases de datos",
        "Obtención no autorizada de información confidencial",
        "Compromiso de datos financieros y personales"
      ]
    },
    {
      articulo: "Artículo 6",
      titulo: "Receptación de datos informáticos",
      acciones: [
        "Almacenamiento de datos robados",
        "Utilización de información filtrada",
        "Distribución de datos obtenidos ilícitamente",
        "Posible comercialización ilegal de información"
      ]
    },
    {
      articulo: "Artículo 7",
      titulo: "Fraude informático",
      acciones: [
        "Utilización fraudulenta de datos personales",
        "Fraude financiero",
        "Robo de identidad",
        "Uso indebido de información confidencial"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Tipificación de Delitos Informáticos</h1>
        <p className="text-xl text-gray-600 mb-8">Según la Ley 21.459 - Caso Equifax</p>

        <div className="space-y-6">
          {delitos.map((delito, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{delito.articulo}</h2>
                <h3 className="text-lg text-orange-100">{delito.titulo}</h3>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Acciones del atacante:</h4>
                <ul className="space-y-2">
                  {delito.acciones.map((accion, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">✓</span>
                      <span className="text-gray-700 pt-0.5">{accion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Relación con el caso Equifax</h2>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            El ataque realizado contra Equifax comprende múltiples tipos penales establecidos en la Ley 21.459. Los atacantes explotaron deliberadamente una vulnerabilidad conocida para obtener acceso no autorizado a los sistemas de la empresa, permaneciendo dentro de la infraestructura tecnológica durante semanas sin ser detectados.
          </p>
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            Durante su permanencia en los sistemas, obtuvieron acceso ilegal a bases de datos que contenían información personal y financiera de millones de personas. La extracción y manipulación no autorizada de esta información comprometió tanto la integridad de los sistemas como la protección de los datos almacenados.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Esta conducta es especialmente grave debido a la gran cantidad de personas afectadas y al valor de la información comprometida, la cual podía ser utilizada posteriormente para actividades fraudulentas, robo de identidad y otros delitos informáticos.
          </p>
        </div>
      </div>
    </div>
  );
}
