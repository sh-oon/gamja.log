import { useState } from 'react'
import { fetcher } from '../utils/fetch'

export const useFetcher = () => {
  const [pending, setPending] = useState(false)

  const get = async (url: string, options?: RequestInit) => {
    setPending(true)
    const res = await fetcher.get(url, options)
    setPending(false)

    return {
      data: res.data,
      status: res.status,
      error: res.error,
      message: res.message,
    }
  }

  const post = async (url: string, options?: RequestInit) => {
    setPending(true)
    const res = await fetcher.post(url, options)
    setPending(false)

    return {
      data: res.data,
      status: res.status,
      error: res.error,
      message: res.message,
    }
  }

  const put = async (url: string, options?: RequestInit) => {
    setPending(true)
    const res = await fetcher.put(url, options)
    setPending(false)

    return {
      data: res.data,
      status: res.status,
      error: res.error,
      message: res.message,
    }
  }

  const patch = async (url: string, options?: RequestInit) => {
    setPending(true)
    const res = await fetcher.patch(url, options)
    setPending(false)

    return {
      data: res.data,
      status: res.status,
      error: res.error,
      message: res.message,
    }
  }

  const _delete = async (url: string, options?: RequestInit) => {
    setPending(true)
    const res = await fetcher.delete(url, options)
    setPending(false)

    return {
      data: res.data,
      status: res.status,
      error: res.error,
      message: res.message,
    }
  }

  return { pending, get, post, put, patch, _delete }
}
