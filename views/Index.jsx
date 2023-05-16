const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>List of Flights</h1>

        <ul>
          {this.props.planes.map((data, i) => {
            const displayPlanes =
              data.name[0].toUpperCase() + data.name.substring(1);
            return (
              <li>
                <a href={`/flights/${i}`}>{displayPlanes} </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
