import * as fbq from "../lib/fbpixel";

export function whatsappButtonEvent() {
  fbq("track", "Click-Whatsapp-Button");
}

export const sendEventToFacebookAPI = async (data) => {
  try {
    // Envía el evento a fbq para que lo rastree localmente (si es necesario)
    // fbq.event(data.event_name, { eventID: "testform123" });

    // Envía el evento a la API de Facebook
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [data],
          test_event_code: "TEST44186",
        }),
      }
    );

    // Analiza la respuesta y maneja cualquier error
    const responseData = await response.json();
    console.log("Response from Facebook API:", responseData);

    // Si necesitas hacer algo más con la respuesta, puedes hacerlo aquí
  } catch (error) {
    console.error("Error:", error);
    // Puedes manejar el error de la manera que desees, como mostrar un mensaje de error al usuario
  }
};
