import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const AnimatedImg = styled.div`
  animation: ${rotate} 1.1s cubic-bezier(0.795, 0.155, 0.210, 0.880) infinite;
  & > * {
    width: 72px;
  }
`

const StyledSVG = styled(`svg`, { size: String, fill: String, stroke: String })`
  width: 32px;
  height: 32px;
  display: flex;
  path {
    stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
    fill: ${({ fill, theme }) => fill ?? theme.bg6};
  }
`

const LocalLoader = ({ fill, stroke, ...rest }) => {
  return (
    <Wrapper fill={fill}>
      <AnimatedImg>
        <StyledSVG viewBox="0 0 24 24" fill={null} xmlns="http://www.w3.org/2000/svg" stroke={stroke} {...rest}>
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </StyledSVG>
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
