import { vars } from '@/constants/tokens'
import { copyToClipboard } from '@/utils/common'
import styled from '@emotion/styled'
import React from 'react'
import { FaRegCopy } from 'react-icons/fa'

export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  const preRef = React.useRef<HTMLPreElement>(null)

  const handleCopy = () => {
    if (preRef.current) {
      const codeElement = preRef.current.querySelector('code')
      if (codeElement) {
        copyToClipboard(codeElement.innerText)
      }
    }
  }

  return (
    <StyledPre ref={preRef}>
      {children}
      <button className='copy-button' onClick={handleCopy}>
        <FaRegCopy />
      </button>
    </StyledPre>
  )
}

const StyledPre = styled.pre`
  border: 1px solid var(--color-border-line);
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  font-size: 0.875rem;
  margin: 1rem 0;
  position: relative;
  & code {
    background-color: transparent;
  }

  & code > [data-line]::before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    width: 1rem;
    margin-right: 2rem;
    text-align: right;
    color: #6b7280;
  }

  & code > span {
    display: inline-block;
    padding: 0 1rem;
  }

  & code[data-line-numbers-max-digits='2'] > [data-line]::before {
    width: 2rem;
  }

  & code[data-line-numbers-max-digits='3'] > [data-line]::before {
    width: 3rem;
  }

  & .copy-button {
    position: absolute;
    opacity: 0;
    display: flex;
    top: 0.5rem;
    right: 0.5rem;
    background-color: ${vars.$semantic.color.fill.interactive};
    color: ${vars.$semantic.color.text.interactive};
    border: 1px solid ${vars.$semantic.color.border.divider};
    border-radius: 0.375rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${vars.$semantic.color.fill.interactiveHover};
      color: ${vars.$semantic.color.text.interactiveHover};
    }
  }

  &:hover {
    .copy-button {
      opacity: 1;
    }
  }
`
