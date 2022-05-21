import { useState } from "react";
import { Calc } from "./Calc";

export default function AmountCalculator() {
  const [investedAmount, setInvestedAmount] = useState();
  const [years, setYears] = useState();
  const [rate, setRate] = useState();
  const [result, setResult] = useState(0);
  return (
    <div>
      <div className="formBox">
        <label>Rate of Interest</label>{" "}
        <div className="inputContainers">
          <input value={rate} onChange={(e) => setRate(e.target.value)} />{" "}
        </div>
        {/* </div>
      <div className="formBox"> */}
        <label>Invested Amount</label>{" "}
        <div className="inputContainers">
          <input
            value={investedAmount}
            onChange={(e) => setInvestedAmount(e.target.value)}
          />{" "}
        </div>
        {/* </div>
      <div className="formBox"> */}
        <label>Invested Years</label>{" "}
        <div className="inputContainers">
          <input value={years} onChange={(e) => setYears(e.target.value)} />{" "}
        </div>
        {/* </div>

      <div className="formBox"> */}
        <button
          className="btn"
          onClick={() =>
            setResult(
              Calc.interest(
                parseFloat(years),
                parseFloat(rate),
                parseFloat(investedAmount)
              )
            )
          }
        >
          Calculate
        </button>
        <div className="result">{Calc.getDecimal(result)}</div>
      </div>
    </div>
  );
}
