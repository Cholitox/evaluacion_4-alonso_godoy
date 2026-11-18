
import { useEffect, useState } from 'react'
import type { GitHubRepo } from '../types'

function useGitHub() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function obtenerRepos() {
      try {
        const respuesta = await fetch(
          'https://api.github.com/users/Cholitox/repos?sort=updated&per_page=6',
          { signal: controller.signal }
        )

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los repositorios')
        }

        const datos: GitHubRepo[] = await respuesta.json()
        setRepos(datos)
      } catch (err) {
        if (controller.signal.aborted) return

        setError(
          err instanceof Error ? err.message : 'Ocurrió un error'
        )
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    obtenerRepos()

    return () => controller.abort()
  }, [])

  return { repos, loading, error }
}

export default useGitHub
