import styled from "styled-components";

export const StyledTip = styled.div`
  padding: 3.2rem 0rem;
`;

export const StyledTipPercentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.7rem, 1fr));
  grid-template-rows: repeat(3, minmax(4.8rem, 1fr));
  grid-gap: 1.6rem;

  margin-top: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, minmax(11.7rem, 1fr));
    grid-template-rows: repeat(2, minmax(4.8rem, 1fr));
  }
`;

export const StyledTipPercent = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.veryDarkCyan};
  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.colors.veryDarkCyan};
    background-color: ${(props) => props.theme.colors.strongCyan};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.veryDarkCyan};
  }
`;

export const StyledTipCustom = styled.input`
  background-color: ${(props) => props.theme.colors.lightGrayishCyan2};
  border: none;
  border-radius: 0.6rem;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: right;
  padding: 0rem 1.7rem;
  color: ${(props) => props.theme.colors.veryDarkCyan};

  &::placeholder {
    color: ${(props) => props.theme.colors.darkGrayishCyan1};
  }

  &:focus {
    outline-color: ${(props) => props.theme.colors.strongCyan};
  }
`;
