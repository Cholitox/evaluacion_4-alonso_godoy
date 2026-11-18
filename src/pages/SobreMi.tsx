
function SobreMi() {
  return (
    <section className="seccion" aria-labelledby="titulo-sobre-mi">
      <h1 className="titulo" id="titulo-sobre-mi">
        Sobre mí
      </h1>

      <div className="sobre-mi">
        <section aria-labelledby="quien-soy">
          <h2 id="quien-soy">¿Quién soy?</h2>

          <p>
            Soy estudiante de bachiller en ciencias y humanidades,
            Actualmente estoy aprendiendo programación,
            desarrollo web y bases de datos
          </p>

          <p>
            Me interesa seguir mejorando mis conocimientos
            y desarrollar proyectos que me permitan aplicar
            lo aprendido durante mi carrera
          </p>
        </section>

        <dl className="datos">
          <dt>Nombre:</dt>
          <dd>Alonso Godoy</dd>

          <dt>Carrera:</dt>
          <dd>Ingeniería civil informatica</dd>

          <dt>Área:</dt>
          <dd>Desarrollo de software</dd>

          <dt>Intereses:</dt>
          <dd>Programación y desarollo web</dd>
        </dl>
      </div>
    </section>
  )
}

export default SobreMi
