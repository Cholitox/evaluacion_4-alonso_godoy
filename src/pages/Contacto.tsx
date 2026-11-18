
function Contacto() {
  return (
    <section className="seccion contacto" aria-labelledby="titulo-contacto">
      <h1 className="titulo" id="titulo-contacto">
        Contacto
      </h1>

      <p>
        Si quieres contactarme, puedes hacerlo mediante mi correo.
      </p>

      <a href="mailto:alonsogodoy@gmail.com" className="boton">
        Enviar correo
      </a>

      <a
        href="https://github.com/Cholitox"
        className="boton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mi GitHub
      </a>
    </section>
  )
}

export default Contacto
