import styled from '@emotion/styled'

export const Logo = () => {
  return (
    <StyledLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle className="bg" cx="50" cy="50" r="45" />
      <path className="potato" d="M30 40 Q50 25 70 40 Q80 50 70 60 Q50 75 30 60 Q20 50 30 40 Z" />
      <circle className="eye" cx="40" cy="45" r="3" />
      <circle className="eye" cx="60" cy="45" r="3" />
      <text className="code" x="35" y="70">{}</text>
    </StyledLogo>
  
  )
}

const StyledLogo = styled.svg`
  & .bg {
    fill: #8B4513;
  }
  & .potato {
    fill: #D2691E;
  }
  
  & .eye {
    fill: #FFFFFF;
  }
  
  & .code {
    fill: #FFFFFF;
    font-family: monospace;
    font-size: 24px;
  }
`
