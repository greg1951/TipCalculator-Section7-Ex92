import "./styles.css";

export default function App() {
  const serviceRatings = [
    "BAD (0%)",
    "OK (10%)",
    "GOOD (15%)",
    "AMAZING (20%)",
  ];

  return (
    <div className="App">
      <BillAmount />
      <h3>Pay $0 ($0 (Check) + $0 (Tip)</h3>
      <button type="reset">Reset</button>
    </div>
  );

  function BillAmount() {
    return (
      <div>
        <form>
          <label for="checkAmount">What is the check amount?</label>
          <input
            type="number"
            name="checkAmount"
            value="0"
            id="checkAmount"
          ></input>
        </form>
      </div>
    );
  }
  function Party1Tip() {}
  function Party2Tip() {}
}
