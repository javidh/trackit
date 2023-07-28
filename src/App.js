import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Time Tracker
        </h1>
        <form>
          <label htmlFor="activity">Activity:</label>
          <input type="text" id="activity" name="activity" required />
          <br />

          <label htmlFor="longShortTerm">Long term/Short term:</label>
          <select id="longShortTerm" name="longShortTerm" required>
            <option value="">Select</option>
            <option value="longTerm">Long Term</option>
            <option value="shortTerm">Short Term</option>
          </select>
          <br />

          <label htmlFor="growth">Growth:</label>
          <select id="growth" name="growth" required>
            <option value="">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <br />

          <label htmlFor="risk">Risk:</label>
          <select id="risk" name="risk" required>
            <option value="">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <br />

          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
