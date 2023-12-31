import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    cursor: auto;
    display: flex;
    flex-direction: column;
    background: #fff;
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  $isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content},
    ${Overlay} {
      transition:
        transform 0.2s ease-in,
        opacity ${theme.transition.default};

      ${$isOpen && wrapperModifiers.open()}
      ${!$isOpen && wrapperModifiers.close()}
    }
  `}
`
