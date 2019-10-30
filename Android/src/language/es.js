module.exports = {
  title: "Jugar para ganar regalo de tu Estée Lauder Holiday",
  desc:
    "Junta cuatro Reinas de Corazones idénticas para ganar una muestra GRATIS de Estée Lauder",
  language: "西班牙语",
  start: {
    head:
      "Junta cuatro Reinas de Corazones idénticas para ganar una muestra GRATIS de Estée Lauder.",
    tap: "Toca en cualquier parte para comenzar"
  },
  rule: {
    title: "Reglas del juego",
    content: `
      <div class='p'><div class='line big'>
      ¡Elige tu Reina de Corazones y no la pierdas de vista! </div></div>
      <div class='p'><div class='line big'>
      Los jugadores deben juntar cuatro cartas con su Reina de Corazones para ganar.
      </div></div>
    `,
    start: "Iniciar juego",
    terms: "Condiciones del juego"
  },
  terms: {
    title: "Condiciones del juego",
    content: `
      <div class='p'><div class='line'>
        Guarda tu código QR para canjear tu regalo. 
      </div></div>
    
      <div class='p'><div class='line'>
        Limitado a uno por persona hasta agotar existencias. Los regalos se entregan por orden de llegada y podrían variar según la sucursal.
      </div></div>
    
      <div class='p'><div class='line small'>
        *Estée Lauder Travel Retail se reserva el derecho final de esta campaña.
      </div></div>
    `
  },
  game: {
    chooseQueen: "Elige a tu Reina.",
    chooseSuccess: "¡Tu Reina de Corazones ha sido seleccionada!",
    tap:
      "Toca tu Reina de Corazones para juntarla.<br/>¡Ganas juntando cuatro iguales!",
    congratulations: "Felicidades, ¡ganaste!",
    scan:
      "¡Usa tu teléfono para escanear este código QR y canjear tu regalo exclusivo!"
  },
  success: {
    Congratulations: "¡Felicidades!",
    content: `
    <div class='p'>
      <div class='line'>
        Muéstrale esta página a un asesor de belleza en el mostrador de Estée Lauder Travel Retail y asegúrate de que toque el botón que dice "Confirmar".
      </div>
    </div>
    <div class='p'>
      <div class='line'>
        Tu derecho a canjear tu regalo gratis se anulará si tú tocas el botón.
      </div>
    </div>
  `,
    confirm: "Confirmar",
    terms: "Condiciones del juego",
    success: "Se canjeó el código exitosamente, gracias por participar.",
    fail: "Código de canje no válido.",
    used: "Este código ya fue canjeado."
  },
  successSec: {
    title: "恭喜挑战成功！",
    content: `
    <div class='p'>
      <div class='line'>
        Congratulations, you've caught four of a kind! 
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        You win an exclusive Estée Lauder sample*! 
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        Ask a Beauty Advisor for your prize and to learn more about our Holiday looks. 
      </div>
    </div>

    <div class='p'>
      <div class='line small'>
        *One per person. While supplies last.
      </div>
    </div>
    `
  }
};
