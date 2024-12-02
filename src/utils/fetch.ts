import * as Sentry from '@sentry/nextjs'

async function fetchWithHeaders(url: string, options: RequestInit = {}) {
  const wrappedOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, wrappedOptions)

  if (!response.ok) {
    Sentry.captureException(new Error('Failed to fetch'), {
      extra: {
        url,
        options: wrappedOptions,
      },
    })
    throw new Error('Failed to fetch')
  }

  const json = await response.json()

  return json
}

export const fetcher = {
  get: (url: string, options: RequestInit = {}) => fetchWithHeaders(url, { ...options, method: 'GET' }),
  post: (url: string, options: RequestInit = {}) => fetchWithHeaders(url, { ...options, method: 'POST' }),
  put: (url: string, options: RequestInit = {}) => fetchWithHeaders(url, { ...options, method: 'PUT' }),
  patch: (url: string, options: RequestInit = {}) => fetchWithHeaders(url, { ...options, method: 'PATCH' }),
  delete: (url: string, options: RequestInit = {}) => fetchWithHeaders(url, { ...options, method: 'DELETE' }),
}
