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
        <label>Rate Of Interest</label>{" "}
        <div className="inputContainers">
          <input
            value={rate}
            onChange={(e) => setRate(parseInt("0" + e.target.value, 10))}
          />{" "}
        </div>
      </div>
      <div className="formBox">
        <label>Invested Amount</label>{" "}
        <div className="inputContainers">
          <input
            value={investedAmount}
            onChange={(e) =>
              setInvestedAmount(parseInt("0" + e.target.value, 10))
            }
          />{" "}
        </div>
      </div>
      <div className="formBox">
        <label>Invested Years</label>{" "}
        <div className="inputContainers">
          <input
            value={years}
            onChange={(e) => setYears(parseInt("0" + e.target.value, 10))}
          />{" "}
        </div>
      </div>

      <div className="formBox">
        <button
          className="btn"
          onClick={() => setResult(Calc.interest(years, rate, investedAmount))}
        >
          Calculate
        </button>
        <div className="result">{Calc.getDecimal(result)}</div>
      </div>
    </div>
  );
}
