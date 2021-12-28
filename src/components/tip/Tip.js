/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import {
  StyledTip,
  StyledTipCustom,
  StyledTipPercent,
  StyledTipPercentContainer,
} from "./styles";

const Tip = ({ tipPercent, setTipPercent }) => {
  const inputEl = useRef();

  const onClickHandlerButton = () => {
    const tips = document.querySelectorAll(".tip");

    tips.forEach((tip) => {
      tip.addEventListener("click", (e) => {
        tips.forEach((tip) => {
          tip.classList.remove("active");
        });

        inputEl.current.value = "";

        if (!e.target.classList.contains("active")) {
          e.target.classList.add("active");

          setTipPercent(e.target.innerText.split("%")[0]);
        }
      });
    });
  };

  const onChangeHandlerCustom = (e) => {
    const tips = document.querySelectorAll(".tip");
    tips.forEach((tip) => {
      tip.classList.remove("active");
    });

    const value = e.target.value;

    setTipPercent(value);
  };

  useEffect(() => {
    onClickHandlerButton();
  }, []);

  return (
    <StyledTip>
      <h2>Select Tip %</h2>
      <StyledTipPercentContainer>
        <StyledTipPercent className="tip">5%</StyledTipPercent>
        <StyledTipPercent className="tip">10%</StyledTipPercent>
        <StyledTipPercent className="tip active">15%</StyledTipPercent>
        <StyledTipPercent className="tip">25%</StyledTipPercent>
        <StyledTipPercent className="tip">50%</StyledTipPercent>
        <StyledTipCustom
          placeholder="Custom"
          ref={inputEl}
          onChange={onChangeHandlerCustom}
          value={tipPercent}
        />
      </StyledTipPercentContainer>
    </StyledTip>
  );
};

export default Tip;
