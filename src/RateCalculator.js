import { useState } from "react";
import { Calc } from "./Calc";

export default function RateCalculator() {
  const [investedAmount, setInvestedAmount] = useState();
  const [years, setYears] = useState();
  const [receivedAmount, setReceivedAmount] = useState();
  const [result, setResult] = useState(0);
  return (
    <div>
      <div className="formBox">
        <label>Invested Amount</label>{" "}
        <div className="inputContainers">
          <input
            value={investedAmount}
            onChange={(e) => setInvestedAmount(e.target.value)}
          />{" "}
        </div>
        {/* </div>
      <div className="formBox"> */}
        <label>Received Amount</label>{" "}
        <div className="inputContainers">
          <input
            value={receivedAmount}
            onChange={(e) => setReceivedAmount(e.target.value)}
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
              Calc.getRate(
                parseFloat(years),
                parseFloat(investedAmount),
                parseFloat(receivedAmount)
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
