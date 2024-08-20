'use client'

import { useEffect, useState } from 'react'

type TElementPosition = {
  id: string
  top: number
  tag: string
}

function ToC() {
  const [elementPosition, setElementPosition] = useState<TElementPosition[]>([])

  useEffect(() => {
    const mds = document?.getElementById('markdown')?.querySelectorAll('h2, h3, h4, h5, h6') || []

    setElementPosition(
      Array.from(mds || []).map((md) => {
        return {
          id: md.id,
          tag: md.tagName.toLowerCase(),
          top: md.getBoundingClientRect().top + window.scrollY,
        }
      }),
    )
  }, [])

  const clickToScroll = (id: string) => {
    const el = elementPosition.find((el) => el.id === id)
    if (!el) return
    console.log(elementPosition, window.scrollY);

    window.scrollTo({ top: el.top - 100 , behavior: 'smooth' })
  }

  const textSize = (tag: string) => {
    switch (tag) {
      case 'h1':
        return 'text-xl'
      case 'h2':
        return 'text-lg'
      case 'h3':
        return 'text-base pl-2'
      case 'h4':
        return 'text-sm pl-4'
      case 'h5':
        return 'text-xs'
      case 'h6':
        return 'text-xs'
      default:
        return 'text-sm'
    }
  }

  return (
    <aside className='sticky flex-1 flex-shrink-0 w-fit top-[120px] left-full h-full'>
      <ul className='flex flex-col'>
        {elementPosition.map((el) => {
          return (
            <li
              key={el.id}
              className={`block text-sm cursor-pointer text-grey-600 hover:text-black dark:hover:text-grey-200 ${textSize(el.tag)}`}
              onClick={() => clickToScroll(el.id)}
            >
              {el.id}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default ToC
