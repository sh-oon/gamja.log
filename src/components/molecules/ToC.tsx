'use client'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Text } from '@/components/atoms'

type TElementPosition = {
  id: string
  top: number
  tag: string
}


export const  ToC = () => {
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
    <StyledToC>
      <ul className='flex flex-col'>
        {elementPosition.map((el) => {
          return (
            <StyledToCItem
              key={el.id}
              onClick={() => clickToScroll(el.id)}
              $padding={el.tag}
            >
              {el.id}
            </StyledToCItem>
          )
        })}
      </ul>
    </StyledToC>
  )
}

const StyledToC = styled.aside`
  position: sticky;
  top: 5rem;
  left: 100%;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-top: 5rem;
  z-index: 100;
  transition: left 0.3s;
  overflow-y: auto;

  & ul {
    display: flex;
    flex-direction: column;
    line-height: 200%;
  }
`

const textStyle = css`
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
  
  &:hover {
    color: #000;
  }
`

const StyledToCItem = styled.aside<{$padding: string}>`
  ${textStyle}
  
  ${({ $padding }) => css`
    padding-left: ${$padding === 'h2' ? '0' : $padding === 'h3' ? '1rem' : $padding === 'h4' ? '2rem' : '3rem'};
  `}
  
`
