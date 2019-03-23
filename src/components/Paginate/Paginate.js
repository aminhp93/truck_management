import React from "react";

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPage: 1,
      numberOfRow: 10,
      totalNumberOfRow: 100
    };
  }

  handleClickFirstPage() {
    this.props.dataReceivedFromPaginate("first");
  }

  handleClickLastPage() {
    this.props.dataReceivedFromPaginate("last");
  }

  handleClickPreviousPage() {
    this.props.dataReceivedFromPaginate("previous");
  }

  handleClickNextPage() {
    this.props.dataReceivedFromPaginate("next");
  }

  render() {
    return (
      <div className="paginate">
        <div>
          1 to {this.state.numberOfRow} of {this.state.totalNumberOfRow}
        </div>
        <div className="pageContainer">
          <div onClick={this.handleClickFirstPage.bind(this)}>First</div>
          <div onClick={this.handleClickPreviousPage.bind(this)}>Previous</div>
          <div>
            Page {this.state.currentPage} of {this.state.totalPage}
          </div>
          <div onClick={this.handleClickNextPage.bind(this)}>Next</div>
          <div onClick={this.handleClickLastPage.bind(this)}>Last</div>
        </div>
      </div>
    );
  }
}

export default Paginate;
