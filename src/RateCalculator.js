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
            onChange={(e) =>
              setInvestedAmount(parseInt("0" + e.target.value, 10))
            }
          />{" "}
        </div>
        {/* </div>
      <div className="formBox"> */}
        <label>Received Amount</label>{" "}
        <div className="inputContainers">
          <input
            value={receivedAmount}
            onChange={(e) =>
              setReceivedAmount(parseInt("0" + e.target.value, 10))
            }
          />{" "}
        </div>
        {/* </div>
      <div className="formBox"> */}
        <label>Invested Years</label>{" "}
        <div className="inputContainers">
          <input
            value={years}
            onChange={(e) => setYears(parseInt("0" + e.target.value, 10))}
          />{" "}
        </div>
        {/* </div>

      <div className="formBox"> */}
        <button
          className="btn"
          onClick={() =>
            setResult(Calc.getRate(years, investedAmount, receivedAmount))
          }
        >
          Calculate
        </button>
        <div className="result">{Calc.getDecimal(result)}</div>
      </div>
    </div>
  );
}
