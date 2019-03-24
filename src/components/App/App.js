import React from "react";
import ReactDOM from "react-dom";
import DATA from "./data";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { RemoveCircle, Edit } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Paginate from "../Paginate";
import SearchBox from "../SearchBox";
import CreateNewTruck from "../CreateNewTruck";
import showModal from "../Modal";
import NUMBERS_OF_ROW_DATA from "../../constants/numbers_of_row_data";

const ROWDATA = DATA.data.slice(0, NUMBERS_OF_ROW_DATA);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA.data
    };
    const that = this;
    this.columnDefs = [
      {
        headerName: "Truck plate",
        field: "truck_plate",
        width: 120,
        cellRenderer: function(params) {
          const div = document.createElement("div");
          div.className = "flex";
          const divText = document.createElement("span");
          divText.innerHTML = params.data.truck_plate || "";

          const editIcon = document.createElement("span");
          editIcon.className = "editIcon";
          ReactDOM.render(<Edit />, editIcon);
          editIcon.onclick = function() {
            showModal({
              component: CreateNewTruck,
              props: {
                data: params.data,
                callBack: that.handleCallBackEdit.bind(that)
              }
            });
          };
          const removeIcon = document.createElement("span");
          removeIcon.className = "removeIcon";
          ReactDOM.render(<RemoveCircle />, removeIcon);
          removeIcon.onclick = function() {
            that.state.data.map((item, index) => {
              if (item.id === params.data.id) {
                that.state.data.splice(index, 1);
                return;
              }
            });
            const newData = that.state.data.slice(0, NUMBERS_OF_ROW_DATA);
            that.gridApi.setRowData(newData);
            that.setState({
              data: that.state.data
            });
          };

          div.appendChild(editIcon);
          div.appendChild(removeIcon);
          div.appendChild(divText);
          return div;
        }
      },
      {
        headerName: "Cargo type",
        field: "cargo_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.cargo_type || "";
        }
      },
      {
        headerName: "Driver",
        field: "driver",
        width: 120,
        cellRenderer: function(params) {
          return params.data.driver || "";
        }
      },
      {
        headerName: "Truck type",
        field: "truck_type",
        width: 120,
        cellRenderer: function(params) {
          return params.data.truck_type || "";
        }
      },
      {
        headerName: "Price",
        field: "price",
        width: 120,
        cellRenderer: function(params) {
          return params.data.price || "";
        }
      },
      {
        headerName: "Dimenson (L-W-H)",
        field: "dimenson",
        width: 120,
        cellRenderer: function(params) {
          return params.data.dimenson || "";
        }
      },
      {
        headerName: "Parking address",
        field: "parking_address",
        width: 120,
        cellRenderer: function(params) {
          return params.data.parking_address || "";
        }
      },
      {
        headerName: "Production year",
        field: "production_year",
        width: 120,
        cellRenderer: function(params) {
          return params.data.production_year || "";
        }
      },
      {
        headerName: "Status",
        field: "status",
        width: 120,
        cellRenderer: function(params) {
          return params.data.status || "";
        }
      },
      {
        headerName: "Description",
        field: "description",
        width: 120,
        cellRenderer: function(params) {
          return params.data.description || "";
        }
      }
    ];
    this.defaultColDef = {};
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  handleOnClick() {
    showModal({
      component: CreateNewTruck,
      props: {
        callBack: this.handleCallBackAdd.bind(this)
      }
    });
  }

  handleCallBackEdit(editedData) {
    const data = this.state.data;
    data.map((item, index) => {
      if (item.id === editedData.id) {
        data.splice(index, 1);
        data.unshift(editedData);
        return;
      }
    });
    const newData = data.slice(0, NUMBERS_OF_ROW_DATA);
    this.gridApi.setRowData(newData);
    this.setState({
      data
    });
  }

  handleCallBackAdd(addedData) {
    const data = this.state.data;
    data.unshift(addedData);
    const newData = data.slice(0, NUMBERS_OF_ROW_DATA);
    this.gridApi.setRowData(newData);
    this.setState({
      data
    });
  }

  dataReceivedFromSearchBox(data) {
    this.gridApi.setQuickFilter(data);
  }

  dataReceivedFromPaginate(pageId) {
    const data = DATA.data.slice(
      (pageId - 1) * NUMBERS_OF_ROW_DATA,
      pageId * NUMBERS_OF_ROW_DATA
    );
    this.gridApi.setRowData(data);
  }

  render() {
    return (
      <div className="app">
        <div className="title">Truck Management</div>
        <div className="header">
          <SearchBox
            dataReceivedFromSearchBox={this.dataReceivedFromSearchBox.bind(
              this
            )}
          />
          <div onClick={this.handleOnClick.bind(this)}>
            <Button variant="contained" color="primary">
              Add truck
            </Button>
          </div>
        </div>

        <div
          className="ag-theme-balham"
          style={{
            flex: 1
          }}
        >
          <AgGridReact
            onGridReady={this.onGridReady.bind(this)}
            columnDefs={this.columnDefs}
            rowData={ROWDATA}
            enableSorting={true}
            enableFilter={true}
            //   defaultColDef={this.defaultColDef}
          />
        </div>
        <Paginate
          data={this.state.data}
          dataReceivedFromPaginate={this.dataReceivedFromPaginate.bind(this)}
        />
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
