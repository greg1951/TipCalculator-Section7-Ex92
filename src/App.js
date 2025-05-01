import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
  /*
  Created this high-level component so the imput fields would behave properly.
  (I was losing the cursor on every character entered in the check amount field.)
*/
  function TipCalculator() {
    const [billAmount, setBillAmount] = useState("");
    const [party1Pct, setParty1Pct] = useState(0);
    const [party2Pct, setParty2Pct] = useState(0);

    const tip = billAmount * ((party1Pct + party2Pct) / 2 / 100);

    return (
      <div className="App">
        <BillAmount billAmount={billAmount} onBillChange={setBillAmount} />
        <SelectTipPercentage percent={party1Pct} onSelect={setParty1Pct}>
          {"How did you like the service?"}
        </SelectTipPercentage>
        <SelectTipPercentage percent={party2Pct} onSelect={setParty2Pct}>
          {"How did your friend like the service?"}
        </SelectTipPercentage>
        {billAmount > 0 && (
          <>
            <FinalPayment billAmount={billAmount} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    );
    function handleReset() {
      setParty1Pct(0);
      setParty2Pct(0);
      setBillAmount("");
    }
  }

  function BillAmount({ billAmount, onBillChange }) {
    return (
      <div>
        <label>What is the check amount?</label>
        <input
          type="number"
          placeholder="Bill Amount"
          value={billAmount}
          onChange={(e) => onBillChange(Number(e.target.value))}
        />
      </div>
    );
  }
  function SelectTipPercentage({ children, percent, onSelect }) {
    return (
      <div>
        <label>{children}</label>
        <select
          value={percent}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">HORRIBLE</option>
          <option value="5">NOT GOOD</option>
          <option value="10">OK</option>
          <option value="15">GOOD</option>
          <option value="20">RAD</option>
        </select>
      </div>
    );
  }
  function FinalPayment({ billAmount, tip }) {
    const numTotal = billAmount + tip;
    const fmtdTotal = numTotal.toFixed(2);
    return (
      <div>
        <h4>
          Pay total: ${fmtdTotal} (Check: ${billAmount} + Tip: ${tip})
        </h4>
      </div>
    );
  }
  function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
}
