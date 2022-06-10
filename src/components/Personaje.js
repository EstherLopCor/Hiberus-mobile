function Personaje(personajeInfo) {
  return (
    <div className="col-3">
      <div className="card">
        <img
          src={personajeInfo.image}
          alt={personajeInfo.name}
          className="card-img-top"
        />
        <div className="card-body">
          {" "}
          <h3 className="card-title">{personajeInfo.name}</h3>
          <p className="overflow-hidden">{`Origin${
            personajeInfo.origin && personajeInfo.origin.name
          }`}</p>
        </div>
      </div>
    </div>
  );
}
export default Personaje;
