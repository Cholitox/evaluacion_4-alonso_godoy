
function Habilidades() {
  return (
    <section className="seccion" aria-labelledby="titulo-habilidades">
      <h1 className="titulo" id="titulo-habilidades">
        Mis habilidades
      </h1>

      <ul className="habilidades">
        <li className="habilidad">
          <h2>HTML</h2>
          <p>Creación y estructura de páginas web.</p>
        </li>

        <li className="habilidad">
          <h2>CSS</h2>
          <p>Diseño, colores, distribución y estilos.</p>
        </li>

        <li className="habilidad">
          <h2>JavaScript</h2>
          <p>Interactividad y funcionamiento de páginas web.</p>
        </li>

        <li className="habilidad">
          <h2>SQL</h2>
          <p>Creación y manejo de bases de datos.</p>
        </li>
      </ul>
    </section>
  )
}

export default Habilidades
