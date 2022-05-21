import { useState } from "react";
import "./styles.css";
import AmountCalculator from "./AmountCalculator";
import RateCalculator from "./RateCalculator";

export default function App() {
  const [calc, calculate] = useState("amount");

  return (
    <div className="App">
      <div className="conts">
        <h1>
          Compount Interest?{" "}
          <span style={{ color: "blue" }} role="img" aria-label="emoji">
            {" "}
            Trouble 😑
          </span>{" "}
        </h1>
        <p className="para">
          We often get deceived because of Maths. However a small trick that
          assume whatever amount they are giving after a certain years of
          incubation, assume how much a{" "}
          <b>FD or RD will give at a fix interest of 5% or 6% or 7%.</b> <br />{" "}
          If you think, the amount promised by mediator investor is actually
          small that you can click on <b>Rate button</b> below and give the
          result amount, and your invested amount to see how much <b>rate </b>
          benefit is given to you in that many years{" "}
        </p>

        <div className={`selectCalc`}>
          <div
            className={`normal ${calc === "amount" ? "selected" : ""}`}
            onClick={() => calculate("amount")}
          >
            Amount
          </div>
          <div
            className={`normal ${calc === "rate" ? "selected" : ""}`}
            onClick={() => calculate("rate")}
          >
            Rate
          </div>
        </div>
        <div className="calcContainer">
          {calc === "amount" ? <AmountCalculator /> : <RateCalculator />}
        </div>
      </div>
    </div>
  );
}
