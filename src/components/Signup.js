function Singout() {
  return (
    <form action="">
      <fieldset>
        <p>
          <label htmlFor="">Email: </label>
          <input type="text" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="">Name: </label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label htmlFor="">Surname: </label>
          <input type="text" name="surname" id="surname" />
        </p>
        <p>
          <label htmlFor="">Password </label>
          <input type="text" name="password" id="password" />
        </p>
        <button>Iniciar sesión</button>
      </fieldset>
    </form>
  );
}
export default Singout;
