import React from "react";
import NUMBERS_OF_ROW_DATA from "../../constants/numbers_of_row_data";
import DATA from "../App/data";

class Paginate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      data: DATA.data
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.data) {
      this.setState({
        data: nextProps.data,
        currentPage: 1
      });
    }
  }

  handleClickFirstPage() {
    this.setState(
      {
        currentPage: 1
      },
      () => {
        this.props.dataReceivedFromPaginate(1);
      }
    );
  }

  handleClickLastPage() {
    this.setState(
      {
        currentPage: this.getTotalPage()
      },
      () => {
        this.props.dataReceivedFromPaginate(this.getTotalPage());
      }
    );
  }

  handleClickPreviousPage() {
    if (this.state.currentPage === 1) return;
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      () => {
        this.props.dataReceivedFromPaginate(this.state.currentPage);
      }
    );
  }

  handleClickNextPage() {
    if (this.state.currentPage === this.getTotalPage()) return;
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      () => {
        this.props.dataReceivedFromPaginate(this.state.currentPage);
      }
    );
  }

  getTotalPage() {
    if (this.state.data.length % NUMBERS_OF_ROW_DATA === 0) {
      return this.state.data.length / NUMBERS_OF_ROW_DATA;
    } else {
      return (
        (this.state.data.length -
          (this.state.data.length % NUMBERS_OF_ROW_DATA)) /
          NUMBERS_OF_ROW_DATA +
        1
      );
    }
  }

  render() {
    return (
      <div className="paginate">
        <div>
          {(this.state.currentPage - 1) * NUMBERS_OF_ROW_DATA + 1} to{" "}
          {this.state.currentPage === this.getTotalPage()
            ? this.state.data.length
            : this.state.currentPage * NUMBERS_OF_ROW_DATA}{" "}
          of {this.state.data.length}
        </div>
        <div className="pageContainer">
          <div onClick={this.handleClickFirstPage.bind(this)}>First</div>
          <div onClick={this.handleClickPreviousPage.bind(this)}>Previous</div>
          <div>
            Page {this.state.currentPage} of {this.getTotalPage()}
          </div>
          <div onClick={this.handleClickNextPage.bind(this)}>Next</div>
          <div onClick={this.handleClickLastPage.bind(this)}>Last</div>
        </div>
      </div>
    );
  }
}

export default Paginate;
