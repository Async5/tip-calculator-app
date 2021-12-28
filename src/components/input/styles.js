import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: 4.3rem;
    left: 1.6rem;
  }

  p {
    display: none;
  }

  ${(props) =>
    props.error
      ? ` p {
      color: #E73208;
      font-size: 1.6rem;
      position: absolute;
      top: 0;
      right: 0;
      display: block;

      font-weight: 700;
    }

    input {
      border: 2px solid #E73208 !important;

      &:focus {
        outline: none !important;
      }
    }`
      : ""}

  input {
    padding: 0.95rem 1.6rem;
    width: 100%;
    display: block;

    border: 2px solid ${(props) => props.theme.colors.white};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.lightGrayishCyan2};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: right;
    color: ${(props) => props.theme.colors.veryDarkCyan};

    margin-top: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors.lightGrayishCyan1};
    }

    &:focus {
      outline-color: ${(props) => props.theme.colors.strongCyan};
    }
  }
`;
