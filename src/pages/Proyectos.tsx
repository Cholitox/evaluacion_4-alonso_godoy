
import useGitHub from '../hooks/useGitHub'

function quitarPuntos(texto: string) {
  return texto.replace(/\./g, '')
}

function Proyectos() {
  const { repos, loading, error } = useGitHub()

  return (
    <section className="seccion" aria-labelledby="titulo-proyectos">
      <h1 className="titulo" id="titulo-proyectos">
        Mis proyectos
      </h1>

      <ul className="proyectos">
        <li className="proyecto">
          <article>
            <h2 className="proyecto__titulo">Portafolio web</h2>
            <p>
              Mi primer portafolio creado con HTML y CSS
              para mostrar mis habilidades y proyectos
            </p>
            <a
              className="proyecto__enlace"
              href="https://github.com/ICINF1107-2026/WEB_01_ALONSO"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </article>
        </li>

        <li className="proyecto">
          <article>
            <h2 className="proyecto__titulo">Mini portafolio</h2>
            <p>
              Portafolio desarrollado con React y TypeScript
              para practicar el desarrollo web
            </p>
            <a
              className="proyecto__enlace"
              href="https://github.com/Cholitox/mini-portafolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </article>
        </li>

        <li className="proyecto">
          <article>
            <h2 className="proyecto__titulo">Panel de Ferias Araucanía</h2>
            <p>
              Panel de información sobre las ferias libres
              y el clima de La Araucanía
            </p>
            <a
              className="proyecto__enlace"
              href="https://github.com/Cholitox/panel-ferias-araucania"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </article>
        </li>
      </ul>

      <section className="repositorios" aria-labelledby="titulo-repos">
        <h2 id="titulo-repos">Mis repositorios de GitHub</h2>

        {loading && (
          <p role="status" aria-live="polite">
            Cargando repositorios
          </p>
        )}

        {error && (
          <p role="alert">
            Error: {quitarPuntos(error)}
          </p>
        )}

        {!loading && !error && (
          <ul className="proyectos">
            {repos.map((repo) => (
              <li className="proyecto" key={repo.id}>
                <article>
                  <h3 className="proyecto__titulo">
                    {quitarPuntos(repo.name)}
                  </h3>

                  {repo.description && (
                    <p>{quitarPuntos(repo.description)}</p>
                  )}

                  <a
                    className="proyecto__enlace"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver repositorio
                  </a>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  )
}

export default Proyectos
