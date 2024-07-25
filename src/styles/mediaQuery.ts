//mediaQuery.ts
import { SerializedStyles, css } from '@emotion/react'

const breakPoints = {
  desktop: 1920,
  tablet: 1439,
  mobile: 767,
}

export const MobileStyle = (style: SerializedStyles) => css`
	@media screen and (max-width: ${breakPoints.mobile}px) {
		${style}
	}
`

export const TabletStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.tablet}px) {
    ${style}
  }
`

export const DesktopStyle = (style: SerializedStyles) => css`
  @media screen and (min-width: ${breakPoints.desktop}px) {
    ${style}
  }
`
