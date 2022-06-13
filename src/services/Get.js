export const Get = async (url, data, callback, token = "") => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // respuesta correcta, hacer algo con body
      const body = (await response.json()) || undefined;

      body && callback(body);
    } else {
      console.log(
        // respuesta erronea, informar al usuario?
        "Codigo de estado no esperado",
        response.status,
        response.statusText
      );
    }
  } catch (msg) {
    // fallo de comunicación, informar al usuario?
    console.error("Errorísimo!!!!", msg);
  }
};
