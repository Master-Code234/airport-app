const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Flight Schedule</h1>

        <form action="/flights" method="POST">
          <select name="airport" id="">
            <option value="Default">--Please choose an option--</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <button type="submit" name="airport-selection">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
module.exports = New;
