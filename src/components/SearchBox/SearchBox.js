import React from "react";
import Input from "@material-ui/core/Input";

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Search"
          onChange={e => this.props.dataReceivedFromSearchBox(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBox;
