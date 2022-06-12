const getDataFromApi = () => {
  const urlBase = "http://51.38.51.187:5050/api/v1/";
  //   const urlLogin = `${urlBase}auth/log-in`;
  //   const urlSingup = `${urlBase}auth/sign-up`;

  return fetch(`${urlBase}`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          email: user.email,
          password: user.password,
          name: user.name,
          surname: user.surname,
          id: user.id,
        };
      });
    });
};
export default getDataFromApi;
