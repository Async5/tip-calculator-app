import { useState, useEffect, useRef } from "react";
import {
  StyledCalculatorContainer,
  StyledInputsContainer,
  StyledResultContainer,
  StyledTipItem,
} from "./styles";

// Components
import Input from "./components/input/Input";
import Tip from "./components/tip/Tip";

// Icons
import iconDolar from "./images/icon-dollar.svg";
import iconPeople from "./images/icon-person.svg";

const App = () => {
  const [bill, setBill] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  const [tipPercent, setTipPercent] = useState("15");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const elBtn = useRef();

  useEffect(() => {
    const tip = (bill * tipPercent) / 100;

    setTipAmount(tip);
    setTotal(tip * numberOfPeople);

    if (tip === 0) {
      elBtn.current.classList.add("disable");
    } else {
      elBtn.current.classList.remove("disable");
    }
  }, [bill, numberOfPeople, tipPercent]);

  const onClickHandler = (e) => {
    setBill("");
    setNumberOfPeople("1");
    setTipPercent("");
  };

  return (
    <>
      <main>
        <h1>
          SPLI
          <br />
          TTER
        </h1>
        <StyledCalculatorContainer>
          <StyledInputsContainer>
            <Input
              title="Bill"
              placeholder={"0"}
              icon={iconDolar}
              value={bill}
              setValue={setBill}
            />
            <Tip tipPercent={tipPercent} setTipPercent={setTipPercent} />
            <Input
              title={"Number of People"}
              placeholder={"0"}
              icon={iconPeople}
              value={numberOfPeople}
              setValue={setNumberOfPeople}
              error={
                (numberOfPeople === "0") | (numberOfPeople === "")
                  ? true
                  : false
              }
            />
          </StyledInputsContainer>
          <StyledResultContainer>
            <div>
              <StyledTipItem>
                <div>
                  <h4>Tip Amount</h4>
                  <small>/ Person</small>
                </div>
                <h3>${tipAmount.toFixed(2)}</h3>
              </StyledTipItem>
              <StyledTipItem>
                <div>
                  <h4>Total</h4>
                  <small>/ Person</small>
                </div>
                <h3>${total.toFixed(2)}</h3>
              </StyledTipItem>
            </div>
            <button ref={elBtn} onClick={onClickHandler}>
              RESET
            </button>
          </StyledResultContainer>
        </StyledCalculatorContainer>
      </main>
      <footer class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Emre Cakir</a>.
      </footer>
    </>
  );
};

export default App;
