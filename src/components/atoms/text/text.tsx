import { TextProps } from '@/components/atoms/text'
import styled from '@emotion/styled'
import { ForwardedRef, forwardRef } from 'react'
import { vars } from '@ui-tokens'

export const Text:ForwardedRef<TextProps> = forwardRef<HTMLElement, TextProps>(
  ({ id, className, as, color = 'primary', typography, children, lineLimit, align }, ref) => (
    <StyledText
      ref={ref}
      id={id}
      className={className}
      as={as}
      color={color}
      typography={typography}
      lineLimit={lineLimit}
      align={align}
    >
      {children}
    </StyledText>
  ),
)

Text.displayName = 'Text'


const StyledText = styled.span<
  Required<Pick<TextProps, 'typography'>> & Pick<TextProps, 'align' | 'lineLimit'>
>`
  display: inline-block;
  ${({ typography }) => vars.$semantic.typography[typography]};

  color: ${({ color }) => vars.$semantic.color.text[color]};
  text-align: ${({ align }) => align};

  ${({ lineLimit }) =>
    lineLimit &&
    `
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${lineLimit};
    -webkit-box-orient: vertical;
    word-break: break-all;
  `};
  
  @media (prefers-color-scheme: dark) {
    color: ${({ color }) => vars.$semantic.color.text[color]};
  }
`
