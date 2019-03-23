import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input
          placeholder="Search"
          onChange={e => this.props.dataReceiveFromSearchBox(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBox;
