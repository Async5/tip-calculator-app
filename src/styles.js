import styled from "styled-components";

export const StyledCalculatorContainer = styled.div`
  max-width: 55rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 92rem;
  }

  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 2.4rem;

  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  padding: 3.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    border-bottom-left-radius: 2.4rem;
    border-bottom-right-radius: 2.4rem;

    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 50% 50%;

    height: 48rem;

    padding: 0;
  }
`;

export const StyledInputsContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 37.9rem;
    height: 36rem;

    align-self: center;
    justify-self: center;
  }
`;

export const StyledResultContainer = styled.div`
  background-color: ${(props) => props.theme.colors.veryDarkCyan};
  border-radius: 1.5rem;
  color: white;
  padding: 3.9rem 2.4rem 2.4rem 2.4rem;
  margin-top: 3.2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 0;
    padding: 4.1rem;

    width: 41.3rem;
    height: 41.6rem;

    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.veryDarkCyan};
    background-color: ${(props) => props.theme.colors.strongCyan};
    border: none;
    padding: 1.25rem 0rem;
    border-radius: 0.6rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.hover};
    }

    &.disable {
      opacity: 0.2;
      pointer-events: none;
    }

    &:active {
      transform: scale(0.99);
    }
  }
`;

export const StyledTipItem = styled.div`
  &:first-child {
    margin-bottom: 2.4rem;
  }

  &:nth-child(2) {
    margin-bottom: 3.4rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    &:first-child {
      margin-bottom: 4.5rem;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
